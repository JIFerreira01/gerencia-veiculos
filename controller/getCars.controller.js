import { getCarsService } from '../services/carService.js'

export async function getCarsController(req, res, next){
    const allCars = await getCarsService().then((data) => data).catch((err) => err)
    return res.send(allCars)
}
