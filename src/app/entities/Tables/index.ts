import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('tables_restaurant')
export class Tables {
    @PrimaryGeneratedColumn()
    table_id: number

    @Column()
    number: number

    @Column()
    available: boolean

    @Column()
    number_seats_available_table: number
}
