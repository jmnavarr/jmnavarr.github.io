var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dX3fg5uznPI:APA91bHmmoSbENhbE0OWsdgHsJbknlogogbVoVkSKMJ5ja9eaM2yI-JQumEY2H1lL22-_UhATzwld6jZIYuKBuICuCZwVgABgIcE5Qrrxtu9Wslv0GGWqdJ-fc2k5U4kpanL6QphVnvb","expirationTime":null,"keys":{"p256dh":"BEEHBHR3iluNiZ6VlNrR6YNQe-cWcaLlDfUqo6FKHgj7au07CLcCDL738kuDvYrrqg1UXaD7QLkgygYv_d1-o88","auth":"JlEGsE3nKdDPkajzctFMoQ"}};

const message = {
    title: "Battery alert",
    body: "Battery level < 5%"
}

push.sendNotification(sub, JSON.stringify(message));