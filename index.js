const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Serveur à l'écoute ${port}`);
})

//parse request data content type application/x-www
app.use(bodyParser.urlencoded({extended: false}));

//parse request data type application/json
app.use(bodyParser.json());

//middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Homepage here.");
})

//import des route
const usersRoutes = require('./src/routes/users.route');

const flatsRoutes = require('./src/routes/flats.route');

const districtsRoutes = require('./src/routes/districts.route');

const requestsRoutes = require('./src/routes/requests.route');

//je récupère mes route
app.use('/utilisateurs', usersRoutes);

app.use('/appartements', flatsRoutes);

app.use('/arrondissement', districtsRoutes);

app.use('/demandes', requestsRoutes);
