import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class FixIssuesLongitude1655345239843 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'issues',
      new TableColumn({
        name: 'longitide',
        type: 'number',
      }),
    );

    await queryRunner.addColumn(
      'issues',
      new TableColumn({
        name: 'longitude',
        type: 'number',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'issues',
      new TableColumn({
        name: 'longitude',
        type: 'number',
      }),
    );

    await queryRunner.dropColumn(
      'issues',
      new TableColumn({
        name: 'longitide',
        type: 'number',
      }),
    );
  }
}
