var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cdBCyTbg4Hk:APA91bHFKt8s64Y3d6_YLJtAfwG-VRQ7_mF1OGSQBAKbaY5VZk8B92mF-t2w-keJhHwmAcUDZ4xrMAszonERoLYQmgGNR7TJx6BT0AKLHu9BFf5bR9G8fAnbu8LsOM6dTxyKTs1qI_6-","expirationTime":null,"keys":{"p256dh":"BBTGcMQ4foVAfK0pOvdxr4QkNUPem-PG5kSD319bhlOUMUQwn9tbqykFgztQGP05XZDi8KxJ4_y9LsXR9HazPJo","auth":"l8KJRzHxjbBOFvF18jVqkA"}};

push.sendNotification(sub, 'Your device has reached a battery level of 5%.');