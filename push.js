var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dKzyeGFe5Wo:APA91bFWfqXYY-79r3_P7Nc_IT7g6dUqIG0vWaPFxyUc2cFfYGTBZczEYiANjeG-qkql4zlVz1ba2p4kJd4JvHK7OGuMT-qlL4IlqB4dIzUGr1NMkAXmYeSjcidVE97vy_6RZSjFM9JH","expirationTime":null,"keys":{"p256dh":"BGrrtaGDyFlYHy60HFDQU8QRgSK-DHPmIUrjpr7x5et9XjnanLOqu4ILlWokzNO50ERYCNY0EP4lKCw9aC-iPTs","auth":"TS5EtdpYGkEJ7XpeilTnlA"}};

push.sendNotification(sub, 'test message');