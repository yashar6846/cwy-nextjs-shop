import { useEffect, useState } from "react"

const LastSalesPage = () => {

    const [sales, setSales] =useState()
    const [isLoading, setIsLoading]  =useState(false)

    useEffect(()=>{
     fetch(`https://im-donkey-default-rtdb.firebaseio.com/sales.json`).then((response)=>response.json())
     .then(data=> {
        const transformeSales=[]
        for(const key in data ){
            transformeSales.push({
                id:key,
                username:data[key].username,
                volume:data[key].volume
            })
        }
       setSales(transformeSales)
       setIsLoading(false)
     })
    },[])
   
    if(isLoading){
        return <p>Loading...</p>
    }
    if(!sales){
        return <p>No data yet</p>
    }
  return (
    <ul>
    {sales.map((sale)=>(
        <li key={sale.id}>
            {sale.username} - ${sale.volume}
        </li>
    ))}
    </ul>
  )
}

export default LastSalesPage