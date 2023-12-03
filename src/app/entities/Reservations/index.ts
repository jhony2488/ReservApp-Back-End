import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('reservations')
export class Reservation {
    @PrimaryGeneratedColumn({ unsigned: true })
    reservation_id: number

    @Column()
    date: string

    @Column()
    hour: string

    @Column()
    number_peoples: string

    @Column()
    name_contact: string

    @Column()
    contact: string

    @Column()
    active: boolean
}
