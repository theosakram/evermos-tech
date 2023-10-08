# Evermos Tech

Technical test for evermos

## Running on your local

- Clone this project
- Rename env.local.example to env.local
- Change the env value to this

```bash
BASE_URL=https://fakestoreapi.com
BASE_SOURCE=/api-evermos
```

- Install & Run

```bash
yarn
yarn dev
```

## Live Demo

Live demo can be found [here](https://evermos-tech.vercel.app/)

## Login Account

You can use this account

```bash
username: johnd
password: m38rmF$
```

Or you can visit [this website](https://fakestoreapi.com/docs) and get other user credentials to use

## Testing

The test files are inside the relevant components.

```bash
SomeComponent           # <- folder
    - index.tsx         # <- the component
    - index.spec.tsx    # <- the test
```

Run the tests with

```bash
yarn test
```
