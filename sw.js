self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('push', (e) => {
    console.log("received", e);
    const obj = e.data.json();
    console.log("obj", obj);

    const options = {
        body: obj.body
    };

    //self.registration.showNotification(obj.title, options);
    const res = self.registration.showNotification(obj.body, {});

    e.waitUntil(res);
});