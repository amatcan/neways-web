# CLAUDE.md — neways-web

This file provides guidance for AI assistants (Claude Code and similar) working in this repository. Keep it up to date as the project evolves.

---

## Project Overview

**Repository:** `amatcan/neways-web`
**Status:** Early stage — foundational scaffolding only.

The project name suggests a web application for "Neways". As the codebase grows, update this section with:
- Purpose and key user-facing features
- Tech stack (framework, database, hosting, etc.)
- Links to design docs, API specs, or external services

---

## Repository Structure

```
neways-web/
├── .claude/
│   ├── settings.json          # Claude Code configuration (hooks, permissions)
│   └── hooks/
│       └── session-start.sh   # Auto-installs dependencies on session start
└── CLAUDE.md                  # This file
```

As the project grows, document new top-level directories here (e.g., `src/`, `tests/`, `docs/`, `scripts/`).

---

## Claude Code Configuration

### SessionStart Hook (`.claude/hooks/session-start.sh`)

Runs automatically at the beginning of every remote Claude Code on the web session. It:

1. Detects if the environment is remote (`CLAUDE_CODE_REMOTE=true`)
2. Installs Node.js dependencies if `package.json` is present (`npm install`)
3. Installs Python dependencies if `requirements.txt` is present (`pip install -r requirements.txt`)
4. Installs Python project if `pyproject.toml` is present (`pip install -e .`)

This means AI assistants can assume dependencies are installed at the start of a remote session. When running locally, the hook is a no-op.

### Settings (`.claude/settings.json`)

Defines the SessionStart hook command. Modify this file to add additional hooks or Claude Code permissions as the project requires.

---

## Development Workflow

### Branching Strategy

- `master` — stable, deployable code
- Feature/fix branches: use descriptive names (e.g., `feat/user-auth`, `fix/login-redirect`)
- Claude-initiated branches: follow the pattern `claude/<task-slug>-<session-id>`

### Branch Rules

- **Never push directly to `master`** without a reviewed pull request.
- AI assistants must push to their designated `claude/` branch and open a PR.

### Git Commit Style

Write commit messages in the imperative mood with a short subject line (≤72 chars):

```
Add user authentication with JWT

- Implement login/logout endpoints
- Add token refresh logic
- Include session expiry handling
```

Include the Claude session URL as a trailer when commits are AI-generated:

```
https://claude.ai/code/session_<id>
```

### Pull Requests

- Title: concise, describes the change (≤70 chars)
- Body: summary bullets + test plan checklist
- Link related issues

---

## Dependency Installation

The project will support one or more of the following stacks (update this section when the stack is decided):

| File | Runtime | Install command |
|---|---|---|
| `package.json` | Node.js | `npm install` |
| `requirements.txt` | Python | `pip install -r requirements.txt` |
| `pyproject.toml` | Python | `pip install -e .` |

The SessionStart hook handles these automatically in remote sessions.

---

## Testing

_(Update this section once a test framework is introduced.)_

Document here:
- Test runner and command (e.g., `npm test`, `pytest`)
- Where tests live (e.g., `tests/`, `__tests__/`, `*.test.ts`)
- How to run a single test file or test case
- Coverage requirements or CI gates

---

## Linting & Formatting

_(Update this section once linters are configured.)_

Document here:
- Linter and formatter (e.g., ESLint + Prettier, Ruff, Black)
- Commands to run them (e.g., `npm run lint`, `ruff check .`)
- Whether auto-fix is safe to run (`npm run lint --fix`)
- Any pre-commit hooks (e.g., Husky, pre-commit)

---

## Environment Variables

_(Update this section as `.env` requirements are established.)_

- Never commit `.env` files or secrets to the repository.
- Provide a `.env.example` with all required keys (no values).
- Document each variable's purpose here.

---

## Key Conventions for AI Assistants

1. **Read before editing.** Always read a file before modifying it.
2. **Minimal changes.** Only change what is necessary to complete the task. Do not refactor surrounding code unless asked.
3. **No new files without reason.** Prefer editing existing files. Never create documentation files unless explicitly requested.
4. **No secrets.** Never hardcode API keys, passwords, or tokens. Use environment variables.
5. **No over-engineering.** Avoid abstractions, feature flags, or backwards-compatibility shims for things that don't exist yet.
6. **Update this file.** Whenever you add a major directory, tool, or workflow, update the relevant section in CLAUDE.md.
7. **Follow the branching strategy.** Always work on the designated `claude/` branch and never push to `master` directly.
8. **Commit clearly.** Write descriptive commit messages. Append the session URL for traceability.

---

## Getting Help

- Claude Code docs: `/help` in the CLI
- Report issues: https://github.com/anthropics/claude-code/issues
