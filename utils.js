import mongoose from 'mongoose'
import { vehicleSchema, fleetOfCarsSchema } from './schema/vehicles.schema.js'

// Connecting in mongodb
export const connectingDb = function () {
    mongoose.connect('mongodb://root:password@mongodb:27017/admin').then(async () =>  {
        try {
            //verificando se já existe vehicles/fleet_of_cars
            mongoose.model('vehicles')
            mongoose.model('fleet_of_cars')
        } catch (error) {
            // const fleetOfCars = mongoose.model('fleet_of_cars', fleetOfCarsSchema)
            // const vehicle = mongoose.model('vehicle', vehicleSchema)
            
            // const newFleetOfCars = new fleetOfCars({
            //     brands_and_models: [
            //         {
            //             brand_name: 'chevrolet',
            //             brand_models: [
            //                 { name: 'spin' },
            //                 { name: 'cobalt' },
            //                 { name: 'montana' },
            //                 { name: 'S10' }
            //             ]
            //         }
            //     ]
            // })
            
            
            // const newVehicle = new vehicle({
            //     license_plate: "eqb2g38",
            //     chassi: "SV30-0169266",
            //     reindeer: 481014772,
            //     brand_car: "chevrolet",
            //     model_car: "spin",
            //     year: 2020
            // })

            // await newVehicle.save();
            // await newFleetOfCars.save();
        }
    }
    )
    .catch('deu errado').finally(() => console.log('finally'))
}
