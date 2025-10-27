# 🚀 my-website (imcasero.dev)

Personal portfolio built with **Svelte 5**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

## ✨ Features

- 🎨 **Svelte 5 with Runes** - Using the latest Svelte 5 syntax (`$state`, `$derived`)
- 🌓 **Dark/Light Theme** - Persistent theme system with system preference support
- 💻 **Interactive Terminal View** - Functional terminal with custom commands
- 📱 **Responsive Design** - Adapted to all devices
- ⚡ **Vite** - Ultra-fast build tool
- 🎨 **Tailwind CSS v4** - Custom theme system in OKLCH color space
- 🧪 **Complete Testing** - Vitest with 119 tests and high coverage

## 🛠️ Tech Stack

- [Svelte 5](https://svelte.dev/) - Reactive framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- [Vitest](https://vitest.dev/) - Testing framework

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview build
pnpm preview
```

## 🧪 Testing

```bash
# Run tests in watch mode
pnpm test

# Run tests with visual UI
pnpm test:ui

# Run tests once
pnpm test:run

# Generate coverage report
pnpm test:coverage
```

For more information about testing, check [TESTING.md](./TESTING.md).

### 📊 Test Coverage

- **119 tests** passing
- **~90% coverage** on stores
- **~94% coverage** on terminal logic
- **100% coverage** on virtual filesystem

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── shared/          # Reusable components
│   │   ├── StaticView/      # Static portfolio view
│   │   └── TerminalView/    # Interactive terminal view
│   ├── stores/              # State management with Svelte 5 runes
│   │   ├── theme.svelte.ts
│   │   ├── mode.svelte.ts
│   │   └── terminal.svelte.ts
│   └── terminal/            # Terminal logic
│       ├── commands.ts
│       └── filesystem.ts
├── test/
│   └── setup.ts             # Test configuration
├── App.svelte
└── main.ts
```

## 🎯 Available Commands

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Generate production build
- `pnpm preview` - Preview production build
- `pnpm check` - Run Svelte and TypeScript type checking

### Testing
- `pnpm test` - Tests in watch mode
- `pnpm test:ui` - Visual test interface
- `pnpm test:run` - Run all tests once
- `pnpm test:coverage` - Generate coverage report

## 🌟 Terminal Features

The interactive terminal includes the following commands:

- `help` or `?` - Show help
- `ls [path]` - List files and directories
- `cd <path>` - Change directory
- `pwd` - Show current directory
- `cat <file>` - Display file contents
- `sh <script.sh>` - Execute scripts
- `clear` - Clear screen
- `whoami` - User information
- `history` - Command history
- `banner` - Welcome banner

### Navigation
- `↑` / `↓` - Navigate through command history
- `cd ..` - Go up one level
- `./script.sh` - Execute scripts directly

## 🎨 Theme System

The project implements a theme system with:

- **Persistence** in localStorage
- **Synchronization** with system preferences
- **CSS Variables** in OKLCH color space
- **Separate themes** for UI and terminal

## 📄 License

This is a personal project without a specific license.

## 👤 Author

**Diego Casero** (@imcasero)

- Portfolio: [imcasero.dev](https://imcasero.dev)
- GitHub: [@imcasero](https://github.com/imcasero)

---

⭐ If you like this project, feel free to give it a star!
