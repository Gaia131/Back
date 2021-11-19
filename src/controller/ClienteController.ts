import { getRepository } from 'typeorm';
import { Cliente } from '../entity/Cliente';
import { Request, Response } from 'express';

export const getClientes = async (request: Request, response: Response) => {
    const cliente = await getRepository(Cliente).find();
    return response.json(cliente);
}

export const getCliente = async (request: Request, response: Response) => {
    const {email, senha} = request.body
    const cliente = await getRepository(Cliente).findOne(email, senha);
    return cliente == undefined ? response.status(404).json('Cliente não localizado.') : response.json(cliente);
};

export const saveCliente = async (request: Request, response: Response) => {
    const cliente = await getRepository(Cliente).save(request.body);
    return response.status(201).json(cliente);
}

export const updateCliente = async (request: Request, response: Response) => {
    const { id } = request.params
    const cliente = await getRepository(Cliente).update(id, request.body)
    const newCliente= await getRepository(Cliente).findOne(id)

    return cliente.affected == 1 ? response.status(200).json(newCliente) : response.status(404).json('Cliente não localizado.')

};

export const deleteCliente = async (request: Request, response: Response) => {
    const { id } = request.params
    const hospede = await getRepository(Cliente).delete(id)

    return hospede.affected == 1 ? response.status(204).json('Hospede excluído com sucesso.') : response.status(404).json('Hospede não localizado.')

};