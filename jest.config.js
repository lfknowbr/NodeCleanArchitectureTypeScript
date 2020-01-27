
module.exports = {
  roots: ['<rootFir>/src'],
  collectionCoverageFrom: ['<rootFir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
