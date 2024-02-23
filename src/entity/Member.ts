import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Member {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    birthDate: Date

}
