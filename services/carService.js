import mongoose from 'mongoose'
import { vehicleSchema } from '../schema/vehicles.schema.js';

const Vehicles = mongoose.model('Vehicle', vehicleSchema)

export function getCarsService() {
    return Vehicles.find()
}
