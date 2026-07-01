import { loginUser } from "../../firebase/auth.js";

lucide.createIcons();

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const hospitalDomain =
        document.getElementById("hospitalDomain").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    if (
        hospitalDomain === "" ||
        email === "" ||
        password === ""
    ) {

        alert("Please fill all fields.");

        return;

    }

    try {

        const user = await loginUser(email, password);

        console.log("Logged in:", user);

        alert("Login Successful");

    }

    catch (error) {

        alert(error.message);

    }

});
