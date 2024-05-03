self.addEventListener('push', (e) => {
    console.log("received", e);
    const obj = e.data.json();
    console.log("obj", obj);

    self.registration.showNotification(obj.body, {});
});