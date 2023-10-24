# HockeyVote

A website dedicated to providing crowd-sourced answered to controversial calls in the NHL.

## Table of Contents

- [Bug Reports](#bug-reports)
- [Developing](#developing)
  - [Requirements](#requirements)
  - [Dependencies and Frameworks](#dependencies-and-frameworks)
  - [Setup and Running](#setup-andrunning)
  - [Useful Scripts](useful-scripts)
  - [Additional Commands](#additional-commands)
- [Deploying](#deploying)
- [Contributing](contributing)
- [License](#license)
- [Disclaimers](#disclaimers)

## Bug Reports

Please report bugs by opening an [issue](https://github.com/asleepysheepy/hockeyvote.ca/issues/new) on GitHub.

## Developing

### Requirements

- [NodeJS](https://nodejs.org/) 18 or later
- [Docker](https://www.docker.com/)/[Docker Compose](https://docs.docker.com/compose/)

### Dependencies and Frameworks

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) and [Tailwind UI](https://tailwindui.com/)
- [Headless UI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)
- [Prisma](https://www.prisma.io/)
- [next-international](https://next-international.vercel.app/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/)

### Setup and Running

1. Start by cloning the repo locally

```sh
git clone https://github.com/asleepysheepy/hockeyvote.ca.git hockeyvote && cd hockeyvote
```

2. Install NPM dependencies

```sh
npm install
```

3. Create `.env` file

```sh
cp .env.example .env
```

4. Start the database

```sh
docker-compose up -d
```

5. Setup the database

```sh
npx prisma migrate dev
```

6. Run the app in development mode

```sh
npm run dev
```

### Useful Scripts

- `build` - Gets the app ready for production. Generates the Prisma client, migrates the database, and creates a production build of the app
- `dev` - Runs the app in development mode
- `format` - Uses Prettier to format the codebase
- `lint` - Uses ESLint to lint the codebase, can be ran with the `--fix` option to automatically fix many issues
- `prisma:studio` - Launches Prisma Studio, a GUI for viewing and managing database data
- `start` - Starts the production build of the app
- `test` - Runs the test suite
- `test:watch` - Runs the test suite in "watch" mode, automatically rerunning the suite when code changes are saved
- `typecheck` - Checks the type safety of the codebase using typescript
- `validate` - Shortcut to run `typecheck`, `lint`, and `test` together

### Additional Commands

- `npx prisma db seed` - Seeds the database
- `npx prisma migrate dev` - Runs database migrations for development
- `npx prisma migrate reset` - Drops and recreates the database

## Deploying

The easiest way to deploy is using a platform such as [Vercel](https://vercel.com/). To get started, follow their documentation: https://vercel.com/docs/getting-started-with-vercel

## Contributing

All contributions to this project are welcome. Contributors are expected to follow the [Code of Conduct](./CODE_OF_CONDUCT.md)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/asleepysheepy/hockeyvote.ca/blob/main/LICENSE) file for details

## Disclaimers

HockeyVote is not in any way affiliated with the National Hockey League (NHL) or any of its respective teams. The NHL logo, team logos, team names, and other trademarks are the property of their respective owners. If you are the owner of a trademark that is used on this website and would like it removed, please contact us.
