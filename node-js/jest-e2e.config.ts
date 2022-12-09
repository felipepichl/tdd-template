import jestConfig from './jest.config';

export default {
  ...jestConfig,
  testEnvironment: './src/shared/infra/prisma/prisma-test-environment.ts',
  testRegex: '.e2e-spec.ts$',
};
