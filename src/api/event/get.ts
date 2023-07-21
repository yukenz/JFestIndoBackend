import { Request, Response } from "express"
import { Types } from "mongoose"
import { Event } from "../../models/event"
import { isParamEmpty } from "../../helpers/isParamEmpty"
import isReadable from "../../helpers/isReadable"
import handleError from "../../helpers/handleError"

export default async function get(req: Request, res: Response) {
    isParamEmpty(req) ? await withoutParam(res) : await withParam(req, res)

}

async function withParam(req: Request, res: Response) {

    const { id } = req.params as { id: string }
    try {

        if (!isReadable(id)) {
            throw new Error("function withParam : Parameter not readable")
        }
        const event = await Event.findOne({ _id: new Types.ObjectId(id) }).populate('eo').exec()

        if (!isReadable(event)) {
            throw new Error("function withParam : Data not readable")
        }

        res.send(event)
    } catch (err) {
        handleError(err, res)
    }
}

async function withoutParam(res: Response) {

    try {

        const event = await Event.find().populate('eo').exec()

        if (!isReadable(event)) {
            throw new Error("function withoutParam : Data not readable")
        }

        res.send(event)
    } catch (err) {
        handleError(err, res)
    }

}