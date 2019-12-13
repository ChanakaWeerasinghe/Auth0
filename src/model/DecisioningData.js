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
    root.MdesForMerchants.DecisioningData = factory(root.MdesForMerchants.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DecisioningData model module.
   * @module model/DecisioningData
   * @version 1.2.9
   */

  /**
   * Constructs a new <code>DecisioningData</code>.
   * @alias module:model/DecisioningData
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>DecisioningData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecisioningData} obj Optional instance to populate.
   * @return {module:model/DecisioningData} The populated <code>DecisioningData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('recommendation')) {
        obj['recommendation'] = ApiClient.convertToType(data['recommendation'], 'String');
      }
      if (data.hasOwnProperty('recommendationAlgorithmVersion')) {
        obj['recommendationAlgorithmVersion'] = ApiClient.convertToType(data['recommendationAlgorithmVersion'], 'String');
      }
      if (data.hasOwnProperty('deviceScore')) {
        obj['deviceScore'] = ApiClient.convertToType(data['deviceScore'], 'String');
      }
      if (data.hasOwnProperty('accountScore')) {
        obj['accountScore'] = ApiClient.convertToType(data['accountScore'], 'String');
      }
      if (data.hasOwnProperty('recommendationReasons')) {
        obj['recommendationReasons'] = ApiClient.convertToType(data['recommendationReasons'], ['String']);
      }
      if (data.hasOwnProperty('deviceCurrentLocation')) {
        obj['deviceCurrentLocation'] = ApiClient.convertToType(data['deviceCurrentLocation'], 'String');
      }
      if (data.hasOwnProperty('deviceIpAddress')) {
        obj['deviceIpAddress'] = ApiClient.convertToType(data['deviceIpAddress'], 'String');
      }
      if (data.hasOwnProperty('mobileNumberSuffix')) {
        obj['mobileNumberSuffix'] = ApiClient.convertToType(data['mobileNumberSuffix'], 'String');
      }
      if (data.hasOwnProperty('accountIdHash')) {
        obj['accountIdHash'] = ApiClient.convertToType(data['accountIdHash'], 'String');
      }
    }
    return obj;
  }

  /**
   * __(OPTIONAL)__ <br> Digitization decision recommended by the Token Requestor. Must be either APPROVED (Recommend a decision of Approved), DECLINED (Recommend a decision of Decline). <br>   __Max Length:64__ 
   * @member {String} recommendation
   */
  exports.prototype['recommendation'] = undefined;
  /**
   * __(OPTIONAL)__ <br> Version of the algorithm used by the Token Requestor to determine its recommendation. Must be a value of \"01\". Other values may be supported in the future.<br>     __Max Length:16__ 
   * @member {String} recommendationAlgorithmVersion
   */
  exports.prototype['recommendationAlgorithmVersion'] = undefined;
  /**
   * __(OPTIONAL)__ <br> Score assigned by the Token Requestor for the target device being provisioned. Must be a value from 1 to 5. 
   * @member {String} deviceScore
   */
  exports.prototype['deviceScore'] = undefined;
  /**
   * __(OPTIONAL)__ <br> Score assigned by the Token Requestor for the consumer account or relationship. Must be a value from 1 to 5. 
   * @member {String} accountScore
   */
  exports.prototype['accountScore'] = undefined;
  /**
   * __(OPTIONAL)__ <br> Code indicating the reasons the Token Requestor is suggesting the digitization decision.  See table here - https://developer.mastercard.com/page/mdes-digitization-recommendation-reason-codes 
   * @member {Array.<String>} recommendationReasons
   */
  exports.prototype['recommendationReasons'] = undefined;
  /**
   * __(OPTIONAL)__ <br> Latitude and longitude in the format \"(sign) latitude, (sign) longitude\" with a precision of 2 decimal places.  Ex - \"38.63, -90.25\"  Latitude is between -90 and 90.  Longitude between -180 and 180. Relates to the target device being provisioned. If there is no target device, then this should be the current consumer location, if available. <br>    __Max Length:14__ 
   * @member {String} deviceCurrentLocation
   */
  exports.prototype['deviceCurrentLocation'] = undefined;
  /**
   * __(OPTIONAL)__ <br> The IP address of the device through which the device reaches the internet. This may be a temporary or permanent IP address assigned to a home router, or the IP address of a gateway through which the device connects to a network. IPv4 address format of 4 octets separated by \".\" Ex - 127.0.0.1 Relates to the target device being provisioned. If there is no target device, then this should be the current consumer IP address, if available.<br>     __Max Length:15__ 
   * @member {String} deviceIpAddress
   */
  exports.prototype['deviceIpAddress'] = undefined;
  /**
   * __(OPTIONAL)__<br> The last few digits (typically four) of the consumer's mobile phone number as available on file or on the consumer's current device, which may or may not be the mobile number of the target device being provisioned.<br>     __Max Length:32__ 
   * @member {String} mobileNumberSuffix
   */
  exports.prototype['mobileNumberSuffix'] = undefined;
  /**
   * __(OPTIONAL)__ <br> SHA-256 hash of the Cardholder?s account ID with the Token Requestor. Typically expected to be an email address.<br>  __Max Length:64__ Alpha-Numeric and Hex-encoded data (case-insensitive). 
   * @member {String} accountIdHash
   */
  exports.prototype['accountIdHash'] = undefined;



  return exports;
}));


