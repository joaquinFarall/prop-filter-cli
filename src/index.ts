#!/usr/bin/env node

import { Command } from 'commander';
import registerCommands from './commands';
import logger from './utils/logger';
import { mongoConnection } from './config/databases';

const program = new Command();
program
  .name('prop-filter')
  .description('CLI to filter properties data')
  .version('0.0.1');

registerCommands(program);

program.configureOutput({
  writeErr: (err: string) => logger.error(err.trim()),
});

(async () => {
  try {
    await program.parseAsync(process.argv);
    await mongoConnection.close();
    process.exit(0);
  } catch (error: any) {
    logger.error(error);
    process.exit(1);
  }
})();


