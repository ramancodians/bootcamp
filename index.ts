import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import path from "path"
import * as dotenv from 'dotenv'
import BackendAPI from "./backendRoutes"

dotenv.config()
const PORT = process.env.PORT || 3000

const main = async () => {
  try {
    const app = express()
    app.use(cors())
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use("/api", BackendAPI)
    // parse application/json
    if (process.env.NODE_ENV !== "development") {
      const clientPath = express.static(path.join(__dirname, "..", "client", "build"))
      app.use(clientPath)
    }
    app.use("/*", (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'), function(err) {
        if (err) {
          res.status(500).send(err)
        }
      })
    })

    app.listen(PORT, async () => {
      console.log(`Running Server in ${process.env.NODE_ENV} mode`);
      console.log(`Lab's backend is up and running http://localhost:${PORT}`);
    })
  } catch (error) {
    console.error(error);
    console.log(`Error Starting up the server http://localhost:${PORT}`);
  }
}

main()

