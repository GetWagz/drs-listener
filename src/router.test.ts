import { receiveRequest } from "./";

import { deviceDeregisteredNotification } from "./router.test.messages";

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