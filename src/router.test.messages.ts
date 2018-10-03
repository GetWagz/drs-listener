const modelId = "Testing_DRS_Testing";
export const deviceDeregisteredNotification = {
  "Type" : "Notification",
  "MessageId" : "75103c40-8e08-5761-aec1-686eb5490a30",
  "TopicArn" : "arn:aws:sns:us-east-2:989023162453:sampletopic",
  "Subject" : "DRS Test",
  "Message" : "{\"default\": {\"notificationInfo\": {\"notificationType\": \"DeviceDeregisteredNotification\",\"notificationTime\": \"2018-10-01T17:47:51.465Z\",\"notificationId\": \"amzn1.dash.notification.v1.test\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \"1122334455\"},\"productIdentifier\": {\"modelId\": \"Testing_DRS_Testing\"}},\"customerInfo\": {\"directedCustomerId\": \"amzn1.account.FAKETEST\"}},\"email\": {\"notificationInfo\": {\"notificationType\": \"DeviceDeregisteredNotification\",\"notificationTime\": \"2018-10-01T17:47:51.465Z\",\"notificationId\": \"amzn1.dash.notification.v1.test\",\"version\": \"2015-06-05\"},\"deviceInfo\": {\"deviceIdentifier\": {\"serialNumber\": \"1122334455\"},\"productIdentifier\": {\"modelId\": \""+modelId+"\"}},\"customerInfo\": {\"directedCustomerId\": \"amzn1.account.FAKETEST\"}}}",
  "Timestamp" : "2018-10-03T03:35:29.676Z",
  "SignatureVersion" : "1",
  "Signature" : "pKN5yaR3FfMLUdP90silCwMYryp8JOJT+vm6qn0p0b8sfwYCAIOqaey/KY7J3Yn339ZSejZY0FsMWcdmDLSDQheuSIJ2DGk6z6a1Oe1soFx4SdEP+vd2NqTJM4uVZzR7/JX4vcBmMnUt0GtHOAmkNZcAk+532qEz0rXbnng942Ak3u4mHVaKco/4FmpssrDKoEocmWG3f9aVE+21D3pjePuCifB/5uV54PaH5ulwE4EbaFC3Q3ZggGFDY3IlaiIrWC85KkFx3HK4LUW/7tfIATQw/oJsnFg6gUlbMSRYcTYjauxjvSjNk9X7Ll45X83xq5jNE1KUTMHu8WGMApVi5Q==",
  "SigningCertURL" : "https://sns.us-east-2.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
  "UnsubscribeURL" : "https://sns.us-east-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-2:989023162453:sampletopic:2dd82f5e-74ed-4a8c-9018-30f27207a3a9"
};