/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: "AIzaSyBaEvhDwYutJc0LHRxsZhLw1No6hFFoirE",
  authDomain: "chat-app-b4872.firebaseapp.com",
  databaseURL: "https://chat-app-b4872-default-rtdb.firebaseio.com",
  projectId: "chat-app-b4872",
  storageBucket: "chat-app-b4872.appspot.com",
  messagingSenderId: "474348947166",
  appId: "1:474348947166:web:94fe2054dc79a60e36644f",
});

firebase.messaging();
