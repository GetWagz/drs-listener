import { IHandlers, IOrderInfo, receiveRequest } from "./";

import { constants,
    deviceDeregisteredNotification, 
          deviceRegisteredNotification,
          orderPlacedNotification } from "./router.test.messages";

test("test device deregistered notification", (done) => {
  const h: IHandlers = {
    onError: (e: any) => {
      // this should not be called
      expect(e).toBeNull();
      done();
    },
    onDeviceDeregistered: (customerId: string, modelId: string, serialNumber: string, message: any) => {
      expect(customerId).toEqual(constants.customerId);
      expect(modelId).toEqual(constants.modelId);
      expect(serialNumber).toEqual(constants.serial);
      expect(message).not.toBeNull();
      expect(message).not.toEqual({});
      done();
    }
  };
  receiveRequest(deviceDeregisteredNotification, h);
});

test("test device registered notification", (done) => {
  const h: IHandlers = {
    onError: (e: any) => {
      // this should not be called
      expect(e).toBeNull();
      done();
    },
    onDeviceRegistered: (customerId: string, modelId: string, serialNumber: string, message: any) => {
      expect(customerId).toEqual(constants.customerId);
      expect(modelId).toEqual(constants.modelId);
      expect(serialNumber).toEqual(constants.serial);
      expect(message).not.toBeNull();
      expect(message).not.toEqual({});
      done();
    }
  };
  receiveRequest(deviceRegisteredNotification, h);
});

test("test order placed notification", (done) => {
  const h: IHandlers = {
    onError: (e: any) => {
      // this should not be called
      expect(e).toBeNull();
      done();
    },
    onOrderPlaced: (customerId: string, modelId: string, serialNumber: string, orderInfo: IOrderInfo, message: any) => {
      expect(customerId).toEqual(constants.customerId);
      expect(modelId).toEqual(constants.modelId);
      expect(serialNumber).toEqual(constants.serial);
      expect(message).not.toBeNull();
      expect(message).not.toEqual({});
      expect(orderInfo.instanceId).toBe(constants.orderId);
      expect(orderInfo.slotId).toBe(constants.slotId);
      expect(orderInfo.productInfo.length).not.toBe(0);
      expect(orderInfo.productInfo[0].asin).toBe(constants.ASIN);
      done();
    }
  };
  receiveRequest(orderPlacedNotification, h);
});