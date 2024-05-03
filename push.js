var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/djlEpTh3_HI:APA91bFkcxFo1c868JxtxgkGfz86KC1FXlfPnA1ShgQHsUEOYMqpITyYN7600Svri3egid0-kyhf9st24ITuxQMhKHE5u31uS6zCQC_BTl27CYlqPCRzE_AgcgLLif_YawgQ9fCeSbjP","expirationTime":null,"keys":{"p256dh":"BPYACkdsDbSVx3mstgHN8O6xUs63vsJR_NymxBbTxCDR3b09ThTVAVaV2butSA3pCLJWwj_1GIfvL766aXYVWkw","auth":"nUhTngxwCiF3dzwJeyR98g"}};

const message = {
    title: "Battery alert",
    body: "Your device has reached a battery level of 5%."
}

push.sendNotification(sub, message);