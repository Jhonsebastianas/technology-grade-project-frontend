self.addEventListener("push", function (event) {
    // Data llegante del backend
    const data = event.data.json();
    console.log('Push Recieved...');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://controlsep.com/android-chrome-192x192.png'
    });
});