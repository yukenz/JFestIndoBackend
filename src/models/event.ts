import { Schema, model } from 'mongoose'
import validator from 'validator'
import { IEO } from './eo'

const { isEmail } = validator

export interface IEvent {
    _id?: Schema.Types.ObjectId
    nama: string,
    jam: string,
    lokasi: string,
    eo: string | Schema.Types.ObjectId
}

const eventSchema = new Schema<IEvent>({
    nama: {
        type: String,
        required: true,
    },
    jam: {
        type: String,
        required: true,
    },
    lokasi: {
        type: String,
        required: true,
    },
    eo: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'eo'
    },
}, { collection: 'event' })

export const Event = model<IEvent>('event', eventSchema)


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

