/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class reservations1693428187268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS reservations (
        reservation_id SERIAL PRIMARY KEY NOT NULL,
        date VARCHAR(255),
        hour VARCHAR(255),
        password VARCHAR(255),
        rule VARCHAR(255),
        active BOOLEAN,
        created_at TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE reservations');
  }
}
