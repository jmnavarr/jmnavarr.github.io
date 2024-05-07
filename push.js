var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eA62pX8dJDY:APA91bF-KrRU6nZW3SWcCBKsuovuvqDK3cloBc5TgstdT0nMJ3sZCi6UDRh8E4tss5dp-0dDAOQPVch3PDgNrHe6Z4puyLYGdfAyKRTZRYBUCejiNFDbyZ1w5QyDvAAHHmJ6eVAEAln0","expirationTime":null,"keys":{"p256dh":"BMzuuNxJWDgFLmOY4lfkQPznZvFT2LaXu1EzPr92HJzBeh4g3vSNFjaJpbpUBzNp99WMpws9JC-2O_TXxIQe8kM","auth":"qSA77qfAy4wpVfxRnvRmNw"}};

const message = {
    title: "Battery alert",
    body: "Battery level < 5%"
}

const res = push.sendNotification(sub, JSON.stringify(message));

res.then((r) => {
    console.log("result", r);
});