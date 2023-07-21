import { Request, Response } from "express"
import { HydratedDocument } from "mongoose"
import { EO, IEO } from "../../models/eo"
import { Event, IEvent } from "../../models/event";

export default async function post(req: Request, res: Response) {
    const { email, username, nama, password } = req.body as IEO

    const eo: HydratedDocument<IEO> = new EO({
        nama, email, username, password
    })

    await eo.save().catch((err) => res.send(err.errors))

}