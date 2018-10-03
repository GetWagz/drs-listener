
import * as MessageValidator from "sns-validator";

const validator = new MessageValidator();

interface IBodyParseError {
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


/**
 * Takes in an Express request object
 * @param request
 * @param callback 
 */
export const receiveRequest = (body: IBodySNSInterface, callback: (error: IBodyParseError | null, message: any) => void) => {
  validator.validate(body, async (err: IBodyParseError, parsed: IBodySNSInterface) => {
    if(err){
      const e: IBodyParseError = {
        reason: "invalid signature",
        raw: err
      };
      return callback(e, {});
    }
    return callback(null, parsed);
  });
};