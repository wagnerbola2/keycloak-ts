import Fastify from "fastify"
import cors from "@fastify/cors"

const app = Fastify()


app.register(cors)


app.get('/', async () => {
  const ret = {
    status: 200,
    message: 'suscess'
  }
  return ret
})

app.listen({
  port: 4545
}).then(() => {
  console.log('HTPP Server running, listem port 4545')
})