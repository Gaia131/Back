import { getRepository } from 'typeorm';
import { Reserva } from '../entity/Reserva';
import { Request, Response } from 'express';

export const getReservas = async (request: Request, response: Response) => {
    const reserva = await getRepository(Reserva).find();
    return response.json(reserva);
}

export const getReserva = async (request: Request, response: Response) => {
    const { id } = request.params
    const reserva = await getRepository(Reserva).findOne(id)
    return reserva == undefined ? response.status(404).json('Usuário não encontrado.') : response.json(reserva);
};

export const saveReserva = async (request: Request, response: Response) => {
    const reserva = await getRepository(Reserva).save(request.body);
    return response.status(201).json(reserva);
}

export const updateReserva = async (request: Request, response: Response) => {
    const { id } = request.params
    const reserva = await getRepository(Reserva).update(id, request.body)

    if (reserva.affected == 1) {
        const reservaUpdated = await getRepository(Reserva).findOne(id)
        return response.json(reservaUpdated);
    }
    else {
        return response.status(404).json({ message: 'Reserva não encontrada!' })
    }
};

export const deleteReserva = async (request: Request, response: Response) => {
    const { id } = request.params
    const reserva = await getRepository(Reserva).delete(id)

    if (reserva.affected == 1) {
        return response.status(200).json({ message: "Reserva excluída com sucesso!" });
    }
    else {
        return response.status(404).json({ message: 'Reserva não encontrada!' })
    }
};