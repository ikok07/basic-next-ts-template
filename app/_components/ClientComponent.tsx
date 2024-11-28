"use client"

import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {setId, setName} from "@/store/slices/userSlice";
import {useQuery} from "react-query";
import {getDummyData} from "@/actions/dummyActions";

export default function ClientComponent() {
    const {data} = useQuery({
        queryFn: getDummyData
    })

    const {id, name} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();

    function handleAddData() {
        dispatch(setId(1));
        dispatch(setName("John Smith"));
    }


    return <>
        <div className="flex items-center gap-4">
            <div className="flex gap-4 items-center">
                <label>ID:</label>
                <p>{id}</p>
            </div>
            <div className="flex gap-4 items-center">
                <label>Name:</label>
                <p>{name}</p>
            </div>
            <button className="bg-gray-600 text-white px-3" onClick={handleAddData}>Add data</button>
        </div>
        <div>
            <h1>Dummy network data:</h1>
            <p>{JSON.stringify(data?.products ?? "No products")}</p>
        </div>
    </>
}