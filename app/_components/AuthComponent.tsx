"use client"

import {useMutation} from "react-query";
import {useEffect, useState} from "react";
import {User} from "@supabase/auth-js";
import {createClient} from "@/app/_utils/supabase/supabase_client";
import {signUp} from "@/app/actions";

export default function AuthComponent() {
    const supabase = createClient();
    const [user, setUser] = useState<User | null>(null)
    const {mutate: signUpMethod, isLoading: isSigningUp, error: signUpError} = useMutation({
        mutationFn: signUp.bind(null, {email: "petkovk796@gmail.com", password: "123Prudni@"})
    })

    // const {mutate: loginMethod, isLoading: isLoggingIn, error: loginError} = useMutation({
    //     mutationFn: login.bind(null, {email: "petkovk796@gmail.com", password: "123Prudni@"})
    // })

    function updateUserState() {

    }

    function handleSignUp() {
        signUpMethod();
    }

    function handleLogIn() {
        // loginMethod();
    }

    function handleLogOut() {
        supabase.auth.signOut();
        updateUserState()
    }

    useEffect(updateUserState)

    return <div>
        <h1>Supabase Auth: {isSigningUp ? "IS LOADING..." : ""}</h1>
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