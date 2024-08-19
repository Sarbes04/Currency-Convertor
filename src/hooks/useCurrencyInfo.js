//generally these hooks return javascript
//good practice is that when you are returning javascript give .js extension and
//when you are returning jsx give .jsx extension
import { useEffect,useState } from "react";

//generally all hooks have "use" before their name

function useCurrencyInfo(currency){
    const [data,SetData] = useState({}); // empty object isiliye dala hai taki fetch call na ho to empty object mein bhi loop chalega 
                                        // to crash nahi karega kuch
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())  //jo response aaya use json mein convert karna padega
            .then((res)=> SetData(res[currency])) // use kahin store karna padega , variable mein karenge to
                                        // to change karne time ui me dikhega nahi to we will use useState
        console.log(data);

    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;