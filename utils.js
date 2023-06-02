import mongoose from 'mongoose'
import { getCarService } from "./services/carService.js";
import { vehicleSchema, fleetOfCarsSchema } from './schema/vehicles.schema.js'

// Connecting in mongodb
export const connectingDb = function () {
    mongoose.connect('mongodb://root:password@mongodb:27017/admin').then(async () =>  {
        try {
            //verificando se já existe vehicles/fleet_of_cars
            mongoose.model('vehicles')
            mongoose.model('fleet_of_cars')
            console.log('Mongodb is up working')
        } catch (error) {
            console.log('Mongodb is not working', error)
        }
    }
    )
    .catch('deu errado').finally(() => console.log('finally'))
}


export function verifyIfCarExists(param) {
   return getCarService(param?.license_plate)
            .then((data) => {
                if(data){
                    return "Veículo Cadastrado"
                } else {
                    return "Veiculo não cadastrado"
                }
            })
            .catch((error) => "Ocorreu um erro ao inserir")
}
