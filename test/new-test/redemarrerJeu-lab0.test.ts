import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('test', 'routes', 'jeuRouter-redemarrerJeu.test.ts');
  content = readFileSync(filename, 'utf-8');
});

describe('redemarrerJeu.test.ts', () => {
  it("should contain GET /api/v1/jeu/redemarrerJeu", async () => {
    expect(content).toInclude("GET /api/v1/jeu/redemarrerJeu");
  });

  it("should contain Call responds with bad request when players do not exist", async () => {
    expect(content).toInclude("Call responds with bad request when players do not exist");
  });
});