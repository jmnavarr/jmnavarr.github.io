var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d9CK3T9bWuA:APA91bGf7dv7pSzap0caMn9SUrpSY8wathwmV991A4d8OjUsLUDqIYDPn2fAkiA3-mEbe2OQDh2l4vGY2480s8ASy2721uiKFMz-xw-O9RTeimDTpoKTlU49ROs1WOih3G2AKdGRpPK-","expirationTime":null,"keys":{"p256dh":"BAn1mmGEqxWXDHXmpEkD5b40SQvM59iO8gb6-m89pwxJGszIfLEFY447hTen4R_9EjKqGRKhNEt8pc5dxQ_XIB0","auth":"JU4ggdjCmt7Wqhoxw-lcHw"}};

const message = {
    title: "Battery alert",
    body: "Battery level < 5%"
}

const res = push.sendNotification(sub, JSON.stringify(message));

res.then((r) => {
    console.log("result", r);
});