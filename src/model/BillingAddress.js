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
    root.MdesForMerchants.BillingAddress = factory(root.MdesForMerchants.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BillingAddress model module.
   * @module model/BillingAddress
   * @version 1.2.9
   */

  /**
   * Constructs a new <code>BillingAddress</code>.
   * @alias module:model/BillingAddress
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>BillingAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingAddress} obj Optional instance to populate.
   * @return {module:model/BillingAddress} The populated <code>BillingAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('line1')) {
        obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
      }
      if (data.hasOwnProperty('line2')) {
        obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('countrySubdivision')) {
        obj['countrySubdivision'] = ApiClient.convertToType(data['countrySubdivision'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * __(OPTIONAL)__<br> The first line of the street address for the billing address.<br> __Max Length:64__ 
   * @member {String} line1
   */
  exports.prototype['line1'] = undefined;
  /**
   * __(OPTIONAL)__ The second line of the street address for the billing address.<br> __Max Length:64__ 
   * @member {String} line2
   */
  exports.prototype['line2'] = undefined;
  /**
   * __(OPTIONAL)__<br> The city of the billing address.<br> __Max Length:32__ 
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * __(OPTIONAL)__<br> The state or country subdivision of the billing address.<br> __Max Length:12__ 
   * @member {String} countrySubdivision
   */
  exports.prototype['countrySubdivision'] = undefined;
  /**
   * __(OPTIONAL)__<br> The postal of code of the billing address.<br> __Max Length:16__ 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * __(OPTIONAL)__ The country of the billing address. <br> __Max Length:3__ 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


