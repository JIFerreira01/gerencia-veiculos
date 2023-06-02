import mongoose from 'mongoose'
import { vehicleSchema } from '../schema/vehicles.schema.js';

const Vehicles = mongoose.model('Vehicle', vehicleSchema)

export function getCarsService() {
    return Vehicles.find()
}

export function getCarService(param) {
    console.log('getCarService')
    return Vehicles.findOne({license_plate: param})
}

export function newCarService(param) {
    return Vehicles.collection.insertOne(param)
}
