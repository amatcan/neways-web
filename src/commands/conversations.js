import { loadConversations, saveConversations } from '../store.js';

function parseArgs(args) {
  const flags = {};
  const positional = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      flags[key] = true;
    } else {
      positional.push(arg);
    }
  }

  return { flags, positional };
}

function formatDate(isoString) {
  return new Date(isoString).toLocaleString();
}

function printConversation(conv) {
  const archivedBadge = conv.archived ? ' [archived]' : '';
  console.log(`  ${conv.id}  ${conv.title}${archivedBadge}`);
  console.log(`         Created: ${formatDate(conv.createdAt)}`);
  console.log(`         Updated: ${formatDate(conv.updatedAt)}`);
  console.log();
}

export function conversationsCommand(args) {
  const { flags, positional } = parseArgs(args);

  const subcommand = positional[0];

  if (subcommand === 'list' || subcommand === undefined) {
    const conversations = loadConversations();
    const showArchived = flags['archived'];

    const filtered = showArchived
      ? conversations.filter((c) => c.archived)
      : conversations.filter((c) => !c.archived);

    if (filtered.length === 0) {
      if (showArchived) {
        console.log('No archived conversations found.');
      } else {
        console.log('No conversations found.');
      }
      return;
    }

    const label = showArchived ? 'Archived conversations' : 'Conversations';
    console.log(`${label} (${filtered.length}):\n`);
    for (const conv of filtered) {
      printConversation(conv);
    }
    return;
  }

  if (subcommand === 'archive') {
    const id = positional[1];
    if (!id) {
      console.error('Error: conversation ID required');
      console.error('Usage: conversations archive <id>');
      process.exit(1);
    }

    const conversations = loadConversations();
    const conv = conversations.find((c) => c.id === id);
    if (!conv) {
      console.error(`Error: conversation '${id}' not found`);
      process.exit(1);
    }

    conv.archived = true;
    conv.updatedAt = new Date().toISOString();
    saveConversations(conversations);
    console.log(`Conversation '${id}' archived.`);
    return;
  }

  if (subcommand === 'unarchive') {
    const id = positional[1];
    if (!id) {
      console.error('Error: conversation ID required');
      console.error('Usage: conversations unarchive <id>');
      process.exit(1);
    }

    const conversations = loadConversations();
    const conv = conversations.find((c) => c.id === id);
    if (!conv) {
      console.error(`Error: conversation '${id}' not found`);
      process.exit(1);
    }

    conv.archived = false;
    conv.updatedAt = new Date().toISOString();
    saveConversations(conversations);
    console.log(`Conversation '${id}' unarchived.`);
    return;
  }

  console.error(`Unknown subcommand: ${subcommand}`);
  console.error('Usage: conversations [list] [--archived]');
  console.error('       conversations archive <id>');
  console.error('       conversations unarchive <id>');
  process.exit(1);
}
