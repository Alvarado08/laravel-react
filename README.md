# Laravel React Project

A modern web application built with Laravel and React, featuring a robust frontend using TypeScript, Tailwind CSS, and Shadcn components.

## Tech Stack

- **Backend**: Laravel (PHP)
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn
- **Build Tool**: Vite 6
- **Development Tools**: ESLint, Prettier
- **Testing**: Pest

## Prerequisites

- PHP 8.1 or higher
- Node.js 18 or higher
- Composer
- npm

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd [project-name]
```

2.Install PHP dependencies:

```bash
composer install
```

3.Install Node.js dependencies:

```bash
npm install
```

4.Create and configure your environment file:

```bash
cp .env.example .env
php artisan key:generate
```

5.Set up your database in the `.env` file and run migrations:

```bash
php artisan migrate
```

## Development

### Note

*Development setup will depend on your local enviornment.*

Start the development server:

```bash
# Start Laravel development server
php artisan serve

# In a separate terminal, start Vite development server
npm run dev
```

The application will be available at `http://localhost:8000`

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the application for production
- `npm run build:ssr` - Build the application with SSR support
- `npm run format` - Format code using Prettier
- `npm run lint` - Run ESLint to check and fix code issues
- `npm run types` - Check TypeScript types
