import mongoose from 'mongoose'
import { vehicleSchema } from '../schema/vehicles.schema.js';

const Vehicles = mongoose.model('Vehicle', vehicleSchema)

export function getCarsService() {
    return Vehicles.find()
}

export function getCarService(param) {
    return Vehicles.collection.findOne({license_plate: param})
}

export function newCarService(param) {
    return Vehicles.collection.insertOne(param)
}

export function updateCarService(filter, object){
    return Vehicles.findOneAndUpdate(filter, object)
}

export function deleteCarService(filter){
    return Vehicles.findOneAndRemove(filter)
}
