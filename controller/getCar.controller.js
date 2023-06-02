import { getCarService } from '../services/carService.js'

export async function getCarController(req, res, next){
    const plate_car = await getCarService(req.params.id).then((data) => data).catch((err) => err)
    console.log('retorno do service', plate_car)

    res.send({plate_car})
}
