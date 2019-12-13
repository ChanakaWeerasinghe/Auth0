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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MdesForMerchants) {
      root.MdesForMerchants = {};
    }
    root.MdesForMerchants.TransactRequestSchema = factory(root.MdesForMerchants.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TransactRequestSchema model module.
   * @module model/TransactRequestSchema
   * @version 1.2.9
   */

  /**
   * Constructs a new <code>TransactRequestSchema</code>.
   * @alias module:model/TransactRequestSchema
   * @class
   * @param requestId {String} Unique identifier for the request. 
   * @param tokenUniqueReference {String} Globally unique identifier for the Token, as assigned by MDES.    __Max Length:64__ 
   * @param dsrpType {String} What type of DSRP cryptogram to create. Must be either UCAF or M_CHIP.     __Max Length:64__ 
   * @param unpredictableNumber {String} HEX Encoded data (case sensitive) provided by the merchant to provide variability and uniqueness to the generation of a cryptogram.  __Length:8__ 
   */
  var exports = function(requestId, tokenUniqueReference, dsrpType, unpredictableNumber) {
    var _this = this;


    _this['requestId'] = requestId;
    _this['tokenUniqueReference'] = tokenUniqueReference;
    _this['dsrpType'] = dsrpType;
    _this['unpredictableNumber'] = unpredictableNumber;


  };

  /**
   * Constructs a <code>TransactRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactRequestSchema} obj Optional instance to populate.
   * @return {module:model/TransactRequestSchema} The populated <code>TransactRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('responseHost')) {
        obj['responseHost'] = ApiClient.convertToType(data['responseHost'], 'String');
      }
      if (data.hasOwnProperty('requestId')) {
        obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
      }
      if (data.hasOwnProperty('tokenUniqueReference')) {
        obj['tokenUniqueReference'] = ApiClient.convertToType(data['tokenUniqueReference'], 'String');
      }
      if (data.hasOwnProperty('dsrpType')) {
        obj['dsrpType'] = ApiClient.convertToType(data['dsrpType'], 'String');
      }
      if (data.hasOwnProperty('unpredictableNumber')) {
        obj['unpredictableNumber'] = ApiClient.convertToType(data['unpredictableNumber'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
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
   * Unique identifier for the request. 
   * @member {String} requestId
   */
  exports.prototype['requestId'] = undefined;
  /**
   * Globally unique identifier for the Token, as assigned by MDES.    __Max Length:64__ 
   * @member {String} tokenUniqueReference
   */
  exports.prototype['tokenUniqueReference'] = undefined;
  /**
   * What type of DSRP cryptogram to create. Must be either UCAF or M_CHIP.     __Max Length:64__ 
   * @member {String} dsrpType
   */
  exports.prototype['dsrpType'] = undefined;
  /**
   * HEX Encoded data (case sensitive) provided by the merchant to provide variability and uniqueness to the generation of a cryptogram.  __Length:8__ 
   * @member {String} unpredictableNumber
   */
  exports.prototype['unpredictableNumber'] = undefined;
  /**
   * Transaction amount to be authorized. Note that refund transactions are not supported ? this value must be a positive amount and can contain up to 12 digits, inclusive of any digits in the currency exponent.     __Max Length:13__ 
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * The transaction currency. Expressed as a 3-character ISO 4217 currency code. 
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;



  return exports;
}));

