import { deleteCarService } from "../services/carService.js";

export async function deleteCarController(req, res, next){
    const data = req.body[0];
    const plate_car = {"license_plate": data.license_plate};
    
    const returnOfDelete = await deleteCarService(plate_car)
                            .then((data) => data)
                            .catch((err) => err)
    if(returnOfDelete){
        res.send(returnOfDelete)
    } else {
        res.send({code: 400, message: "bad request"})
    }
}