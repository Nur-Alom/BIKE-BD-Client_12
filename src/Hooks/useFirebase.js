import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState({});

    const handleLoginEmailPassword = () => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
            .catch((error) => {

            });
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setLoading(false);
        });
    }, [])

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUsers({});
            })
            .catch(error => {

            })
            .finally(() => setLoading(false));
    };

    return {
        users,
        loading,
        setUserName,
        handleName,
        handleEmail,
        handlePassword,
        handleRegister,
        handleLoginEmailPassword,
        googleLogin,
        logOut
    }
}

export default useFirebase;