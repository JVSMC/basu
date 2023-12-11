import OpenAI from 'openai';
import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

/* The code `const openai = new OpenAI();` creates a new instance of the OpenAI class, which allows you
to interact with the OpenAI API and make requests for natural language processing tasks. */
const openai = new OpenAI();
const app = express();
app.use(bodyParser.json());

//COORS

/* The code `app.use((req, res, next) => { ... })` is setting up middleware in the Express.js
application. Middleware functions are functions that have access to the request (`req`) and response
(`res`) objects, as well as the next middleware function in the application's request-response
cycle. */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//HTTP METHODS:

/* The code `app.get('/', (req, res) => {
    res.send('Welcome to BASU');
});` is setting up a route in the Express.js application. */
app.get('/', (req, res) => {
    res.send('Welcome to BASU');
});

/* The code `app.post('/create-product', async (req, res) => { ... })` is setting up a route in the
Express.js application to handle a POST request to the '/create-product' endpoint. */
app.post('/create-product', async (req, res) => {
    try {
        const { bodyItems } = req.body;

        const completion = await openai.chat.completions.create({
            messages: [{
                role: "user",
                content: `De acuerdo con la siguiente data de productos de supermercado ${bodyItems} genera un archivo JSON de productos decorativos reciclables. Crea el objeto 'listOfProjects', que contendrá la lista de proyectos como array. Cada proyecto, debe tener propiedades como 'name', 'description' e 'items'. En 'name' coloca el nombre del proyecto, en 'description', proporciona uan descripción del proyecto, y en 'items', incluye una lista de nombres de productos asociados a ese proyecto tomando como referencia la lista de productos de supermercado en los objetos 'containerShape' y 'meterial'. Realiza los proyectos en inglés`
            }],
            model: "gpt-3.5-turbo-1106",
            "temperature": .7,
            response_format: { "type": "json_object" },
        });

        // Convert JSON string to an JavaScript object
        const resultObj = JSON.parse(completion.choices[0]['message']['content']);

        return res.status(200).json({
            listOfProjects: resultObj.listOfProjects
        });
    } catch (error) {
        console.log(error);
    }
});

/* The code `app.post('/create-image', async (req, res) => { ... })` is setting up a route in the
Express.js application to handle a POST request to the '/create-image' endpoint. */
app.post('/create-image', async (req, res) => {
    try {
        const bodyItem = req.body;

        if (!bodyItem) {
            return res.status(400).json({ error: 'Propiedad bodyItem ausente en el cuerpo de la solicitud' });
        }

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: `Crea una fotografía de la versión final de ${bodyItem[0].description} con los siguiente materiales ${bodyItem[0].items} `,
            n: 1,
            size: "1024x1024",
        });
        const image_url = response.data;
        // console.log(image_url);

        return res.status(200).json({
            imageUrl: image_url,
          });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


/* The code `const port = process.env.port || 3000;` is assigning the value of the environment variable
`port` to the constant `port`. If the environment variable is not set, it defaults to the value
`3000`. */
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`You are connected to my API on the port: ${port} `);
});