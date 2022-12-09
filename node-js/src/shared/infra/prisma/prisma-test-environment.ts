import type {
  EnvironmentContext,
  JestEnvironmentConfig,
} from '@jest/environment';
import dotenv from 'dotenv';
import fs from 'fs';
import NodeEnvironment from 'jest-environment-node';
import { exec } from 'node:child_process';
import crypto from 'node:crypto';
import util from 'node:util';
import path from 'path';

dotenv.config({ path: '.env.testing' });

const execSync = util.promisify(exec);

const prismaBinary = './node_modules/.bin/prisma';

export default class PrismaTestEnvironment extends NodeEnvironment {
  private schema: string;
  private connectionString: string;
  private prismaLocation: string;

  constructor(config: JestEnvironmentConfig, _context?: EnvironmentContext) {
    super(config, _context);

    this.schema = `test_${crypto.randomUUID()}.db`;
    this.connectionString = `file:./${this.schema}`;
    this.prismaLocation = '--schema=./src/shared/infra/prisma/schema.prisma';
  }

  async setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    await execSync(`${prismaBinary} migrate deploy ${this.prismaLocation}`);

    return super.setup();
  }

  async teardown() {
    fs.unlinkSync(path.join(__dirname, '..', 'prisma', this.schema));
  }
}
