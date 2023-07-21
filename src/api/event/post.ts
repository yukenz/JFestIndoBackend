import { Request, Response } from "express"
import { HydratedDocument, Schema, Types } from "mongoose"
import { EO, IEO } from "../../models/eo"
import { Event, IEvent } from "../../models/event"

export default async function post(req: Request, res: Response) {

    const { nama, jam, lokasi, eo: eoRaw } = req.body as IEvent

    try {
        // const eodata: HydratedDocument<IEO> | null = await EO.findOne({ _id: eoRaw }).exec()

        if (typeof eoRaw === 'string') {

            if (await EO.findOne({ _id: new Types.ObjectId(eoRaw) }).exec() === null) {
                throw {
                    message: "EO not Found"
                };
            }

            const eo = new Types.ObjectId(eoRaw)
            const event: HydratedDocument<IEvent> = new Event({
                nama, jam, lokasi, eo
            })

            await event.save()
        }

        // console.log(event.save())
        res.send('ok')
    } catch (err) {
        console.log(err)
        res.send(err)
    }

}