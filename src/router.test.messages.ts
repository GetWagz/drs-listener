const modelId = "Testing_DRS_Testing";
const serial = "1122334455";
const ASIN = "FAKEASIN";
const slotId = "slot-fake-slot";
const orderId = "amzn1.dash.v2.o.fakeorder";
const customerId = "amzn1.account.FAKETEST";

export const constants = {
  modelId,
  serial,
  ASIN,
  slotId,
  orderId,
  customerId
};

export const deviceDeregisteredNotification = {
  "Type" : "Notification",
  "MessageId" : "75103c40-8e08-5761-aec1-686eb5490a30",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS Test",
  "Message" : "{\"default\": {\"notificationInfo\": {\"notificationType\": \"DeviceDeregisteredNotification\",\"notificationTime\": \"2018-10-01T17:47:51.465Z\",\"notificationId\": \"amzn1.dash.notification.v1.test\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}},\"email\": {\"notificationInfo\": {\"notificationType\": \"DeviceDeregisteredNotification\",\"notificationTime\": \"2018-10-01T17:47:51.465Z\",\"notificationId\": \"amzn1.dash.notification.v1.test\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}}}",
  "Timestamp" : "2018-10-03T03:35:29.676Z",
  "SignatureVersion" : "1",
  "Signature" : "pKN5yaR3FfMLUdP90silCwMYryp8JOJT+vm6qn0p0b8sfwYCAIOqaey/KY7J3Yn339ZSejZY0FsMWcdmDLSDQheuSIJ2DGk6z6a1Oe1soFx4SdEP+vd2NqTJM4uVZzR7/JX4vcBmMnUt0GtHOAmkNZcAk+532qEz0rXbnng942Ak3u4mHVaKco/4FmpssrDKoEocmWG3f9aVE+21D3pjePuCifB/5uV54PaH5ulwE4EbaFC3Q3ZggGFDY3IlaiIrWC85KkFx3HK4LUW/7tfIATQw/oJsnFg6gUlbMSRYcTYjauxjvSjNk9X7Ll45X83xq5jNE1KUTMHu8WGMApVi5Q==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const deviceRegisteredNotification = {
    "Type" : "Notification",
    "MessageId" : "57e3169c-a2b4-5827-b18c-42b257bdfb77",
    "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
    "Subject" : "DRS Sample",
    "Message" : "{\"notificationInfo\": {\"notificationType\": \"DeviceRegisteredNotification\",\"notificationTime\": \"2018-10-01T13:38:21.974Z\",\"notificationId\": \"amzn1.dash.notification.v1.68c9b8cc-4d6e-40b8-9646-5c0381e2c2b5\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}}",
    "Timestamp" : "2018-10-03T16:48:09.807Z",
    "SignatureVersion" : "1",
    "Signature" : "oEwcemtkFkpWMioOKT4zU3tPiXOqwIHkkw4JBakzIZ9xmhd9cMXPbxFdpKTWx9H0BE4+GQoPgaS104ptOvhkpIDWHO6CVYnQLw/Y3buNqV8jiElkfh5QYG8wxOBxm1ACz7gXYmRrHG6Q1DOIc6YGRbqIye4efEw4e49aACUtQYJqKJWKSZH3yZOX9FCFuKpc/ALCx38wAoo6grGDTl6b593QFmZh/qIh4O63q0Hb+X7vshvzFjo7DqaLupQ/48AkYbJAh2zIRoFbeg7mPkQNzbaNZ5g1GTsYKU2oDxyUNScBjFG5M/04I8lCPXxzXyFUX1R5cZUNHbNspfNxbhDQcw==",
    "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
    "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const subscriptionChangedNotification = {
  "Type" : "Notification",
  "MessageId" : "fc7657f9-98a3-557e-83f8-03d762d2370f",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS Sub Changed",
  "Message" : "{\"notificationInfo\": {\"notificationType\": \"SubscriptionChangedNotification\",\"notificationTime\": \"2018-10-01T13:38:22.588Z\",\"notificationId\": \"amzn1.dash.notification.v1.05cd2c98-d5e9-40c2-88c1-804276667488\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"subscriptionInfo\": {\"slotsSubscriptionStatus\": {\n\"slot-fake-slot\": {\"subscribed\": true,\"productInfoList\": [{\"quantity\": 24.0,\"unit\": \"pounds\",\"asin\": \""+ASIN+"\"}]}}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}}",
  "Timestamp" : "2018-10-03T17:11:13.132Z",
  "SignatureVersion" : "1",
  "Signature" : "iBs9yL2QVaHeLmoTmmtL5d9nw3oiTkof/cKZblGKkBLFSHbTCGwlp0WHyflz8zlv6vi2Ea3ndUZ5EsgIjfVUQic1rzn93vEyfi7rfMtmW0M38kdVOoOwlVMxhDY+XE8o1YiTX235nk03MjnE/nP/dXqodwyy1auQZ6KlDlK6VWDZBj1LrBH9MuE5nbrbdjVOeWCrs5p+zQp12/4LMJfEB5GCxJyFpSXANqkkLrW86o1iuJmL59SVUxpngkS1XKURf0CPYC0Ai7SDU1plC0Jg/RCMyul9+o1sfRFOPuUjr/u9RXudSd0DjqoddY4fwYj7zhtCv3tFx73qHyTLcxsYLg==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const orderPlacedNotification = {
  "Type" : "Notification",
  "MessageId" : "df870257-ad54-54f6-9d28-5679572badcf",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS Order Placed",
  "Message" : "{\"notificationInfo\": {\"notificationType\": \"OrderPlacedNotification\",\"notificationTime\": \"2018-08-13T21:10:27.784Z\",\"notificationId\": \"amzn1.dash.notification.v1.d844c64a-534c-49d8-802e-0414efe61f9a\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"},\"orderInfo\": {\"instanceId\": \""+orderId+"\",\"slotId\": \""+slotId+"\",\"productInfo\": [{\"quantity\": 30.0,\"unit\": \"pounds\",\"asin\": \""+ASIN+"\",\"estimatedDeliveryDate\": \"2018-08-18T06:59:59Z\"}]}}",
  "Timestamp" : "2018-10-03T17:11:27.290Z",
  "SignatureVersion" : "1",
  "Signature" : "sQen+JgSu27HMlS9/CiT9SoZ+tPhGxr8FnAeFrP0pf35b/HwQEtb6SdSCYNDZx0tHBzregTy+fmijBGTtap9jD9QKOYDRj4/UhmrVwHnamFlkG5oUirEUaZJMV2BEbbUaJOSjSIN6K9+oz5StcF6hZIdPuVpw8OBPA0us7C6Ua8UaE6J9uFrJP/fcMoSxSaiuvG2nYsH9fslR++S6U08OGVNr6K3icVvMACUX4yuwT7n3QVdakXI3cPCZrryHgj2/ry1Tno4borBwGLZAN5qUSIpHe8Fp9XAETKB8pPJA/Frg1L4+KAenoNqhn/xg99M6OHnfFlAxvzIRsHO19z5Ug==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const orderCancelledNotification = {
  "Type" : "Notification",
  "MessageId" : "7fad8cbf-0765-5def-b8e8-d891fdeb5a97",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS Order Cancelled",
  "Message" : "{\"notificationInfo\": {\"notificationType\": \"OrderCancelledNotification\",\"notificationTime\": \"2018-08-13T21:57:05.320Z\",\"notificationId\": \"amzn1.dash.notification.v1.d2a35dc6-9c23-4898-9772-ba8d883ff271\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"},\"orderInfo\": {\"instanceId\": \""+orderId+"\",\"slotId\": \""+slotId+"\"}}",
  "Timestamp" : "2018-10-03T17:11:42.557Z",
  "SignatureVersion" : "1",
  "Signature" : "i96YCtZpeTxCzbWaLWdfZf/YeyEZP8L55qiH3wn0mtqNoCuvLOsOn1Bqu18I+bl7yRbOvoCdhEJn5z/4mMQ9IbVjFxbrTxikQhPpJ5ff3AC8jToiPY4HxPUhFdljYYAC0XwBpVej6/BtGFdhkYfl2uuXx0Lgil4Ih1rb2wii1O1f7iUvGvHwPzv7IFGqhdTuRw4t5bZ2UXghlRfWbm43MTTrLbEkw3t8hVwhe8TcGj/ObCn1OE0Wy7lJdEfgeJdFpEH3Wng7yJah8hw+fV2Ko2/0Qq7lk/SxEeu0NJqqs94hjh7h9bosB1+q2USVX+kZSuBuRuompzuDxZOmH4IfZA==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const itemShippedNotification = {
  "Type" : "Notification",
  "MessageId" : "33abe4a9-82e9-51b6-9810-b08778729ea4",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS Item Shipped",
  "Message" : "{\"notificationInfo\": {\"notificationType\": \"ItemShippedNotification\",\"lwaClientId\": \"amzn1.application-oa2-client.8d8a43ab56e1421fb778eb99367b5e89\",\"notificationTime\": \"2018-05-25T01:02:06.426Z\",\"notificationId\": \"amzn1.dash.notification.v1.75fc0d38-d590-4f9a-8f63-f4d2b15e96e4\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"},\"orderInfo\": {\"instanceId\": \""+orderId+"\",\"slotId\": \""+slotId+"\",\"productInfo\": [{\"quantity\": 30.0,\"unit\": \"pounds\",\"asin\": \""+ASIN+"\",\"estimatedDeliveryDate\": \"2018-05-27T06:59:59Z\"}]}}",
  "Timestamp" : "2018-10-03T17:11:55.119Z",
  "SignatureVersion" : "1",
  "Signature" : "Pm/IAoq6E2uV3oDzXDmh6g/qWenl6mZKxB1UlBkzLUf3UfKhfr9RxOmecT07yY5ZVZlw+Shfzu4+Bej9RK8CsudcKI7KFg9CppUGttemxu6kFyZUfcPbDsW2yPv+/ziE9TWR6Ee/YyV+4oFiJc5xDkp5OUNaocZbfRjXpOsRcJwnzu0UjD3tEjuokLPFpUZZhJpAFzrKrm2wiqElVKOZrXq+oTh2SqBG+huqBL8qVLzv1H3a0+Cj/mPG6hmTwecL3JkDvgjlkw/0YiFfVk7Iis/xTJG2lJylup1di0lOv7CHqnBwldiAmczUc7Bt2lTfv+oookZiW/RdvOCkVqUg8Q==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const invalidSignatureNotification = {
  "Type" : "Notification",
  "MessageId" : "57e3169c-a2b4-5827-b18c-42b257bdfb77",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS Sample",
  "Message" : "{\"notificationInfo\": {\"notificationType\": \"DeviceRegisteredNotification\",\"notificationTime\": \"2018-10-01T13:38:21.974Z\",\"notificationId\": \"amzn1.dash.notification.v1.68c9b8cc-4d6e-40b8-9646-5c0381e2c2b5\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \"HACKED!\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \"amzn1.account.SOMEONEELSE\"}}",
  "Timestamp" : "2018-10-03T16:48:09.807Z",
  "SignatureVersion" : "1",
  "Signature" : "oEwcemtkFkpWMioOKT4zU3tPiXOqwIHkkw4JBakzIZ9xmhd9cMXPbxFdpKTWx9H0BE4+GQoPgaS104ptOvhkpIDWHO6CVYnQLw/Y3buNqV8jiElkfh5QYG8wxOBxm1ACz7gXYmRrHG6Q1DOIc6YGRbqIye4efEw4e49aACUtQYJqKJWKSZH3yZOX9FCFuKpc/ALCx38wAoo6grGDTl6b593QFmZh/qIh4O63q0Hb+X7vshvzFjo7DqaLupQ/48AkYbJAh2zIRoFbeg7mPkQNzbaNZ5g1GTsYKU2oDxyUNScBjFG5M/04I8lCPXxzXyFUX1R5cZUNHbNspfNxbhDQcw==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const invalidJsonNotification = {"Type" : "Notification","MessageId" : "808fb677-73d9-5b14-b43c-e25863df6ea3","TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic","Subject" : "DRS Bad JSON","Message" : "{\"notificationInfo\": {\"notificationType: \"OrderCancelledNotification\",\"notificationTime\": \"2018-08-13T21:57:05.320Z\",\"notificationId\": \"amzn1.dash.notification.v1.d2a35dc6-9c23-4898-9772-ba8d883ff271\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"},\"orderInfo\": {\"instanceId\": \""+orderId+"\",\"slotId\": \"slot-fake-slot\"}},","Timestamp" : "2018-10-03T18:43:18.547Z",
