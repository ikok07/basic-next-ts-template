"use client"

import {login, signUp} from "@/app/actions";
import {useUser} from "@/app/_hooks/auth/useUser";
import {useEffect} from "react";
import useErrorMutation from "@/app/_hooks/useErrorMutation";
import {toast} from "react-toastify";

export default function AuthComponent() {

    const {user, logout} = useUser();

    const {mutate: signUpMethod, isLoading: isSigningUp, error: signUpError} = useErrorMutation({
        mutationFn: signUp.bind(null, {email: "petkovk796@gmail.com", password: "123Prudni@"}),
    });

    const {mutate: loginMethod, isLoading: isLoggingIn, error: loginError} = useErrorMutation({
        mutationFn: login.bind(null, {email: "petkovk796@gmail.com", password: "123Prudni@"}),
    });

    function handleSignUp() {
        signUpMethod();
    }

    function handleLogIn() {
        loginMethod();
    }

    function handleLogOut() {
        logout();
    }

    useEffect(() => {
        if (signUpError) {
            if (["user_already_exists"].includes(signUpError.id)) {
                toast.error(signUpError.message);
            } else {
                toast.error("Something went wrong!");
            }
        }
    }, [signUpError])

    useEffect(() => {
        if (loginError) {
            if (["email_not_confirmed", "invalid_credentials"].includes(loginError.id)) {
                toast.error(loginError.message);
            } else {
                toast.error("Something went wrong!");
            }
        }
    }, [loginError])

    return <div>
        <h1>Supabase Auth: {isSigningUp || isLoggingIn ? "IS LOADING..." : ""}</h1>
        <div className="flex items-center gap-4">
            <div className="flex gap-4 items-center">
                <label>User ID:</label>
                <p>{user && user.id}</p>
            </div>
            <div className="flex gap-4 items-center">
                <label>Authorized:</label>
                <p>{user ? "true" : "false"}</p>
            </div>
            {!user ?
                <>
                    <button className="bg-gray-600 text-white px-3" onClick={handleSignUp}>Sign Up</button>
                    <button className="bg-gray-600 text-white px-3" onClick={handleLogIn}>Log In</button>
                </> :
                <>
                    <button className="bg-gray-600 text-white px-3" onClick={handleLogOut}>Log Out</button>
                </>
            }
        </div>
    </div>
}