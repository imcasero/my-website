# 🧪 Testing Guide

Complete testing strategy and configuration for this project.

## 📋 Table of Contents

- [Testing Stack](#testing-stack)
- [Test Structure](#test-structure)
- [Available Commands](#available-commands)
- [Running Tests](#running-tests)
- [Code Coverage](#code-coverage)
- [Best Practices](#best-practices)
- [CI/CD](#cicd)

---

## 🛠️ Testing Stack

- **[Vitest](https://vitest.dev/)** - Fast testing framework for Vite
- **[@testing-library/svelte](https://testing-library.com/docs/svelte-testing-library/intro/)** - Svelte 5 component testing
- **[@testing-library/user-event](https://testing-library.com/docs/user-event/intro)** - User interaction simulation
- **[@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)** - Additional DOM matchers
- **[happy-dom](https://github.com/capricorn86/happy-dom)** - Lightweight DOM implementation
- **[@vitest/ui](https://vitest.dev/guide/ui.html)** - Visual interface for tests
- **[@vitest/coverage-v8](https://vitest.dev/guide/coverage.html)** - Code coverage tool

---

## 📁 Test Structure

```
src/
├── lib/
│   ├── stores/
│   │   ├── theme.svelte.ts
│   │   ├── theme.svelte.test.ts          ✅ Store tests
│   │   ├── mode.svelte.ts
│   │   ├── mode.svelte.test.ts           ✅ Store tests
│   │   ├── terminal.svelte.ts
│   │   └── terminal.svelte.test.ts       ✅ Store tests
│   │
│   └── terminal/
│       ├── commands.ts
│       ├── commands.test.ts              ✅ Logic tests
│       ├── filesystem.ts
│       └── filesystem.test.ts            ✅ Logic tests
│
├── test/
│   └── setup.ts                          ⚙️ Global configuration
│
├── vitest.config.ts                      ⚙️ Vitest configuration
└── package.json                          📦 Testing scripts
```

### Naming Convention

- Test files must have `.test.ts` or `.spec.ts` extension
- Located next to the file they're testing
- Example: `theme.svelte.ts` → `theme.svelte.test.ts`

---

## ⚡ Available Commands

```bash
pnpm test              # Watch mode
pnpm test:ui           # Visual UI
pnpm test:run          # Run once (CI/CD)
pnpm test:coverage     # With coverage report
pnpm test:watch        # Watch mode (alias)
```

---

## 🚀 Running Tests

### Watch Mode (Development)

Recommended during development. Tests re-run automatically on changes:

```bash
pnpm test
```

### UI Mode (Visual Interface)

Interactive web interface to visualize and run tests:

```bash
pnpm test:ui
```

Then open http://localhost:51204/__vitest__/ in your browser.

### Run Mode (CI/CD)

Execute all tests once and exit:

```bash
pnpm test:run
```

### Run Specific Tests

```bash
pnpm test stores              # Only store tests
pnpm test terminal            # Only terminal tests
pnpm test theme.svelte.test.ts  # Specific file
```

---

## 📊 Code Coverage

### Generate Coverage Report

```bash
pnpm test:coverage
```

Generates reports in multiple formats:

- **Terminal**: Summary in console
- **HTML**: Visual report in `coverage/index.html`
- **JSON**: Structured data in `coverage/coverage.json`
- **LCOV**: Standard format for tools like Codecov

### View HTML Report

```bash
pnpm test:coverage
open coverage/index.html        # macOS
xdg-open coverage/index.html    # Linux
start coverage/index.html       # Windows
```

### Coverage Thresholds

Minimum thresholds configured in `vitest.config.ts`:

```typescript
coverage: {
  thresholds: {
    lines: 60,
    functions: 60,
    branches: 55,
    statements: 60,
  }
}
```

Build fails if coverage is below these values.

---

## ✅ Best Practices

### 1. Test Structure

Use AAA pattern (Arrange, Act, Assert):

```typescript
import { describe, it, expect, beforeEach } from 'vitest';

describe('Feature Name', () => {
  beforeEach(() => {
    terminal.reset();
  });

  it('should do something specific', () => {
    const input = 'test';
    const result = someFunction(input);
    expect(result).toBe('expected');
  });
});
```

### 2. Store Tests (Svelte 5 Runes)

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { theme } from './theme.svelte';

describe('Theme Store', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with default value', () => {
    expect(theme.current).toBe('dark');
  });

  it('should update theme', () => {
    theme.set('light');
    expect(theme.current).toBe('light');
  });
});
```

### 3. Pure Logic Tests

```typescript
import { describe, it, expect } from 'vitest';
import { resolvePath } from './filesystem';

describe('resolvePath', () => {
  it('should resolve relative paths', () => {
    expect(resolvePath('~', 'projects')).toBe('~/projects');
  });

  it('should handle ..', () => {
    expect(resolvePath('~/projects', '..')).toBe('~');
  });
});
```

### 4. Descriptive Tests

✅ **Good**:
```typescript
it('should return error when command does not exist', () => {
  const result = executeCommand('fakecmd');
  expect(result.type).toBe('error');
});
```

❌ **Bad**:
```typescript
it('test 1', () => {
  const result = executeCommand('fakecmd');
  expect(result.type).toBe('error');
});
```

### 5. Group Related Tests

```typescript
describe('Terminal Commands', () => {
  describe('ls command', () => {
    it('should list files in current directory', () => {});
    it('should show error for non-existent directories', () => {});
  });

  describe('cd command', () => {
    it('should change to specified directory', () => {});
    it('should go up one level with ..', () => {});
  });
});
```

### 6. Clean State Between Tests

```typescript
beforeEach(() => {
  terminal.reset();
  localStorage.clear();
  vi.clearAllMocks();
});
```

---

## 🔄 CI/CD

### GitHub Actions

CI/CD workflow in `.github/workflows/test.yml`:

1. ✅ Runs tests on Node.js 20.x and 22.x
2. ✅ Type checking with `pnpm check`
3. ✅ Executes all tests
4. ✅ Generates coverage report
5. ✅ Uploads coverage to Codecov (optional)
6. ✅ Archives coverage reports as artifacts

### Run Locally

Simulate CI pipeline locally:

```bash
pnpm check           # Type checking
pnpm test:run        # Tests
pnpm test:coverage   # Coverage
```

---

## 📈 Current Coverage

### ✅ Stores (~89% coverage)
- `theme.svelte.ts` - Theme state (light/dark)
- `mode.svelte.ts` - Mode state (static/terminal)
- `terminal.svelte.ts` - Terminal state

### ✅ Terminal Logic (~94% coverage)
- `filesystem.ts` - Virtual filesystem
- `commands.ts` - Terminal commands

---

## 🎯 Next Steps

Future tests to consider:

1. **Integration tests** for complete terminal flow
2. **E2E tests** with Playwright
3. **Accessibility tests** with `@axe-core/playwright`
4. **Performance tests** with Vitest bench
5. **Snapshot tests** for visual components

---

## 🐛 Troubleshooting

### Tests fail with localStorage error

Ensure `src/test/setup.ts` is properly configured with localStorage mock.

### Svelte component tests don't work

Verify `vitest.config.ts` has Svelte plugin configured:

```typescript
plugins: [svelte({ hot: !process.env.VITEST })]
```

### Error "Cannot find module"

Verify path aliases are configured in `vitest.config.ts`:

```typescript
resolve: {
  alias: {
    $lib: path.resolve(__dirname, './src/lib'),
  },
}
```

---

## 📚 Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Docs](https://testing-library.com/)
- [Svelte Testing Best Practices](https://testing-library.com/docs/svelte-testing-library/intro/)
- [Vitest UI](https://vitest.dev/guide/ui.html)

---

**Last updated**: October 2025
**Maintained by**: Diego Casero (@imcasero)
