import OpenAI from 'openai';
import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

const openai = new OpenAI();
const app = express();
app.use(bodyParser.json());

//COORS

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//HTTP METHODS:

app.get('/', (req, res)=>{
    res.send('Welcome to BASU');
});

app.post('/create-product', async (req, res) =>{
    try {
        const {bodyItems} = req.body;
        
        const completion = await openai.chat.completions.create({
            messages: [{
                role: "user",
                content: `Transforma el siguiente JSON ${bodyItems} de productos de supermecado en un formato estructurado para un proyecto ambiental. Crea un JSON sin saltos de linea con un objeto llamado 'listOfProjects' que contendrá proyectos ecológicos. Cada proyecto, identificado por 'nameProject', deberá tener una 'description' que describa en qué consiste el proyecto y los materiales que utiliza. Además, dentro de cada proyecto, crea una propiedad 'items' que contenga una lista de nombre de productos que se utilizan para el proyecto basados en la lista proporcionada anteriormente.`
            }],
            model: "gpt-3.5-turbo-1106",
            "temperature": 0.7,
            response_format: {"type": "json_object"},
        });
        
        // Convertir la cadena JSON a un objeto JavaScript
        const resultObj = JSON.parse(completion.choices[0]['message']['content']);

        return res.status(200).json({
            listOfProjects: resultObj.listOfProjects
        })
    } catch (error) {
        console.log(error);
    }
});

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`You are connected to my API on the port: ${port} `);
});