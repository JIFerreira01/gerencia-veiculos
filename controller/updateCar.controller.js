import { updateCarService } from '../services/carService.js';

export async function updateCarController(req, res, next){
    const data = req.body[0];
    const plate_car = {"license_plate": data.license_plate};
    
    const returnOfUpdate = await updateCarService(plate_car, data)
                                .then((data) => data)
                                .catch((err) => err)
    if(returnOfUpdate){
        res.send(returnOfUpdate)
    } else {
        res.send({code: 400, message: "bad request"})
    }
}