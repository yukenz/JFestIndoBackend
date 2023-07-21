import { Schema, model, connect, HydratedDocument } from 'mongoose'
import MUV from 'mongoose-unique-validator'

import validator from 'validator'

const { isEmail } = validator

export interface IEO {
    _id?: Schema.Types.ObjectId
    nama: string,
    email: string,
    username: string,
    password: string
}

const eoSchema = new Schema<IEO>({
    email: {
        type: String,
        index: true,
        unique: true,
        required: [true, "Harap isikan email"],
        validate: [isEmail, "harap isikan email yang valid"],
    },
    username: {
        type: String,
        unique: true,
        required: [true, "Harap isikan username"],
    },
    password: {
        type: String,
        required: [true, "Harap isikan password"],
    },
    nama: {
        type: String,
        required: [true, "Harap isikan nama"],
    },
}, { collection: 'eo' })

eoSchema.plugin(MUV)

export const EO = model<IEO>('eo', eoSchema)


// async function run(): Promise<any> {

//     await connect('mongodb+srv://yukenz:pwnyaaltf4@cluster0.13stlxz.mongodb.net/retryWrites=true&w=majority', { dbName: "jfestindo" })

//     const eo: HydratedDocument<IEO> = new EO({
//         nama: "awanEO",
//         email: "yuyun.purniawan@gmail.com",
//         username: "awan",
//         password: "123"
//     })

//     await eo.save()
// }

