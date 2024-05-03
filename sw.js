self.addEventListener('push', (e) => {
    console.log("received", e);
    
    self.registration.showNotification('test message', {});
});