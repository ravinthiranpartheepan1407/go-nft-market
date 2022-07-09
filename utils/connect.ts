import mongoose, { Model } from "mongoose";

const { DB_URL } = process.env

export const connect = async() => {
    const con = await mongoose.connect(DB_URL as string).catch(err => console.log(err))
    console.log("Mongodb Connection Created")

    const RegistrationSchema = new mongoose.Schema({
        email: String,
        password: String,
    })

    const Register = mongoose.models.Register || mongoose.model("Register", RegistrationSchema)

    return{ con, Register }
}