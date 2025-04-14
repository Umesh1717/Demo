import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
    const [data, setdata] = useState({ username: "", password: "" })
    const [getdata, setgetdata] = useState({})
    const [array, setarray] = useState([])
    const [name, setname] = useState("")
    const [refresh,setRefresh]=useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://umeshchandranallapati17-default-rtdb.firebaseio.com/register.json', data).then(() => {alert("Submitted successfully!");setRefresh(!refresh)})
    }
    const handleDelete=(i)=>{
        axios.delete(`https://umeshchandranallapati17-default-rtdb.firebaseio.com/register/${Object.keys(getdata)[i]}.json`).then(r=>setRefresh(!refresh))
    }
    useEffect(() => {
        axios.get("https://umeshchandranallapati17-default-rtdb.firebaseio.com/register.json").then(res => setgetdata(res.data))
    }, [refresh])
    const handleArray = e => {
        e.preventDefault()
        setarray([...array, name])
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data.username} onChange={e => setdata({ ...data, username: e.target.value })} /><br />
                <input type="password" value={data.password} onChange={e => setdata({ ...data, password: e.target.value })} /><br />
                <input type="submit" />
            </form>
            {getdata!==null&&Object.keys(getdata).length > 0 && Object.values(getdata).map((ele,i) => (
                <div key={i}>
                    <h1>{ele.username}: {ele.password}</h1><button onClick={()=>handleDelete(i)}>Delete</button>
                </div>
            ))}
            <form action="" onSubmit={handleArray}>
                <input type="text" name="username" value={name} onChange={e => setname(e.target.value)} />
                <input type="submit" name="" id="" />
            </form>
            {array.map((ele, i) =>
                <p key={i}>{ele}</p>
            )}
        </>
    )
}
export default Login;