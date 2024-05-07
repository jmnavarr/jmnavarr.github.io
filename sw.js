self.addEventListener('push', (e) => {
    console.log("received", e);
    const obj = e.data.json();
    console.log("obj", obj);

    const options = {
        body: obj.body
    };

    self.registration.showNotification(obj.title, options);
});