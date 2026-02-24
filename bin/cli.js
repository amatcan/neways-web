#!/usr/bin/env node

import { conversationsCommand } from '../src/commands/conversations.js';

const [, , command, ...args] = process.argv;

if (!command || command === 'help' || command === '--help' || command === '-h') {
  console.log('Usage: neways <command> [options]');
  console.log('');
  console.log('Commands:');
  console.log('  conversations [list] [--archived]   List conversations (use --archived for archived only)');
  console.log('  conversations archive <id>           Archive a conversation');
  console.log('  conversations unarchive <id>         Unarchive a conversation');
  console.log('');
  console.log('Options:');
  console.log('  --archived    Show only archived conversations');
  process.exit(0);
}

if (command === 'conversations') {
  conversationsCommand(args);
} else {
  console.error(`Unknown command: ${command}`);
  console.error('Run "neways help" for usage.');
  process.exit(1);
}
