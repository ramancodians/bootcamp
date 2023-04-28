To migrate this Schema
`npx prisma migrate dev --name init`

To generate the client SDK for Prisma
`npx prisma generate`

To start Prisma Studio
`npx prisma studio`

To push to Planet Scale
``


# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

PlanetScale
Staging Env: code.india.channel@gmail.com (Gmail)
Prod: ramancodians (Github)


prod .env
PORT=3001
DATABASE_URL='mysql://g5993iag0zl1tb8ay3og:pscale_pw_7kPhpIsmzHCBNMYLG2F4zzEq5jZeQz8CjEoGhtyTiBd@ap-south.connect.psdb.cloud/ssda-prod?sslaccept=strict'
SECRET="ssda-prod-secure-code"

staging .env

Username:	5w8v21sj0t9njoopbte8
Password:	pscale_pw_Bc4CKQc4PcsB82sx1qTXk1vLCnfKGsCbXpZ7aBjmZuo

DATABASE_URL='mysql://5w8v21sj0t9njoopbte8:pscale_pw_Bc4CKQc4PcsB82sx1qTXk1vLCnfKGsCbXpZ7aBjmZuo@ap-south.connect.psdb.cloud/ssda-staging?sslaccept=strict'
DATABASE_URL_SHADOW=""

PORT=3001
DATABASE_URL='mysql://7ccngeyogsi396302apv:pscale_pw_STiRCFSKj4vZXNjQof8qVgm3jlfopamoru6eRPtuMcB@ap-south.connect.psdb.cloud/ssda-prod?sslaccept=strict'
SECRET="ssda-prod-secure-code"