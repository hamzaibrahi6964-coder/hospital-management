import { db } from "./firebase-config.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

/**
 * Check whether a UID belongs to a Super Admin
 */
export async function getSuperAdmin(uid) {

    try {

        const docRef = doc(db, "super_admins", uid);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            return docSnap.data();

        }

        return null;

    }

    catch (error) {

        console.error("Firestore Error:", error);

        throw error;

    }

}
