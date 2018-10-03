
import * as MessageValidator from "sns-validator";

const validator = new MessageValidator();

interface IError {
  reason: string;
  code?: string;
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
  onError: (error: IError | null) => any;
  onDeviceDeregistered?: (customerId: string, modelId: string, serialNumber: string, raw?: object) => any;
  onDeviceRegistered?: (customerId: string, modelId: string, serialNumber: string, raw?: object) => any;
  onItemShippedNotification?: (customerId: string, modelId: string, serialNumber: string, orderInfo: IOrderInfo, raw?: object) => any;
  onOrderCancelled?: (customerId: string, modelId: string, serialNumber: string, orderInfo: IOrderInfo, raw?: object) => any;
  onOrderPlaced?: (customerId: string, modelId: string, serialNumber: string, orderInfo: IOrderInfo, raw?: object) => any;
  onSubscriptionChanged?: (customerId: string, modelId: string, serialNumber: string, subscriptionInfo: any, raw?: object) => any;
}

// represents the currently known message types
const knownMessageTypes = [
  "DeviceDeregisteredNotification",
  "DeviceRegisteredNotification",
  "ItemShippedNotification",
  "OrderCancelledNotification",
  "OrderPlacedNotification",
  "SubscriptionChangedNotification"];

export const errorCodes = {
  "invalid_json": "we could not parse the json of the message",
  "invalid_signature": "invalid signature for the incoming message",
  "missing_handler": "missing the handler to handle that notification",
  "unknown_message": "unknown message type received"
};

// used for handling errors related to non-specificed handlers in the handler object
const missingHandlerError: IError = {
  code: "missing_handler",
  reason: errorCodes.missing_handler,
  raw: {handler: ""}
};

/**
 * Takes in an Express request object
 * @param request
 * @param callback 
 */
export const receiveRequest = (body: IBodySNS, handlers: IHandlers) => {
  validator.validate(body, async (err: IError, parsed: IBodySNS) => {
    if(err){
      const validationError: IError = {
        code: "invalid_signature",
        reason: errorCodes.invalid_signature,
        raw: err
      };
      return handlers.onError(validationError);
    }
    
    let message: any = {}; 
    try{
      message = JSON.parse(parsed.Message);
    } catch(er) {
      const jsonError: IError = {
        code: "invalid_json",
        reason: errorCodes.invalid_json,
        raw: er
      };
      return handlers.onError(jsonError);
    }
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
        const messageUnknownError: IError = {
          code: "unknown_message",
          reason: errorCodes.unknown_message,
          raw: {message: message.notificationInfo.notificationType}
        };
        return handlers.onError(messageUnknownError);
      }
    }

    // now parse it 
    const serialNumber = message.deviceInfo.deviceIdentifier.serialNumber;
    const modelId = message.deviceInfo.productIdentifier.modelId;
    const messageType = message.notificationInfo.notificationType;
    const customerId = message.customerInfo.directedCustomerId;

    if(messageType === "DeviceDeregisteredNotification"){
      if(handlers.onDeviceDeregistered){
        return handlers.onDeviceDeregistered(customerId, modelId, serialNumber, message);
      }
      missingHandlerError.raw.handler = "onDeviceDeregistered";
      return handlers.onError(missingHandlerError);

    } else if(messageType === "DeviceRegisteredNotification"){
      if(handlers.onDeviceRegistered){
        return handlers.onDeviceRegistered(customerId, modelId, serialNumber, message);
      }
      missingHandlerError.raw.handler = "onDeviceRegistered";
      return handlers.onError(missingHandlerError);

    } else if(messageType === "ItemShippedNotification"){
      if(handlers.onItemShippedNotification){
        const orderInfo: IOrderInfo = {
          instanceId: message.orderInfo.instanceId ? message.orderInfo.instanceId : "",
          slotId: message.orderInfo.slotId ? message.orderInfo.slotId : "",
          productInfo: message.orderInfo.productInfo
        };
        return handlers.onItemShippedNotification(customerId, modelId, serialNumber, orderInfo, message);
      }
      missingHandlerError.raw.handler = "onItemShippedNotification";
      return handlers.onError(missingHandlerError);

    } else if(messageType === "OrderCancelledNotification"){
      if(handlers.onOrderCancelled){
        const orderInfo: IOrderInfo = {
          instanceId: message.orderInfo.instanceId ? message.orderInfo.instanceId : "",
          slotId: message.orderInfo.slotId ? message.orderInfo.slotId : "",
          productInfo: [] // no product info on an order cancelled notification
        };
        return handlers.onOrderCancelled(customerId, modelId, serialNumber, orderInfo, message);
      }
      missingHandlerError.raw.handler = "onOrderCancelled";
      return handlers.onError(missingHandlerError);

    } else if(messageType === "OrderPlacedNotification"){
      if(handlers.onOrderPlaced){
        const orderInfo: IOrderInfo = {
          instanceId: message.orderInfo.instanceId ? message.orderInfo.instanceId : "",
          slotId: message.orderInfo.slotId ? message.orderInfo.slotId : "",
          productInfo: message.orderInfo.productInfo
        };
        return handlers.onOrderPlaced(customerId, modelId, serialNumber, orderInfo, message);
      }
      missingHandlerError.raw.handler = "onOrderPlaced";
      return handlers.onError(missingHandlerError);
      
    } else if(messageType === "SubscriptionChangedNotification"){
      if(handlers.onSubscriptionChanged){
        const subscriptionInfo = message.subscriptionInfo ? message.subscriptionInfo : {};
        return handlers.onSubscriptionChanged(customerId, modelId, serialNumber, subscriptionInfo.slotsSubscriptionStatus, message);
      }
      missingHandlerError.raw.handler = "onSubscriptionChanged";
      return handlers.onError(missingHandlerError);
    }

    // nothing was found and somehow it missed the known types
    const e: IError = {
      code: "unknown_message",
      reason: errorCodes.unknown_message,
      raw: err
    };
    return handlers.onError(e);
  });
};