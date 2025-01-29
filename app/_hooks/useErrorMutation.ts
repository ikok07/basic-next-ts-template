import {useMutation, UseMutationOptions} from "react-query";
import {ServerActionErrorType, ServerActionResult} from "@/app/_utils/createServerAction";

export default function useErrorMutation<TData = unknown, TVariables = void, TContext = unknown>(options: UseMutationOptions<ServerActionResult<TData>, ServerActionErrorType, TVariables, TContext>) {
    return useMutation({...options,
        onSuccess(data, variables, context) {
            if (!data.success) throw data.error;
            if (options.onSuccess) options.onSuccess(data, variables, context)
        }
    })
}