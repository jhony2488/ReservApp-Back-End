import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('incentives')
export class Incentives {
    @PrimaryGeneratedColumn({ unsigned: true })
    incentive_id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    type: string
}
