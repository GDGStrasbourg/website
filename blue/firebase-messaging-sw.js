importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "276212992139",
    apiKey: "AIzaSyBf2X9WgS264j2aFivV03-K_hzD22GpnM4",
    projectId: "gdg-strasbourg-vitrine",
    appId: "1:276212992139:web:14dfc336202a931c802c8e",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {

    const {title, ...options} = JSON.parse(payload.data.notification);

    return self.registration.showNotification(
        title,
        options,
    );
});
