# Coding Challenge - Takeshi Yukio
> Next.js, Styled Components, Material-UI, Redux, Typescript

### Uses
 - [NextJS](https://github.com/zeit/next.js)
 - [React](https://github.com/facebook/react)
 - [Typescript](https://github.com/Microsoft/TypeScript)

### Using cdn
 - material-icons font
 - roboto-font

## Installation

```sh
git clone https://github.com/devstar107/Next.js-Redux.git
```
## Setup

set SEO variables

> src/constants/env.ts

```typescript
// for meta tag <og & twitter>
export const SITE_NAME = ''
export const SITE_TITLE = ''
export const SITE_DESCRIPTION = ''
export const SITE_IMAGE = ''
```

---

## Environment Install Instructions

### Development

#### Installation

```
yarn
yarn dev
```

### Production

```
yarn
yarn build # create .next directory
yarn start # start server
```

# Docker
> Assumes [traefik](https://traefik.io) is running
* run `docker-compose up -d --build`

Check out the other docker-compose files for more uses and the `Dockerfile` for the image 
that will be built to run the app
 
## License

UNLICENSE
