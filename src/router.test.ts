import { IHandlers, receiveRequest } from "./";

import { deviceDeregisteredNotification } from "./router.test.messages";

// const handlers: IHandlers = {
//   onError: (error) => {
//     console.log(error);
//   },
//   onDeviceDeregistered: (error, result) => {
//     console.log("done");
//   }
// };

// test("test incoming parsed body", () => {
//   receiveRequest(deviceDeregisteredNotification, handlers, (err, validated) => {
//     expect(err).toBeNull();
//     expect(validated).toBeTruthy();
//     expect(validated).toHaveProperty("Message");
//     expect(validated.Subject).toEqual(deviceDeregisteredNotification.Subject);
//     const message = validated.Message;
//     expect(message).toBeTruthy();
//   });
// });
test("test incoming parsed body", (done) => {
  const h: IHandlers = {
    onError: (e: any) => {
      // this should not be called
      expect(e).toBeNull();
      done();
    },
    onDeviceDeregistered: (customerId: string, modelId: string, serialNumber: string, message: any) => {
      expect(customerId).toEqual("amzn1.account.FAKETEST");
      expect(modelId).toEqual("Testing_DRS_Testing");
      expect(serialNumber).toEqual("1122334455");
      expect(message).not.toBeNull();
      expect(message).not.toEqual({});
      done();
    }
  };
  receiveRequest(deviceDeregisteredNotification, h);
  
});