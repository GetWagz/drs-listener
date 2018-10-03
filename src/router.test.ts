import { IHandlers, IOrderInfo, receiveRequest } from "./";

import { constants,
    deviceDeregisteredNotification, 
    deviceRegisteredNotification,
    orderCancelledNotification,
    orderPlacedNotification, 
    subscriptionChangedNotification,
    itemShippedNotification,
    invalidSignatureNotification} from "./router.test.messages";

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

test("test item shipped notification", (done) => {
  const h: IHandlers = {
    onError: (e: any) => {
      // this should not be called
      expect(e).toBeNull();
      done();
    },
    onItemShippedNotification: (customerId: string, modelId: string, serialNumber: string, orderInfo: IOrderInfo, message: any) => {
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
  receiveRequest(itemShippedNotification, h);
});

test("test order cancelled notification", (done) => {
  const h: IHandlers = {
    onError: (e: any) => {
      // this should not be called
      expect(e).toBeNull();
      done();
    },
    onOrderCancelled: (customerId: string, modelId: string, serialNumber: string, orderInfo: IOrderInfo, message: any) => {
      expect(customerId).toEqual(constants.customerId);
      expect(modelId).toEqual(constants.modelId);
      expect(serialNumber).toEqual(constants.serial);
      expect(message).not.toBeNull();
      expect(message).not.toEqual({});
      expect(orderInfo.instanceId).toBe(constants.orderId);
      expect(orderInfo.slotId).toBe(constants.slotId);
      expect(orderInfo.productInfo.length).toBe(0);
      done();
    }
  };
  receiveRequest(orderCancelledNotification, h);
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

test("test subscription changed notification", (done) => {
  const h: IHandlers = {
    onError: (e: any) => {
      // this should not be called
      expect(e).toBeNull();
      done();
    },
    onSubscriptionChanged: (customerId: string, modelId: string, serialNumber: string, subscriptionInfo: any, message: any) => {
      expect(customerId).toEqual(constants.customerId);
      expect(modelId).toEqual(constants.modelId);
      expect(serialNumber).toEqual(constants.serial);
      expect(message).not.toBeNull();
      expect(message).not.toEqual({});
      expect(subscriptionInfo).not.toBeNull();
      expect(subscriptionInfo).not.toEqual({});
      expect(subscriptionInfo).toHaveProperty(constants.slotId);
      expect(subscriptionInfo[constants.slotId]).toHaveProperty("subscribed");
      expect(subscriptionInfo[constants.slotId].subscribed).toBeTruthy();
      expect(subscriptionInfo[constants.slotId]).toHaveProperty("productInfoList");
      expect(subscriptionInfo[constants.slotId].productInfoList.length).toBe(1);
      expect(subscriptionInfo[constants.slotId].productInfoList[0]).toHaveProperty("asin");
      expect(subscriptionInfo[constants.slotId].productInfoList[0].asin).toBe(constants.ASIN);
      done();
    }
  };
  receiveRequest(subscriptionChangedNotification, h);
});

test("test invalid signature", (done) => {
  const h: IHandlers = {
    onError: (e: any) => {
      // this should not be called
      expect(e).not.toBeNull();
      done();
    }
  };
  receiveRequest(invalidSignatureNotification, h);
});