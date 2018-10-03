
import * as MessageValidator from "sns-validator";

const validator = new MessageValidator();

interface IBodyError {
  reason: string;
  raw: any;
}

interface IBodySNSInterface {
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

export interface IHandlers {
  onError: (error: IBodyError | null) => any;
  onDeviceDeregistered?: (customerId: string, modelId: string, serialNumber: string, raw?: object) => any;
}


/**
 * Takes in an Express request object
 * @param request
 * @param callback 
 */
export const receiveRequest = (body: IBodySNSInterface, handlers: IHandlers) => {
  validator.validate(body, async (err: IBodyError, parsed: IBodySNSInterface) => {
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
    }
    const e: IBodyError = {
      reason: "unknown message",
      raw: err
    };
    return handlers.onError(e);
  });
};
