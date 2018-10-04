# The DRS SNS Listener
[![Build Status](https://travis-ci.org/GetWagz/drs-listener.svg?branch=develop)](https://travis-ci.org/GetWagz/drs-listener)

This library will handle the DRS SNS messages that come in and pass the valid data to the call of your choice. This library is written in **Typescript** and targets ES2015 environments.

[Dash Replenishment Service (DRS)](https://developer.amazon.com/dash-replenishment-service) is an Amazon automatic replenishment system that makes automatically replenishing supplies easy. At Wagz, we use to replenish food for our automatic feeders. You can learn more about them at our website, [Wagz.Com](https://www.wagz.com).

DRS communicates with an SDK and reports events over SNS. If you are looking for a server-side HTTP SDK, we created on in Go that you can use. It's repository is [here](https://github.com/GetWagz/drs-sdk).

## Installing

Installing the library is as simple as running

`npm install --save drs-listener`

If you are planning to develop against the project, we recommend you clone this repo and run `npm install` to pull all dev dependencies as well.

`git clone git@github.com:GetWagz/drs-listener.git`

`cd drs-listener`

`npm install`

`npm build`

## Using

Due to a vaidation library used, the primary method is a callback. At some point we may create a promisified version but will give it a different name to preserve backwards compatibility.

You would first want to create a "handlers" object that will hold all of the methods you want to call based upon a message. You can handles as many or as few notification types as you would like. It's also probably a good idea to specify a generic handler in case the message is invalid, cannot be parsed, or otherwise cannot be handled:

```ts
import { IHandlers, receiveRequest } from "drs-listener";

const myHandlers: IHandlers = {
  onError: (e: any) => {
    // handle the error here, such as logging or returning a response
  },
  onDeviceDeregistered: (customerId: string, modelId: string, serialNumber: string, message: any) => {
    // handle the device notification, optionally respond; remember, SNS is asynchronous and they will not
    // be listening for action responses
  }
};
```

then, grab the JSON from the source (for example, req.body in an express endpoint):

```ts
const incoming = req.body;

receiveRequest(incoming, myHandlers);

```

### Why this apporach?

This approach was developed to serve a specific use case for us. We had a DRS listener for one of our products. After some further development, a new business need arose and we needed to branch off and call a second API depending on the model and serial information. Rather than having conditionals in each of our handlers, we decided to create two handler objects that we could pass. This approach is not perfect, but served us well.

## Testing and Building

Sample test messages were generated using the AWS SNS console. They are stored in the `router.test.messages.ts` file.

Jest is our testing framework. You can test the installation by running `npm run test`.

## Notes

It is important to note that **THIS IS NOT READY FOR PRODUCTION USE**

We at Wagz decided to open source this part of our application, but are in the process of cleaning it up and shoring it up before releasing it to the world.

## Hiring

Are you on the New Hampshire Seacoast and love Go, Typescript, Swift, or Java? Send an email to engineering@wagz.com and let's find out if we're a good match!

## Contributing

Pull Requests are welcome! See our `CONTRIBUTING.md` file for more information.

## Remaining TODOs

[ ] Break receiveMessage into separate calls for each notification

[ ] Improve documentation

[ ] Integrate with automated checks (CI/CD, etc)

[ ] More tests

[ ] Build promise-based method

[ ] Improve type checking
