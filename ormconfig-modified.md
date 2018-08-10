[
{
"name": "production",
"type": "postgres",
"synchronize": true,
"dropSchema": true,
"logging": true
},
{
"name": "development",
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "admin", // my_postgres_password
"database": "rubackgen",
"synchronize": true,
"dropSchema": true,
"logging": true,
"entities": ["src/models/**/*.ts"],
"migrations": ["src/migration/**/*.ts"],
"subscribers": ["src/subscriber/**/*.ts"],
"cli": {
"entitiesDir": "src/models",
"migrationsDir": "src/migration",
"subscribersDir": "src/subscriber"
}
},
{
"name": "test",
"type": "postgres",
"host": "localhost",
"port": 5432,
"username": "postgres",
"password": "admin",
"database": "rubackgen-test",
"synchronize": true,
"dropSchema": true,
"logging": false,
"entities": ["src/models/**/*.ts"],
"migrations": ["src/migration/**/*.ts"],
"subscribers": ["src/subscriber/**/*.ts"],
"cli": {
"entitiesDir": "src/models",
"migrationsDir": "src/migration",
"subscribersDir": "src/subscriber"
}
}
]
