import { receiveRequest } from "./";

import { deviceDeregisteredNotification } from "./router.test.messages";

test("test incoming parsed body", () => {
  receiveRequest(deviceDeregisteredNotification, (err, validated) => {
    expect(err).toBeNull();
    expect(validated).toBeTruthy();
    expect(validated).toHaveProperty("Message");
    expect(validated.Subject).toEqual(deviceDeregisteredNotification.Subject);
    const message = validated.Message;
    expect(message).toBeTruthy();
  });
});