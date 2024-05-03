self.addEventListener('push', (e) => {
    console.log("received", e);
    e.waitUntil(
        self.registration.showNotification('test message', {})
    );
});