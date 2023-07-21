import { Request, Response } from "express"
import { EO, IEO } from "../../models/eo"
import { Types } from "mongoose"
import handleError from "../../helpers/handleError"
import isReadable from "../../helpers/isReadable"
import { isParamEmpty } from "../../helpers/isParamEmpty"

export default async function get(req: Request, res: Response) {

    isParamEmpty(req) ? await withoutParam(res) : await withParam(req, res)

}

async function withParam(req: Request, res: Response) {
    const { id } = req.params as { id: string }
    try {

        const EOResult = await EO.findOne(new Types.ObjectId(id)).exec()

        if (!isReadable(EOResult)) {
            throw new Error("function withParam : Data not readable")
        }

        res.send(EOResult)
    } catch (err) {
        handleError(err, res)
    }
}

async function withoutParam(res: Response) {
    try {

        const EOResult = await EO.find().exec()

        if (!isReadable(EOResult)) {
            throw new Error("function withoutParam : Data not readable")
        }

        res.send(EOResult)

    } catch (err) {
        handleError(err, res)

    }
}