"SignatureVersion" : "1",
"Signature" : "MFdRAONeT3YzAz2DZjoHMgI61xHldSqb/hCb+1DwPEw9xaXEsRIauRBEjX46HZrEKXiBwP+pZainRLaHFYOd4bYjdHSIJj28PazojwByRoDKiSnx4Wwszs0WsBPrcAR3txZuc8G4sUeh+S1vrUzNH3w5XLESrYtIhCdht9tT7Hm/7hXFqO3yQ6rrCimP21O3vh8Jgl5eCAvZ6UKnyv1L3m6SuhHqpvndctny3xIV2uyeyXce3PrkJ0HZN636Nr8VoHgbUTfrptnL33gpJBKZ7LCYphI6w4la6lNVE2yWg8Au6BSvlbBNKU8yYdnL1Sk61tj4KciH5mZJ02tqmiUiaQ==",
"SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
"UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"};

export const allTargets = {
  "Type" : "Notification",
  "MessageId" : "af9a6379-0813-5f41-b356-37561ddce0f4",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS Unfo",
  "Message" : "{\"default\": {\"notificationInfo\": {\"notificationType\": \"DeviceRegisteredNotification\",\"notificationTime\": \"2018-10-01T13:38:21.974Z\",\"notificationId\": \"amzn1.dash.notification.v1.68c9b8cc-4d6e-40b8-9646-5c0381e2c2b5\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}},\"email\": {\"notificationInfo\": {\"notificationType\": \"DeviceRegisteredNotification\",\"notificationTime\": \"2018-10-01T13:38:21.974Z\",\"notificationId\": \"amzn1.dash.notification.v1.68c9b8cc-4d6e-40b8-9646-5c0381e2c2b5\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}},\"http\": {\"notificationInfo\": {\"notificationType\": \"DeviceRegisteredNotification\",\"notificationTime\": \"2018-10-01T13:38:21.974Z\",\"notificationId\": \"amzn1.dash.notification.v1.68c9b8cc-4d6e-40b8-9646-5c0381e2c2b5\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}},\"https\": {\"notificationInfo\": {\"notificationType\": \"DeviceRegisteredNotification\",\"notificationTime\": \"2018-10-01T13:38:21.974Z\",\"notificationId\": \"amzn1.dash.notification.v1.68c9b8cc-4d6e-40b8-9646-5c0381e2c2b5\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}}}",
  "Timestamp" : "2018-10-03T19:07:59.048Z",
  "SignatureVersion" : "1",
  "Signature" : "rr1hn93tC+jBHFOhKr45CmqgW9uhVMp9HnpwVrZk2EZ/ZQ57hHDXqpBR+75toflhr0LbCqP3+eBpmQK5sFqhfgTUgnTKdhTuLZyA0oA6e9OxJDHsXxHv3CyuKfN/1OIyQGg3H7lhbBAeYRQjm4g4EpKS8LJu2YXTXW14ErYEGhhn/tVfzp0tUKkGjUk7nkMcLQ1SytK9Dyk0k1EMcW45/GQI7TPU/dp+ZXdaCmQ+kBSl2TAygNxL91lRqSwBSou5IV8qX1XJcUl7OkTAQ71tRXsr7P0YUQhd+m461h+bWgitPpJUAV0H+10m4AvNJaI6HeLCQCr2Me57fkAlU90Riw==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const emailOnly = {
  "Type" : "Notification",
  "MessageId" : "f4285b6e-8d9b-5ed0-a020-0f419bfa1305",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS Email Only",
  "Message" : "{\"email\": {\"notificationInfo\": {\"notificationType\": \"DeviceRegisteredNotification\",\"notificationTime\": \"2018-10-01T13:38:21.974Z\",\"notificationId\": \"amzn1.dash.notification.v1.68c9b8cc-4d6e-40b8-9646-5c0381e2c2b5\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}}}",
  "Timestamp" : "2018-10-03T19:10:25.962Z",
  "SignatureVersion" : "1",
  "Signature" : "sAb6dZJkhg3vI8c+otjQmsQ94WT2FW9Ar7F8nuyBBx4yVcAf/tNLCLBOI8LlwuEX8b12jA9MSelHyjMXKB8IrZAUcna7Qy6ApWvOf2JIdBCCs8z1rOmldUaseBeomm5b+hDYqG8MVQaqVhsmsh/ArqPvqQCiLfyGrmuK7CVrwJ4aHXXMZUqDfWmHVXbiaeNO8Ue2ibsWWd7EUKHa2UUICK76ZYTTbxWtgj2KkiwGG2MbCqGIbzsXtmy8Ot1e8eJU8xVqkMGJN0V1D162CDHnmAVbWCAVvAoKeG06EyFpOXWuytnXaAGjkOC2P3LZ3uaODuxXBiBEtCSsUytdUN6QhQ==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const httpOnly = {
  "Type" : "Notification",
  "MessageId" : "33e5432d-3d14-5c40-83a0-17022b889270",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS HTTP Only",
  "Message" : "{\"http\": {\"notificationInfo\": {\"notificationType\": \"DeviceRegisteredNotification\",\"notificationTime\": \"2018-10-01T13:38:21.974Z\",\"notificationId\": \"amzn1.dash.notification.v1.68c9b8cc-4d6e-40b8-9646-5c0381e2c2b5\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}}}",
  "Timestamp" : "2018-10-03T19:11:24.398Z",
  "SignatureVersion" : "1",
  "Signature" : "ZQ42KDtRR5Xa4+0chnApOz7B/qttCoWmeCA4fCCXLmfItNmnesVEOZ8E9iWnSj6bLaCQqVofA9Kf81RrK6525gfIXWT2elqRz39gZjng0Yxe8755rw9pXr/5KnByAG7W9lC2BQR3zVckk7DRUZVyu0mgVbfOob/OPWMGAt0rlLV0LVc+x9y9j4XNBkG6WKthzNbPNgSoVFQRfaA6kgxbQnKMPCkqwf8sJwmL4G/DpRoLycPZzWKbYrGNwn1hMAkzgjEDgjN0DGHcEyxag/A7pQFGIzS1tUarwlhZY/rukYfuTC9mpHjoxtW9u28RPzQb5NoGhbDNBZ4M4GykVKUjOQ==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};

export const httpsOnly = {
  "Type" : "Notification",
  "MessageId" : "9f225675-3071-5d3b-95a5-025a26dcbec8",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS HTTPS Only",
  "Message" : "{\"https\": {\"notificationInfo\": {\"notificationType\": \"DeviceRegisteredNotification\",\"notificationTime\": \"2018-10-01T13:38:21.974Z\",\"notificationId\": \"amzn1.dash.notification.v1.68c9b8cc-4d6e-40b8-9646-5c0381e2c2b5\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \""+serial+"\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \""+customerId+"\"}}}",
  "Timestamp" : "2018-10-03T19:11:41.333Z",
  "SignatureVersion" : "1",
  "Signature" : "s+NeXkJHQ3nO+C/tcWXChNboBva8KDkiKplrFIok4BXNBOjlYbVWUVIdQ98XJMI+e9CiHWb/zWTluQafUMdotgi4LPm/9uLHFKzytkaDbcyb9B8aHqMKKCsv/Oek856Ed9NdQMW5bcUMXySQuFQGvwtaulM0OYXqGkonzixA6UFijDJiwsNGTyyyZJLx9YcoDO7KyqWd+K0kF4fI1dhHJGXBjTgUdVGGA8ufZAn2/sfloSa0tJrBiKOIYUOvu51LD5YOBAXe11+KeqZVotf0D/JI2Bv4PdMTsZHuu6vYadqVzqwwgR5YmXuhMDTtjiF4rk5G5lP3kWeyl8+chZue0g==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};