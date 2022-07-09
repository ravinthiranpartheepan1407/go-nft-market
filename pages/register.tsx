import { useRouter } from "next/router";
import { FormEvent, FormEventHandler, useRef } from "react";
import { Register } from "../utils/types";

interface CreateRegister{
    url: string
}

function Register(props: CreateRegister){
    const router = useRouter();

    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        let register: Register = {email: "", password: ""}
        if(null !== email.current && null !== password.current){
            register = { email: email.current.value, password: password.current.value }
        }

        await fetch(props.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(register),
           
        })
        console.log(register)
        router.push("/profile")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border border-black" type="text" ref={email}></input>
                <input className="border border-black" type="text" ref={password}></input>
                <input className="border border-black" type="submit" value="Create Registration"></input>
            </form>
        </div>
    )
}

export async function getStaticPropos(context: any){
    return{
        props: {
            url: process.env.API_URL,
        },
    }
}

export default Register