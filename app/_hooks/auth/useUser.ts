import useErrorQuery from "@/app/_hooks/useErrorQuery";
import {getUser} from "@/app/_utils/actions/auth";
import {createClient} from "@/app/_utils/supabase/supabase_client";
import {useRouter} from "next/navigation";

export function useUser() {
    const supabase = createClient();
    const router = useRouter();

    const {data: user, isLoading, error, refetch} = useErrorQuery({
        queryFn: () => getUser(),
    })

    async function logout() {
        await supabase.auth.signOut({scope: "local"});
        router.refresh();
    }

    return {
        user: user?.success ? user.value : null,
        isLoading,
        error,
        logout,
        refetch
    }
}