import { useEffect, useState } from "react";
const BaseUrl = "http://localhost:3001/"

function useFetch(entity,id=""){
   const [loading, setLoading] = useState(true);
   const [errorMessage, setErrorMessage] = useState("");
    const [data, setData] = useState([]);
    
      useEffect(() => {
        const fetchData = (async () => {
          try {
            const url = id? `${BaseUrl}${entity}/${id}`:`${BaseUrl}${entity}`
            // console.log(url);
            const data = await fetch(url);
            // console.log(data, '<< data from await')

            if(!data.ok) throw await data.text()

            const result = await data.json();
            setData(result)
            setLoading(false)
          } catch (err) {
            setErrorMessage(err?.message || "Internal Server Error");
          }
        })
        fetchData()
      },[]);

      return {data,loading,errorMessage}
}

export default useFetch
