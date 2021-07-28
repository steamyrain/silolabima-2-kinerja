// singleton for loading environment variables
// issues: https://stackoverflow.com/questions/30174078/how-to-define-singleton-in-typescript
import dotenv from 'dotenv-safe'
import path from 'path'

let DB_DATABASE: string;
let DB_PASSWORD: string;
let DB_USERNAME: string;
let DB_PORT: string;

const NODE_ENV = (node_env: string) => {
    switch(node_env) {
        case 'production':
            return path.join(__dirname,'../../.prod.env')
        case 'development':
            return path.join(__dirname,'../../.dev.env')
        default: 
            return path.join(__dirname,'../../.prod.env')
    }
}

try {
    dotenv.config(
        {
            path: NODE_ENV(process.env.NODE_ENV!) 
        }
    )
    DB_DATABASE = process.env.DB_DATABASE!
    DB_PASSWORD = process.env.DB_PASSWORD!
    DB_USERNAME = process.env.DB_USERNAME!
    DB_PORT = process.env.DB_PORT!
} catch(e){
    console.error(e)
    process.exit(1)
}

export {DB_DATABASE,DB_USERNAME,DB_PASSWORD,DB_PORT}
