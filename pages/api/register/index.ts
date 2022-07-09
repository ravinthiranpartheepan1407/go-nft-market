import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connect"
import { Routes } from "../../../utils/types"

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    const method: keyof Routes = req.method as keyof Routes
    const errors = (error: Error) => res.status(400).json({error})

    const handleRoute: Routes = {
        GET: async(req: NextApiRequest, res: NextApiResponse) => {
            const { Register } = await connect()
            res.json(await Register.find({}).catch(errors))
        },

        POST: async(req: NextApiRequest, res: NextApiResponse) => {
            const { Register } = await connect()
            res.json(await Register.create(req.body).catch(errors))
        },

    }
    const response = handleRoute[method]
    if(response) response(req, res)
    else res.status(400).json({error: "No Response for this Request"})
}

export default handler;
