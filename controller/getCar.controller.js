import { getCarService } from '../services/carService.js'

export async function getCarController(req, res, next){
    const returnOfFind = await getCarService(req.params.id)
        .then((data) => data)
        .catch((err) => err)

    if(returnOfFind){
        res.send(returnOfFind)
    } else {
        res.send({code: 400, message: "bad request"})
    }
}
