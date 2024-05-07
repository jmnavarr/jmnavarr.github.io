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

    const res = self.registration.showNotification(obj.title, options);

    e.waitUntil(res);
});