
import dotenv from 'dotenv'
dotenv.config()

// TODO basic URL for postgres
export default {
  postgresUrl: process.env.POSTGRES_URL || '',
  port: process.env.PORT || 3000,
  baseUrl: process.env.BASE_URL || 'localhost:3000/api/employees/'
}
