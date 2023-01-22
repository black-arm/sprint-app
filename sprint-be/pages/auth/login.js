import { useState } from "react"

export default function Login(){
    
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const onSubmit = () =>{
        console.log(login)
    }

    return <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input id="email" 
                    type="text" 
                    placeholder="example@sprint.org" 
                    className="form-control form-control-sm"
                    onChange={() => setLogin({...login, email: event.target.value})}
                    value={login.email}/>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input id="password" 
                    type="password"
                    className="form-control form-control-sm"
                    onChange={() => setLogin({...login, password: event.target.value})}
                    value={login.password}/>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <button onClick={onSubmit}
                    className="btn btn-sm btn-primary">Send</button>
            </div>
        </div>
    </div>
}