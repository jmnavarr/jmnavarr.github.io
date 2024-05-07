self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('push', (e) => {
    console.log("received", e);
    const obj = e.data.json();
    console.log("obj", obj);

    const options = {
        actions: [
            { action: "view", title: "View" }
        ],
        body: obj.body,
        icon: 'https://placehold.co/100x100',
        data: {
            url: 'https://jmnavarr.github.io/'
        }
    };

    const res = self.registration.showNotification(obj.title, options);

    e.waitUntil(res);
});

self.addEventListener('notificationclick', (e) => {
    let payload = e.notification.data;

    if(e.action === 'view') {
        clients.openWindow(payload.url);
    }
});