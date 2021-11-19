import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import {Reserva} from "./Reserva";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    idCliente: string;

    /*@Column()
    idReserva: number;
    
    @JoinColumn({name: "idReserva"})
    @ManyToOne(() => Reserva)
    reserva: Reserva;*/

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    telefone: string;
    
    @Column()
    email: string;
    
    @Column()
    senha: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
