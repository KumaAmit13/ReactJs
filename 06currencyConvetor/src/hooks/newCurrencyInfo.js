import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({});
    const[date,setDate]=useState("");
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>{setData(res[currency]);
            setDate(res.date);
        });
    },[currency]);
    console.log(data);
    return [data,date];
}
export default useCurrencyInfo;