import { Response } from "express"

export default function handleError(err: any, res: Response): void {
    console.log(err)
    res.send("oops Error gan").status(500)
}