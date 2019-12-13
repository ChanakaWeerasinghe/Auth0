

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

const openAPIClient = require('src/ApiClient.js');
const client = openAPIClient.instance;
client.basePath = "https://sandbox.api.mastercard.com/mdes";

// Add the interceptor code responsible for signing HTTP requests
client.applyAuthToRequest = function(request) {
    const _end = request._end;
    request._end = function() {
        const authHeader = oauth.getAuthorizationHeader(request.url, request.method, JSON.stringify(request._data), "your consumer key string", signingKey);
        request.req.setHeader('Authorization', authHeader);
        _end.call(request);
    }
    return request;
};
