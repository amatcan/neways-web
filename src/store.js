import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

const DATA_DIR = join(homedir(), '.neways');
const CONVERSATIONS_FILE = join(DATA_DIR, 'conversations.json');

function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function loadConversations() {
  if (!existsSync(CONVERSATIONS_FILE)) {
    return [];
  }
  try {
    return JSON.parse(readFileSync(CONVERSATIONS_FILE, 'utf8'));
  } catch {
    return [];
  }
}

export function saveConversations(conversations) {
  ensureDataDir();
  writeFileSync(CONVERSATIONS_FILE, JSON.stringify(conversations, null, 2));
}
