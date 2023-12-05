<a id="english"></a>

# Table of Contents
1. [BASU](#about)
    1. [Getting Started](#start)
        1. [Required Dependencies](#requisites)
        2. [Additional Dependencies](#extra-requirements)
        3. [Environment Variable Configuration](#env)
    2. [OpenAI API Configuration](#mainfile)
    3. [HTTP Methods](#methods)
        1. [New Routes](#new-routes)
        2. [Making Requests](#requests)
    4. [Español](#spanish)
    5. [Extra Notes](#acknowledgments)

<a id="about"></a>

# BASU 🗑️

A proposal to reinforce recycling culture based on supermarket items.

<a id="start"></a>

## Getting Started

> [!NOTE]
> This project is developed with Node.js version 21.2.0 for [ChatGPT-Sprint by WizelineAcademy](https://github.com/wizelineacademy/chatGPT-sprint-1023)

> [!CAUTION]
> Be cautious about publishing your OpenAI API key. To avoid exposing the API key, use the `.env` file and insert your API key within the double quotes.

<a id="requisites"></a>

### Node.js Dependencies

- Install required dependencies
    ```plaintext
        npm install
    ```
> [!TIP]
> For a better development experience, use nodemon.

<a id="extra-requirements"></a>

- Install nodemon
    ```plaintext
        npm i -D nodemon
    ```

<a id="env"></a>

### .env File Configuration
- Insert your API key within double quotes
     ```plaintext
        OPENAI_API_KEY = ""
    ```
    This will create an environment variable.

<a id="mainfile"></a>

## API Request Configuration

- **content**: Refers to the prompt, i.e., the request made to the API.

- **model**: Refers to the OpenAI model we will use in the API. These models can be found in [Models](https://platform.openai.com/docs/models).

- **temperature**: Refers to how closely we want the response to match our question. This value ranges from 0 to 2. Higher values give more random responses, while lower values provide a response closer to the desired topic.

- **response_format**: Refers to the format we want for the response to our question. For this case, it is recommended to have it as a json_object.

> [!IMPORTANT]
> For more configuration information, refer to [API reference](https://platform.openai.com/docs/api-reference/chat/create)

<a id="methods"></a>

## HTTP Methods

<a id="new-routes"></a>

### Create New Routes

The only accepted method for this project is through the **POST** method; however, you can create different routes to switch between the use of various models.

 - Basic structure to create post methods in our app

    ```plaintext
        app.post('/route', async (req, res)=>{
            try{

            }catch(error){

            }
        });
    ```

<a id="requests"></a>

### Making Requests
In this case, we use Postman for requests.

1. Configure your request with the post method.
2. In the body tab, configure it as **raw** and the format as **json**.
3. Copy the content from the data.json file and paste it into the body in Postman.

> [!WARNING]
> It is crucial that if you are going to make requests, your JSON body must have that structure because that is what the prompt is tailored to.

> [!NOTE]
> If you want to use your JSON file structure, adjust your prompt accordingly.

> [!TIP]
> As an alternative to Postman, you can use the request.http file to make your requests.

<a id="acknowledgments"></a>

## Extra Notes
If you liked this project and want to contribute to the environment, fork it, and don't forget to follow me on [Linkedin 🚀](https://www.linkedin.com/in/javssmarc/) or visit my [portfolio 💻](https://jjaviermc.netlify.app)


<a id="spanish"></a>

# Tabla de contenido
1. [BASU](#sobre)
    1. [Incio](#inicio)
        1. [Dependencias necesarias](#requisitos)
        2. [Dependencias extras](#requisitoextra)
        3. [Configuracion variable de ambiente](#env2)
    2. [Configuracion de la API de OpenAI](#archivoPrincipal)
    3. [Métodos HTTP](#metodos)
        1. [Nuevas rutas](#nuevasRutas)
        2. [Hacer peticiones](#peticiones)
    4. [English](#english)
    5. [Notas extra](#agradecimientos)

<a id = "sobre"></a>

# BASU 🗑️

Propuesta para reforzar la cultura del reciclaje, la cual se basa en los articulos de supermercado.

<a id = "inicio"></a>

## Inicio

> [!NOTE]
> Este proyecto es desarrollado con Node.js en su versión v21.2.0 para [ChatGPT-Sprint de WizelineAcademy](https://github.com/wizelineacademy/chatGPT-sprint-1023)

> [!CAUTION]
> Ten cuidado con publicar tu api key de OpenAI, para evitar tener expuesta la api key,usa el archivo .env e inserta entre las comillas dobles tu api key 

<a id = "requisitos"></a>

### Dependencias de Node.js

- Instalar las dependencias necesarias
    ```plaintext
        npm install
    ```
> [!TIP]
> Si deseas una mejor experiencia al momento de levantar tu servidor, usa nodemon

<a id = "requisitoextra"></a>

- Instalas nodemon
    ```plaintext
        npm i -D nodemon
    ```

<a id = "env"></a>

### Configuración archivo .env
- Inserta tu apikey dentro de las comillas dobles
     ```plaintext
        OPENAI_API_KEY = ""
    ```
    Esto permitira crear una variable de ambiente.

<a id = "mainfile"></a>

## Configuración de petición a la API

- **content**: hace rerefencia al prompt, es decir la petición que relizamos a la API

- **model**: hace referencia al modelo de OpenAI que usaremos en la API, estos modelos se encuentran en [Models](https://platform.openai.com/docs/models)

- **temperature**: hace referencia a lo cercana que deseamos la respuesta con respecto a nuestra pregunta, este valor va desde 0 hasta 2. Los valores más altos nos dan respuestas más random, mientras que los valores más bajos nos dan una respuesta aproximada al tema que deseamos.

- **response_format**: hace referencia al formato que desamos tener como respuesta a nuestra pregunta, para este caso es recomendable tenerlo en json_object
    

> [!IMPORTANT]
> Para más información de configuración, consultar [API reference](https://platform.openai.com/docs/api-reference/chat/create)

<a id = "metodos"></a>

## Métodos HTTP

<a id = "nuevasRutas"></a>

### Crear nuevas rutas

El único método aceptado para este proyecto es por medio del método **POST**, sin embargo puedes crear diferentes rutas para combiar el uso de varios modelos.

 - Estructura básica para crear metodos post en nuestra app

    ```plaintext
        app.post('/ruta', async (req, res)=>{
            try{

            }catch(error){

            }
        });
    ```

<a id = "peticiones"></a>

### Hacer peticiones
En este caso usamos Postman para las peticiones

1. Configura tu petición con el método post
2. En la pestaña body, configura en **raw** y el formato en **json**
3. Copia el contenido del archivo data.json y pegado dento del cuerpo en Postman.

> [!WARNING]
> Es muy importante que si vas a realizar tus peticiones, tu cuerpo json debe tener esa estructura, debido a que para eso está ajustado el prompt.

> [!NOTE]
> Si deseas usar tu propia estructura de archivos json, ajusta tu prompt.

> [!TIP]
> Como alternativa a Postman puedes usar el achivo request.http y hacer tus peticiones.

<a id = "agradecimientos"></a>

## Notas extra
Si te gustó este proyecto y deseas contribuir al medio ambiente, dale en fork y no olvides seguirme en mi [Linkedin 🚀](https://www.linkedin.com/in/javssmarc/) o visitar mi [portafolio 💻](https://jjaviermc.netlify.app)

