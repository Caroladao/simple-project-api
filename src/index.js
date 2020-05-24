const express = require( 'express' );
const routes  = require( './routes' )

const app = express()

app.use( express.json() )
app.use( routes )

function logRequests(req, res, next) {
  console.count("Número de requisições");
  return next();
}
app.use(logRequests);

app.listen( 3333 )