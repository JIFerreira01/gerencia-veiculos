import { getCarsService } from '../services/carService.js'

export async function getCarsController(req, res, next){
    const allCars = await getCarsService()
                    .then((data) => data)
                    .catch((err) => err)

    if(allCars){
        res.send(allCars)
    } else {
        res.send({code: 400, message: "bad request"})
    }
}
