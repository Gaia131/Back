import { Router } from 'express'
import { getReservas, getReserva, saveReserva, updateReserva, deleteReserva } from './controller/ReservaController'
import { getFuncionarios, getFuncionario, saveFuncionario, updateFuncionario, deleteFuncionario } from './controller/FuncionarioController'
import { deleteCliente, getCliente, getClientes, saveCliente, updateCliente } from './controller/ClienteController';

const routes = Router()


routes.get('/Reserva', getReserva);
routes.get('/Reserva/:id', getReserva);
routes.post('/Reserva', saveReserva);
routes.put('/Reserva/:id', updateReserva)
routes.delete('/Reserva/:id', deleteReserva)

routes.get('/funcionario', getFuncionarios);
routes.get('/funcionario/:id', getFuncionario);
routes.post('/funcionario', saveFuncionario);
routes.put('/funcionario/:id', updateFuncionario)
routes.delete('/funcionario/:id', deleteFuncionario)


routes.get('/Clientes', getClientes);
routes.get('/Cliente', getCliente);
routes.post('/Cliente', saveCliente);
routes.put('/Cliente/:id', updateCliente)
routes.delete('/Cliente/:id', deleteCliente)


export default routes
