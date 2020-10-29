import 'dotenv/config'

import express from 'express'
import apiRoutes from './api/routes'
import { validateConnection } from './config/database'

;(async () => {
  const app = express()

  app.use('/api/v1', apiRoutes)

  const users = await validateConnection().catch((err) => console.log(err))
  console.log(users)

  app.listen(process.env.PORT, () =>
    console.log(`Running server on port ${process.env.PORT}`)
  )
})()
