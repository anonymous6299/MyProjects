import { useEffect, useState } from 'react'

const Returns = ({props}) => {
    const [Orders, setOrders] = useState([]);
    useEffect(() => {
        console.log(props)
    }, [])
    
  return (
    <div className={props.ReturnDisplay?"block":"hidden"}>
    <div>dfs</div>
    </div>
  )
}

export default Returns