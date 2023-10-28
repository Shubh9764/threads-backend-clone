import express from 'express'
import {ApolloServer} from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
import bodyParser from 'body-parser'
const app = express()

const PORT = Number(process.env.PORT) || 8000

async function init() {
    
const gqlServer = new ApolloServer({
    typeDefs:`
       type Query {
           hello: String
           say(name:String!):String
       }
    `,
    resolvers:{
        Query : {
            hello : () => "Hello from GraphQL",
            say : (_,{name}:{name:string}) => `hello ${name}`
        }
    }
})

await gqlServer.start()

app.use(bodyParser.json())
app.use("/graphql",expressMiddleware(gqlServer))

app.get("/",(req,res) => {
    res.json({message:"Server is up"})
})


app.listen(PORT,()=>{
    console.log(`server started at port: ${PORT}`)
})
}


init()