# Demo Procedure

- Step 1: Go to https://jmnavarr.github.io/
- Step 2: Click "inspect" and view the browser console
- Step 3: Click the "Subscribe" button and observe a JSON object that looks like this:

```
{"endpoint":"https://fcm.googleapis.com/fcm/send/dKzyeGFe5Wo:APA91bFWfqXYY-79r3_P7Nc_IT7g6dUqIG0vWaPFxyUc2cFfYGTBZczEYiANjeG-qkql4zlVz1ba2p4kJd4JvHK7OGuMT-qlL4IlqB4dIzUGr1NMkAXmYeSjcidVE97vy_6RZSjFM9JH","expirationTime":null,"keys":{"p256dh":"BGrrtaGDyFlYHy60HFDQU8QRgSK-DHPmIUrjpr7x5et9XjnanLOqu4ILlWokzNO50ERYCNY0EP4lKCw9aC-iPTs","auth":"TS5EtdpYGkEJ7XpeilTnlA"}}
```

- Step 4: Update the "sub" variable with the JSON object from above in the `push.js` server-side script
- Step 5: Run `node push.js` to send a notification to the subscribed client