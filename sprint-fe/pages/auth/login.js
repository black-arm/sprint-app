import Link from "next/link"
import { useState } from "react"

export default function Login(){

    const [emailInvalid, setEmailInvalid] = useState(false)
    const [passwordInvalid, setPasswordInvalid] = useState(false)
    
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const onSubmit = () =>{

        if(!login.email){
            setEmailInvalid(true)
        }

        if(!login.password){
            setPasswordInvalid(true)
        }

        if(emailInvalid || passwordInvalid){
            return;
        }

        console.log(login)
    }

    const onClear = () =>{
        setLogin({
            email: '', 
            password: ''
        })
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
                    className={"form-control form-control-sm " + (emailInvalid ? "is-invalid":"")}
                    onChange={(event) => setLogin({...login, email: event.target.value})}
                    value={login.email}/>
                {emailInvalid ? <div className="invalid-feedback">Email is required</div>: null}
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input id="password" 
                    type="password"
                    className={"form-control form-control-s " + (passwordInvalid ? "is-invalid":"")}
                    onChange={(event) => setLogin({...login, password: event.target.value})}
                    value={login.password}/>
                {passwordInvalid ? <div className="invalid-feedback">Password is required</div>: null}
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <button onClick={onSubmit}
                    className="btn btn-sm btn-primary">Send</button>
            </div>
            <div className="col-6">
                <button onClick={onClear}
                    className="btn btn-sm btn-primary">Clear</button>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <Link href="/sign-in">Registrati</Link>
            </div>
        </div>
    </div>
}