# Playwright Training

Welcome! This is our team's automation project. Follow the steps below and you will run a real automated test on your own machine.

## What you need first

- Node.js (LTS) installed — check with `node -v`
- Git installed — check with `git --version`
- Visual Studio Code

You did all of this in the pre-work. If a check fails, ask in the team channel.

## Setup (one time)

Open the VS Code terminal (Ctrl + `) and run these commands one at a time:

```
git clone 
cd playwrightTraining
npm install
npx playwright install chromium
```

What each one does:

1. `git clone` downloads this project to your machine
2. `cd` moves your terminal into the project folder
3. `npm install` downloads the tools the project needs (including Playwright)
4. `npx playwright install chromium` downloads the browser the tests will drive

## Run the tests

```
npx playwright test
```

You should see `2 passed`. Now watch it happen for real:

```
npx playwright test --headed
```

A browser opens and runs the test in front of you.

## See the report

```
npx playwright show-report
```

A web page opens showing every test, how long it took, and what it did.

## Where things live

```
playwrightTraining/
├── tests/                 ← test files live here (start with example.spec.ts)
├── playwright.config.ts   ← settings: which site, which browser, timeouts
├── package.json           ← the project's shopping list of tools
├── team.md                ← you add your name here in week 4 (Git week)
└── .github/workflows/     ← the CI pipeline (covered in week 10)
```

## Stuck?

Post in the team channel with a screenshot of your terminal. Someone has hit the same thing before.
