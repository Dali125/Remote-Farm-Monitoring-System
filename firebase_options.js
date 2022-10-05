import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyCXDT04M79hEgG_fTgIFzY4Wp8vbf3aBMs",
    authDomain: "livetap-891da.firebaseapp.com",
    projectId: "livetap-891da",
    storageBucket: "livetap-891da.appspot.com",
    messagingSenderId: "556672856671",
    appId: "1:556672856671:web:97e7ef3997fe0ce4e921ea",
    measurementId: "G-0F3WMWRL39"
};
const
    app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);