/**
 * MDES for Merchants
 * The MDES APIs are designed as RPC style stateless web services where each API endpoint represents an operation to be performed.  All request and response payloads are sent in the JSON (JavaScript Object Notation) data-interchange format. Each endpoint in the API specifies the HTTP Method used to access it. All strings in request and response objects are to be UTF-8 encoded.  Each API URI includes the major and minor version of API that it conforms to.  This will allow multiple concurrent versions of the API to be deployed simultaneously. <br> __Authentication__ Mastercard uses OAuth 1.0a with body hash extension for authenticating the API clients. This requires every request that you send to  Mastercard to be signed with an RSA private key. A private-public RSA key pair must be generated consisting of: <br> 1 . A private key for the OAuth signature for API requests. It is recommended to keep the private key in a password-protected or hardware keystore. <br> 2. A public key is shared with Mastercard during the project setup process through either a certificate signing request (CSR) or the API Key Generator. Mastercard will use the public key to verify the OAuth signature that is provided on every API call.<br>  An OAUTH1.0a signer library is available on [GitHub](https://github.com/Mastercard/oauth1-signer-java) <br>  __Encryption__<br>  All communications between Issuer web service and the Mastercard gateway is encrypted using TLS. <br> __Additional Encryption of Sensitive Data__ In addition to the OAuth authentication, when using MDES Digital Enablement Service, any PCI sensitive and all account holder Personally Identifiable Information (PII) data must be encrypted. This requirement applies to the API fields containing encryptedData. Sensitive data is encrypted using a symmetric session (one-time-use) key. The symmetric session key is then wrapped with an RSA Public Key supplied by Mastercard during API setup phase (the Customer Encryption Key). <br>  Java Client Encryption Library available on [GitHub](https://github.com/Mastercard/client-encryption-java) 
 *
 * OpenAPI spec version: 1.2.9
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.0.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Token'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Token'));
  } else {
    // Browser globals (root is window)
    if (!root.MdesForMerchants) {
      root.MdesForMerchants = {};
    }
    root.MdesForMerchants.SearchTokensResponseSchema = factory(root.MdesForMerchants.ApiClient, root.MdesForMerchants.Token);
  }
}(this, function(ApiClient, Token) {
  'use strict';




  /**
   * The SearchTokensResponseSchema model module.
   * @module model/SearchTokensResponseSchema
   * @version 1.2.9
   */

  /**
   * Constructs a new <code>SearchTokensResponseSchema</code>.
   * @alias module:model/SearchTokensResponseSchema
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SearchTokensResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchTokensResponseSchema} obj Optional instance to populate.
   * @return {module:model/SearchTokensResponseSchema} The populated <code>SearchTokensResponseSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('responseHost')) {
        obj['responseHost'] = ApiClient.convertToType(data['responseHost'], 'String');
      }
      if (data.hasOwnProperty('responseId')) {
        obj['responseId'] = ApiClient.convertToType(data['responseId'], 'String');
      }
      if (data.hasOwnProperty('tokens')) {
        obj['tokens'] = ApiClient.convertToType(data['tokens'], [Token]);
      }
    }
    return obj;
  }

  /**
   * The host that originated the request. Future calls in the same conversation may be routed to this host. 
   * @member {String} responseHost
   */
  exports.prototype['responseHost'] = undefined;
  /**
   * Unique identifier for the response. 
   * @member {String} responseId
   */
  exports.prototype['responseId'] = undefined;
  /**
   * @member {Array.<module:model/Token>} tokens
   */
  exports.prototype['tokens'] = undefined;



  return exports;
}));


