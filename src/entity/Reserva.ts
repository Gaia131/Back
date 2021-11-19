import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";

@Entity()
export class Reserva {

    @PrimaryGeneratedColumn()
    idReserva: string;

    @Column()
    tipo_quarto: string;
 
    @Column("decimal", {scale: 2})
    valor_pago: number;

    @Column()
    checkin: string;

    @Column()
    checkout: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
