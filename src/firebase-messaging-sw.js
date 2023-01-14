importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js"); 
firebase.initializeApp({
    apiKey: "AIzaSyDViSpZOsMB9CaualGcIzMDsjvaNvJV0HU",
    authDomain: "nota-8b381.firebaseapp.com",
    projectId: "nota-8b381",
    storageBucket: "nota-8b381.appspot.com",
    messagingSenderId: "931049927473",
    appId: "1:931049927473:web:740e6ab73e2f5fce327610",
    measurementId: "G-5KFBXP5QWM"
});
const messaging = firebase.getMessaging();
messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});