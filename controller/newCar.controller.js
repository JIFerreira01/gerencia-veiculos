import { newCarService, getCarService } from "../services/carService.js";

function verifyIfCarExists(param) {
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
