import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const vehicleSchema = Schema({
    license_plate: String,
    chassi: String,
    reindeer: Number,
    model_car: String,
    brand_car: String,
    year: Number
})

export const fleetOfCarsSchema = Schema({
    brands_and_models: [{
        brand_name: String,
        brand_models: [{
            name: String
        }]
    }]
})

