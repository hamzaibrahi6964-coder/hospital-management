import { auth } from "../../../firebase/firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

lucide.createIcons();

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href = "../../../index.html";

        return;

    }

    console.log("Logged in user:");

    console.log(user);

});
