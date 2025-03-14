"use client"

import {useAppUser} from "@/app/_hooks/auth/useUser";
import Link from "next/link";
import {UserButton} from "@clerk/nextjs";
import {useAccess} from "@/app/_hooks/auth/useAccess";
import {IoGlobeOutline, IoLinkOutline} from "react-icons/io5";
import PrimaryButton from "@/app/_components/ui/buttons/PrimaryButton";

export default function AuthComponent() {
    const {authData, userObject} = useAppUser();
    const {accessGranted, isLoading} = useAccess({
        principal: {
            id: userObject.user?.primaryEmailAddress?.emailAddress!,
            roles: userObject.user?.publicMetadata["roles"] as string[]
        },
        resource: {
            kind: "product",
            id: "product_1"
        },
        action: "update",
        enabled: !!userObject.user?.primaryEmailAddress?.emailAddress
    });

    return <div>
        <h1>Clerk Auth</h1>
        {authData.isLoaded ?
            <div className="flex items-center gap-4">
                {!userObject.user ?
                    <>
                        <Link className="bg-gray-600 text-white px-3" href="/auth/sign-up">Sign Up</Link>
                        <Link className="bg-gray-600 text-white px-3" href="/auth/sign-in">Log In</Link>
                    </> :
                    <>
                        {/*<UserButton userProfileMode="navigation" userProfileUrl="/auth/profile"/>*/}
                        <UserButton >
                            <UserButton.UserProfilePage label="Test page" labelIcon={<IoGlobeOutline />} url="test">
                                <h1>This is a test page</h1>
                            </UserButton.UserProfilePage>
                            <UserButton.UserProfileLink url="/" label="Test link" labelIcon={<IoLinkOutline />} />
                        </UserButton>
                        {accessGranted && <p className="text-red-500">Only admins should see this text</p>}
                        <PrimaryButton>Account</PrimaryButton>
                    </>
                }
            </div>
            :
            <p>LOADING DATA...</p>
        }
    </div>
}