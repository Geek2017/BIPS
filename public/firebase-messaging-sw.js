importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
apiKey: "AIzaSyAfAUQL4lwodKXBojr3pTcUQMA66qIxqCs",
authDomain: "bipscommerce.firebaseapp.com",
databaseURL: "https://bipscommerce.firebaseio.com",
projectId: "bipscommerce",
storageBucket: "bipscommerce.appspot.com",
messagingSenderId: "656089769414"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
// 	const title = 'Hello World';
// 	const options = {
// 		body: payload.data.body
// 	};
// 	return self.registration.showNotification(title, options);
// });