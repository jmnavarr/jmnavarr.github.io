var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {"publicKey":"BF_lG-icS6HUkP_RD2_3Bob3iGw4_d875GJwudFbQ_I-zHfS3mBkY8jtq132iExxUdIrUSS7zg5FI9UprnY4Xzk","privateKey":"edft_JR64e39V7W_mGNTmzzVJumPWUT_Mq-Qv3DpEGk"};

push.setVapidDetails('mailto:juan.m.navarro@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dCtL-olwwxQ:APA91bFYn3_MnG6qlFmuOb2GxWJ6E1UAiW-WPz4iAnG3Qg_DXE2QH1WFoTPt-IbldPCJQEVgrGhx4QFE58XfR_aPmYwxIV_aSknbi0oMdfyk8xBRiG7l49s7LDF4-4PbOD6f_qm9z2W0","expirationTime":null,"keys":{"p256dh":"BGRA4DboO3G87btmLiDuFM8L2GZ6V7DiNNF3LgpucO9eDR9frPCOYRl22gOy5oq94qmeqSp65yVCOKWr_EcoEXs","auth":"sP79LgkBV9GEDq-QpfknSw"}};

push.sendNotification(sub, 'test message');