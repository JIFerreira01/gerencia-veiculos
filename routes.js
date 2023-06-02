import express from 'express'
import {getCarController} from './controller/getCar.controller.js'
import {getCarsController} from './controller/getCars.controller.js'
import {newCarController} from './controller/newCar.controller.js'
import {updateCarController} from './controller/updateCar.controller.js'
import {deleteCarController} from './controller/deleteCar.controller.js'
 
export const carsRoute = express.Router();

carsRoute.get('/', getCarsController)
carsRoute.get('/:id', getCarController)
carsRoute.post('/new-car', newCarController)
carsRoute.put('/update-car', updateCarController)
carsRoute.delete('/remove-car', deleteCarController)
