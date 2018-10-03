
import * as MessageValidator from "sns-validator";

const validator = new MessageValidator();

interface IBodyError {
  reason: string;
  raw: any;
}

interface IBodySNS {
  Type: string;
  MessageId: string;
  TopicArn: string;
  Subject: string;
  Message: string; // will need to be parsed into a JSON object
  Timestamp: string;
  SignatureVersion: string;
  Signature: string;
  SigningCertURL: string;
  UnsubscribeURL: string;
}

export interface IOrderInfo {
  instanceId: string;
  slotId: string;
  productInfo: IProductInfo[] | [];
}

export interface IProductInfo {
  asin: string;
  quantity?: string;
  unit?: string;
  estimatedDeliveryDate?: string;
}

export interface IHandlers {
  onError: (error: IBodyError | null) => any;
  onDeviceDeregistered?: (customerId: string, modelId: string, serialNumber: string, raw?: object) => any;
  onDeviceRegistered?: (customerId: string, modelId: string, serialNumber: string, raw?: object) => any;
  onOrderPlaced?: (customerId: string, modelId: string, serialNumber: string, orderInfo: IOrderInfo, raw?: object) => any;
}

// represents the currently known message types
const knownMessageTypes = [
  "DeviceDeregisteredNotification",
  "DeviceRegisteredNotification",
  "OrderPlacedNotification"];

/**
 * Takes in an Express request object
 * @param request
 * @param callback 
 */
export const receiveRequest = (body: IBodySNS, handlers: IHandlers) => {
  validator.validate(body, async (err: IBodyError, parsed: IBodySNS) => {
    if(err){
      const validationError: IBodyError = {
        reason: "invalid signature",
        raw: err
      };
      return handlers.onError(validationError);
    }
    let message = JSON.parse(parsed.Message);
    // there are a few ways this could get to us; we need to check
    // if the top key is default; if it is, the real message is a child
    // the same goes for email, http, or https
    if(message.default && message.default.deviceInfo){
      message = message.default;
    } else if(message.email && message.email.deviceInfo){
      message = message.email;
    } else if(message.http && message.http.deviceInfo){
      message = message.http;
    } else if(message.https && message.https.deviceInfo){
      message = message.https;
    } else if(message.notificationInfo && message.notificationInfo.notificationType){
      // the method of delivery isn't the top level object
      // so we check to see if the top level matches what we expect
      if(knownMessageTypes.indexOf(message.notificationInfo.notificationType) === -1){
        const messageUnknownError: IBodyError = {
          reason: "message unknown: " + message.notificationInfo.notificationType,
          raw: message
        };
        return handlers.onError(messageUnknownError);
      }
    }
    const serialNumber = message.deviceInfo.deviceIdentifier.serialNumber;
    const modelId = message.deviceInfo.productIdentifier.modelId;
    const messageType = message.notificationInfo.notificationType;
    // const messageTime = message.notificationInfo.notificationTime;
    // const messageId = message.notificationInfo.notificationId;
    const customerId = message.customerInfo.directedCustomerId;

    if(messageType === "DeviceDeregisteredNotification"){
      if(handlers.onDeviceDeregistered){
        return handlers.onDeviceDeregistered(customerId, modelId, serialNumber, message);
      }
      return handlers.onError(null);
    } else if(messageType === "DeviceRegisteredNotification"){
      if(handlers.onDeviceRegistered){
        return handlers.onDeviceRegistered(customerId, modelId, serialNumber, message);
      }
      return handlers.onError(null);
    } else if(messageType === "OrderPlacedNotification"){
      if(handlers.onOrderPlaced){
        const orderInfo: IOrderInfo = {
          instanceId: message.orderInfo.instanceId ? message.orderInfo.instanceId : "",
          slotId: message.orderInfo.slotId ? message.orderInfo.slotId : "",
          productInfo: message.orderInfo.productInfo
        };
        return handlers.onOrderPlaced(customerId, modelId, serialNumber, orderInfo, message);
      }
      return handlers.onError(null);
    }
    const e: IBodyError = {
      reason: "unknown message",
      raw: err
    };
    return handlers.onError(e);
  });
};
