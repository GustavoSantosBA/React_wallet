import axios from "axios";
import { useEffect, useState } from "react";

export function UseNotifyAPI<T = unknown>() {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => {
                setData(response.data)
            })
    }, [])

    return { data }
}