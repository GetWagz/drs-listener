import { IHandlers, validate } from ".";

import { 
  deviceDeregisteredNotification, invalidSignatureNotification, 

  // invalidJsonNotification,
  // invalidSignatureNotification,
  // notDRSNotification
} from "./router.test.messages";

describe("Test validating valid alone", () => {
  test("test validate as handler", (done) => {
    const h: IHandlers = {
      onError: (e: any) => {
        expect(e).not.toBeNull();
        done();
      },
      onOnlyValidateMessage: (message: any) => {
        expect(message).not.toBeNull();
        expect(message).toEqual(deviceDeregisteredNotification);
        done();
      }
    };
    validate(deviceDeregisteredNotification, h);
  });
  test("test validate as callback", (done) => {
    validate(deviceDeregisteredNotification, undefined, (err, parsed) => {
      expect(parsed).toEqual(deviceDeregisteredNotification);
      expect(err).toBeNull();
      done();
    });
  });
  test("test validate as promise", (done) => {
    validate(deviceDeregisteredNotification)
    .then((message: any) => {
      expect(message).not.toBeNull();
      done();
    })
    .catch((err: any) =>{
      // should not be an error
      expect(err).toBeNull();
      expect(false).toBeTruthy();
      done();
    });
  });
});

describe("Test validating bad signature", () => {
  test("test validate as handler", (done) => {
    const h: IHandlers = {
      onError: (e: any) => {
        expect(e).not.toBeNull();
        done();
      },
      onOnlyValidateMessage: (message: any) => {
        expect(true).toBe(false);
        done();
      }
    };
    validate(invalidSignatureNotification, h);
  });
  test("test validate as callback", (done) => {
    validate(invalidSignatureNotification, undefined, (err, parsed) => {
      expect(parsed).toEqual(invalidSignatureNotification);
      expect(err).not.toBeNull();
      done();
    });
  });
  test("test validate as promise", (done) => {
    validate(invalidSignatureNotification)
    .then((message: any) => {
      // should never get here
      expect(false).toBeTruthy();
      done();
    })
    .catch((err: any) =>{
      // should be an error
      expect(err).not.toBeNull();
      done();
    });
  });
});