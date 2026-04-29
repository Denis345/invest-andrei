import * as migration_20260429_080602 from './20260429_080602';

export const migrations = [
  {
    up: migration_20260429_080602.up,
    down: migration_20260429_080602.down,
    name: '20260429_080602'
  },
];
