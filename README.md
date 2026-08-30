# Smartarse

This adds just a little more smartarse to your life.

Clock, countdown calendar, London weather, and a pointer-following Duggee
cursor. React 19 + Vite 8, date-fns 4, react-icons 5.

## Run

Needs Node >= 22.12 and yarn 1.22.22 (corepack shim in `~/.npm-global/bin`):

```bash
export PATH="$HOME/.npm-global/bin:$PATH"
yarn install
yarn start        # dev server → http://localhost:5173
```

## Commands

| Command        | What it does                        |
| :------------- | :---------------------------------- |
| `yarn build`   | production build to `dist/`         |
| `yarn preview` | serve the build → :4173             |
| `yarn test`    | vitest smoke test                   |
| `yarn lint`    | eslint                              |

## Weather key

Weather reads `VITE_OWM_KEY` from `.env` (copy `.env.example`; free key at
home.openweathermap.org). Rotate the old key — it was hardcoded in source and
is exposed in git history.
