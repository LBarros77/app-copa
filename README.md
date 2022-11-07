# <nlw/>Copa

#### The World Cup app contains sweepstakes pull functionality for people to get the result right

## Feactures
- Authentification with google (Login/Logout)
- To create a new pull
- To search pull
- To views pull
- To views playies
- To insert you palpities
- Share the code genereted


## Deplay

#### server
```
npx prisma migrate dev
npm run dev
```
#### web
```
npm start
```
#### mobile
```
npx expo start
```

## Development
Clone the directory and install dependencies:
```
git clone ...

cd server
npm install
```

Either use a local database or start the provided development database:
```
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

Create server/.env based on server/.env.example and edit DATABASE_URL if needed, then initialize the database:
```
npx prisma
```

## Tech stack
- React, React Native, Expo, Next, Axios and React-dom
- NodeJS, Typescript
- Prisma
