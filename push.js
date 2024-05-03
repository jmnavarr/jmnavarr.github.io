var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dkwj8sZFzwE:APA91bEJZOhn6xnEcCFXNgemi9V9C_nTwydOcvgB46DcgJ18ULdTU86gNvHeX3wdFsYDsCZC8eCvfKoTdQrwu-sIgi2WQ9MjelqRfHEOJKBRWDI1jv7LS0GCnNoRRr__ENe-gVsDZ_Yc","expirationTime":null,"keys":{"p256dh":"BOX3vEqL-vEOwbE-V5ldqr0Wtgt5zqjLcpNNpFFy8cKb513045ed6ykulE6CfqYIYGSB5PhN4DJRuOLncnJSgwE","auth":"Aqg5pqvqTFfPaHgjn_3Hwg"}};

push.sendNotification(sub, 'test message');