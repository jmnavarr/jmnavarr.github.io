var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cmcfA2S8wxA:APA91bHM9zLc8bKrUG2wbqU06elydTRmRGV-lQlW0D8gf6-WsD0gOdPsrVqtT-gdZLXV6UGrkq8I_2hoZu2AUhcmWOzMVfjPQm-O0oGJggTqMXgV27GSiL8gzmJpVx1jNM6sB1J4imEq","expirationTime":null,"keys":{"p256dh":"BCM3vNB8aD0D_LPUPbJ1u5zGiVCUFUbHrur7iv0Fk1vuAvP4d4q3oUS4GGEOtJCza0UGzDi33Dgm6ZB70TIvWe8","auth":"hBjXMXHK97nrqM0iOOBICw"}};

push.sendNotification(sub, 'test message');