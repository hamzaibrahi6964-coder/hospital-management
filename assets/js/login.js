import { loginUser } from "../../firebase/auth.js";
import { getSuperAdmin } from "../../firebase/firestore.js";

lucide.createIcons();

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const hospitalDomain = document
        .getElementById("hospitalDomain")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value;

    if (
        hospitalDomain === "" ||
        email === "" ||
        password === ""
    ) {

        alert("Please fill all fields.");

        return;

    }

    try {

        // Login with Firebase Authentication
        const user = await loginUser(email, password);

        // Check whether this user is a Super Admin
        const superAdmin = await getSuperAdmin(user.uid);

        if (superAdmin) {

            alert("Welcome Super Admin!");

            window.location.href =
                "pages/platform/super-admin.html";

            return;

        }

        // Hospital Admin check will come next
        alert("User authenticated, but no role assigned.");

    }

    catch (error) {

        alert(error.message);

    }

});
