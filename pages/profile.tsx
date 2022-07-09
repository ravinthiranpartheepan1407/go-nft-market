import { Register } from "../utils/types"
import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"

interface ProfileProps{
    register: Array<Register>
}

function Profile(props: ProfileProps){
 
    const {register} = props

    return(
        <div>
            {register.map(t => (
                <div key={t._id}>
                    <Link href={`/register/${t._id}`}>
                        <h3 className="text-black">
                            {t.email}
                        </h3>
                    </Link>
                </div>
            ))}
        </div>
    )

}

export async function getServerSideProps() {
    const res = await fetch(process.env.API_URL as string)
    const register = await res.json()

    return{
        props:{
            register,
        }
    }
}

export default Profile;