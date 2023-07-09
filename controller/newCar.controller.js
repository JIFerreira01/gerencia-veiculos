import { newCarService } from "../services/carService.js";
import { verifyIfCarExists } from '../utils.js'

function insertingNewData(param) {
    return newCarService(param)
             .then((data) => data)
             .catch((error) => error)
 }

export async function newCarController(req, res, next){
    const data = req.body[0];
    const returnOfVerification = await verifyIfCarExists(data);

    if(returnOfVerification == "Veiculo não cadastrado"){
        const returnOfInsert = await insertingNewData(data);
        res.send(returnOfInsert);
    } else {
        res.send({error: 404, message: returnOfVerification})
    }
}
