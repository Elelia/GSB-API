const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Serveur à l'écoute ${port}`);
})

app.get('/', (req, res) => {
    console.log("Youhou");
    res.send("Homepage here.");
})

//import de users route
const usersRoutes = require('./src/routes/users.route');

//on créer la route
//et je récupère tout ce que j'ai sur mes utilisateurs en gros
app.use('/utilisateurs', usersRoutes);


