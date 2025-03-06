import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: "firebase_uid", unique: true })
  firebaseUID: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true, name: "first_name" })
  firstName: string;

  @Column({ nullable: true, name: "last_name" })
  lastName: string;

  @CreateDateColumn({ name: "created_at", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
