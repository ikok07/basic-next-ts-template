"use client"

import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {setId, setName} from "@/store/slices/userSlice";

export default function ClientComponent() {
    const {id, name} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();
    function handleAddData() {
        dispatch(setId(1));
        dispatch(setName("John Smith"));
    }

    return <div className="flex items-center gap-4">
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
}