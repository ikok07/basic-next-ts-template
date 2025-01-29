import {useQuery, UseQueryOptions} from "react-query";
import {QueryKey} from "react-query/types/core/types";
import {ServerActionErrorType, ServerActionResult} from "@/app/_utils/createServerAction";

export default function useErrorQuery<TQueryFnData = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: UseQueryOptions<ServerActionResult<TQueryFnData>, ServerActionErrorType, ServerActionResult<TData>, TQueryKey>) {
    return useQuery({...options,
        onSuccess(data) {
            if (!data.success) throw data.error;
            if (options.onSuccess) options.onSuccess(data);
        }
    })
}

