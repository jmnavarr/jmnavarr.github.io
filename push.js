var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cyK4nIMGNao:APA91bE7GTJ2anpO-BEBMzmp_af5EqOQ68QCuwh4lnMPJTwHA8IFDT55WyGU_UgAlmsM9ZJ6bD2DoE3GJq1Uv2IAlvk4y88hxr2S7kyps6PiRMzlJU8tJOaVKQks8WyemzMRQocKysmS","expirationTime":null,"keys":{"p256dh":"BMxgP2seOUOb6iKwu0BHExh4TI9yncLzDQIDAO9DjIfWQvvzqPRuLK_qEjPlnZ3IUPFj6yxdEwBaWlzEwMepGHQ","auth":"0-RAGJwm0Yj_jmZ45vta9g"}};

const message = {
    title: "Battery alert",
    body: "Battery level < 5%"
}

push.sendNotification(sub, JSON.stringify(message));