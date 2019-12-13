

// Load signing key
const forge = require("node-forge");
const fs = require("fs");
const p12Content = fs.readFileSync("Interblocks-sandbox.p12", 'binary');
const p12Asn1 = forge.asn1.fromDer(p12Content, false);
p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, "keystorepassword");
const keyObj = p12.getBags({
  friendlyName: "keyalias",
  bagType: forge.pki.oids.pkcs8ShroudedKeyBag
}).friendlyName[0];
const signingKey = forge.pki.privateKeyToPem(keyObj.key);

const openAPIClient = require('./src/ApiClient.js');
const client = openAPIClient.instance;
client.basePath = "https://sandbox.api.mastercard.com/mdes";

// Add the interceptor code responsible for signing HTTP requests

console.log("Hello");
client.applyAuthToRequest = function(request) {
  const _end = request._end;
  request._end = function() {
    const authHeader = oauth.getAuthorizationHeader(request.url, request.method, JSON.stringify(request._data), "_BdjWvPBLJx3lN8bI0agMIdNRgq9DKCBVbUBmXEZ053278a9!faa5279bb4384bf39b923edbfb22343a0000000000000000", signingKey);
    request.req.setHeader('Authorization', authHeader);
    _end.call(request);
  }

  return request;
};


const mcapi = require('mastercard-client-encryption');
const config =
{
  paths: [
    {
      path: "/tokenize",
      toEncrypt: [
        {
          element: "cardInfo.encryptedData",
          obj: "cardInfo"
        },
        {
          element: "fundingAccountInfo.encryptedPayload.encryptedData",
          obj: "fundingAccountInfo.encryptedPayload"
        }],
      toDecrypt: [
        {
          element: "tokenDetail",
          obj: "tokenDetail.encryptedData"
        }
      ]
    },
    {
      path: "/searchTokens",
      toEncrypt: [
        {
          element: "cardInfo.encryptedData",
          obj: "cardInfo"
        },
        {
          element: "fundingAccountInfo.encryptedPayload.encryptedData",
          obj: "fundingAccountInfo.encryptedPayload"
        }],
      toDecrypt: []
    },
    {
      path: "/getToken",
      toEncrypt: [],
      toDecrypt: [
        {
          element: "tokenDetail",
          obj: "tokenDetail.encryptedData"
        }]
    },
    {
      path: "/transact",
      toEncrypt: [],
      toDecrypt: [
        {
          element: "encryptedPayload",
          obj: "encryptedPayload.encryptedData"
        }]
    },
    {
      path: "/notifyTokenUpdated",
      toEncrypt: [
        {
          element: "encryptedPayload.encryptedData",
          obj: "encryptedPayload"
        }],
      toDecrypt: []
    }
  ],


  oaepPaddingDigestAlgorithm: 'SHA-512',

  ivFieldName: 'iv',
  encryptedKeyFieldName: 'encryptedKey',
  encryptedValueFieldName: 'encryptedData',
  oaepHashingAlgorithmFieldName: 'oaepHashingAlgorithm',
  publicKeyFingerprintFieldName: 'publicKeyFingerprint',
  publicKeyFingerprintType: "certificate",

  dataEncoding: 'hex',

  encryptionCertificate: "PublicKeyEncrypt.crt",
  privateKey: "sbxprivkey.key"

}
 let api = new service.TokenizeApi();
api.createTokenize({
  tokenizeRequestSchema: createRequestObj()
}, (error, data, response) => {
  // use response here
});

