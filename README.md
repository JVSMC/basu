<a id="english"></a>

# Table of Contents
1. [BASU](#about)
    1. [Getting Started](#start)
        1. [Required Dependencies](#requisites)
        2. [Additional Dependencies](#extra-requirements)
        3. [Environment Variable Configuration](#env)
    2. [Configuration of Models Used in Basu](#mainfile)
    3. [HTTP Methods](#methods)
        1. [New Routes](#new-routes)
        2. [Making Requests](#requests)
            1. [Generate a Project from a Ticket](#project-requests)
            2. [Generate an Image from a Project](#image-requests)
    4. [Español](#spanish)
    5. [Extra Notes](#acknowledgments)


<a id="about"></a>

# BASU 🗑️

A proposal to reinforce recycling culture based on supermarket items. Your ecological ally, linking your purchases to green projects. Discover sustainable initiatives while making your choices. Shop with purpose, build a greener future with BASU!

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
- Create a .env file in the root of your project.

- Insert the following text inside the .env file and your api key inside the double quotes.
     ```plaintext
        OPENAI_API_KEY = ""
    ```
    This will create an environment variable.

### Start Service

- Open the project's root folder in a terminal and run the following command:
    ```plaintext
    npm run dev
    ```

- Once this step is completed, the console should send a message about the port on which the Node.js service is running.

> [!NOTE]
> Before moving on to the HTTP methods section, it is important to understand the parts that can be configured in the models used for Basu.

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

Basu consumes two OpenAI models. The first model is used to generate ecological projects based on your shopping list. The second model is employed to generate an image of an ecological prototype based on the previously generated project.

> [!TIP]
> As an alternative to Postman, you can use the request.http file and make your requests according to the provided structures.

<a id="project-requests"></a>

#### **Generate a Project from a Ticket**

- Route to request petition:
    ```plaintext
        /create-product
    ```

- Example request body:
    ```plaintext
    [
        {
            "nameItem": "Milk",
            "containerShape": "Box",
            "material": "Cardboard"
        },
        {
            "nameItem": "Ramen",
            "containerShape": "Bag",
            "material": "Plastic"
        },
        {
            "nameItem": "Cereal",
            "containerShape": "Box",
            "material": "Cardboard"
        },
        {
            "nameItem": "Soda",
            "containerShape": "Can",
            "material": "Aluminum"
        }
    ]
    ```

- Example response:
    ```plaintext
    {
        "listOfProjects": [
            {
            "name": "Hanging Planters",
            "description": "Project to create hanging planters using recyclable materials",
            "items": [
                "Plastic bottle",
                "Hemp rope",
                "Spray paint"
            ]
            },
            {
            "name": "Recycled Paper Lamps",
            "description": "Project to create decorative lamps using recycled paper",
            "items": [
                "Newspaper",
                "Eco-friendly glue",
                "LED bulb"
            ]
            },
            {
            "name": "Recycled Glass Vases",
            "description": "Project to create decorative vases using recycled glass bottles",
            "items": [
                "Glass bottles",
                "Acrylic paint",
                "Decorative rope"
            ]
            }
        ]
    }
    ```


<a id="image-requests"></a>

#### **Generate an Image from a Project**

- Ruta para generar imagen a partir de un proyecto:
    ```plaintext
    /create-image
    ```

- Example request body:
    ```plaintext
    [
        {
            "description": "Proyecto para crear lámparas decorativas utilizando botellas de vidrio recicladas",
            "items": [
                "Botella de vino",
                "Cable eléctrico",
                "Bombilla LED"
                ]
        }
    ]
    ```

- Example response:
    ```plaintext
    {
        "imageUrl": [
            {
            "revised_prompt": "Create an image featuring the final version of a project to create decorative lamps using recycled glass bottles. The materials used include a wine bottle, an electrical cable, and a LED bulb. The lamp should give a sense of eco-friendly creativity and resourcefulness, highlighting the beauty of repurposed materials.",
            "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-3JeK1AQz0XtaQzGsvsEkW2fD/user-ok03Hw7INVzIDIDBrXCRDcK2/img-UiuUtSLVjOCkaXzyVJiOcgxw.png?st=2023-12-10T10%3A31%3A24Z&se=2023-12-10T12%3A31%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-09T23%3A15%3A11Z&ske=2023-12-10T23%3A15%3A11Z&sks=b&skv=2021-08-06&sig=7ap5V6fKirMCdFTha408Pa5bTzCLMFfOcLUPOweFP2Q%3D"
            }
        ]
    }
    ```

1. Configure your request with the POST method.
2. In the body tab, set it to **raw** and the format to **json**.
3. Copy the body structure to generate your request according to the model you are using.

> [!WARNING]
> DALL·E model URLs have a validity of 24 hours.


<a id="acknowledgments"></a>

## Extra Notes
If you liked this project and want to contribute to the environment, fork it, and don't forget to follow me on [Linkedin 🚀](https://www.linkedin.com/in/javssmarc/) or visit my [portfolio 💻](https://jjaviermc.netlify.app)


<a id="spanish"></a>

# Tabla de contenido
1. [BASU](#sobre)
    1. [Inicio](#inicio)
        1. [Dependencias necesarias](#requisitos)
        2. [Dependencias extras](#requisitoextra)
        3. [Configuración variable de ambiente](#env2)
    2. [Configuración de modelos usados en Basu](#archivoPrincipal)
    3. [Métodos HTTP](#metodos)
        1. [Nuevas rutas](#nuevasRutas)
        2. [Hacer peticiones](#peticiones)
            1. [Generar un proyecto a partir de un ticket](#peticiones-proyecto)
            2. [Generar una imagen a partir de un proyecto](#peticiones-imagen)
    4. [English](#english)
    5. [Notas extra](#agradecimientos)

<a id="sobre"></a>

# BASU 🗑️

Propuesta para reforzar la cultura del reciclaje, basada en los artículos de supermercado. Tu aliado ecológico, vincula tus compras con proyectos verdes. Descubre iniciativas sustentables al hacer tus elecciones. ¡Compra con propósito, construye un futuro más verde con BASU!

<a id="inicio"></a>

## Inicio

> [!NOTE]
> Este proyecto se desarrolla con Node.js en su versión v21.2.0 para el [ChatGPT-Sprint de WizelineAcademy](https://github.com/wizelineacademy/chatGPT-sprint-1023).

> [!CAUTION]
> Ten cuidado al publicar tu API key de OpenAI. Para evitar exponer la API key, utiliza el archivo .env e inserta tu API key entre comillas dobles.

<a id="requisitos"></a>

### Dependencias de Node.js

- Instala las dependencias necesarias:
    ```plaintext
    npm install
    ```
> [!TIP]
> Si deseas una mejor experiencia al levantar tu servidor, usa nodemon.

<a id="requisitoextra"></a>

- Instala nodemon:
    ```plaintext
    npm i -D nodemon
    ```

<a id="env2"></a>

### Configuración archivo .env

- Crea un archivo .env en la raíz de tu proyecto.

- Inserta el siguiente texto dentro del archivo .env y tu API key dentro de las comillas dobles.
    ```plaintext
    OPENAI_API_KEY = ""
    ```
    Esto permitirá crear una variable de ambiente.

### Iniciar servicio

- Abre la carpeta raíz del proyecto en una terminal y ejecuta el siguiente comando:
    ```plaintext
    npm run dev
    ```

- Una vez realizado este paso, la consola debe enviar un mensaje sobre el puerto en el que corre el servicio de Node.js.

> [!NOTE]
> Antes de pasar a la sección de los métodos HTTP, es importante conocer las partes que se pueden configurar en los modelos que se usan para Basu.

<a id="archivoPrincipal"></a>

## Configuración de modelos usados en Basu

### Modelo **gpt-3.5-turbo-1106**

- **content**: hace referencia al prompt, es decir, la petición que realizamos a la API.

- **model**: hace referencia al modelo de GPT-3.5 que usaremos en la API. Estos modelos se encuentran en [Models](https://platform.openai.com/docs/models/gpt-3-5).

- **temperature**: hace referencia a lo cercana que deseamos la respuesta con respecto a nuestra pregunta. Este valor va desde 0 hasta 2. Los valores más altos nos dan respuestas más aleatorias, mientras que los valores más bajos nos dan una respuesta aproximada al tema que deseamos.

- **response_format**: hace referencia al formato que deseamos tener como respuesta a nuestra pregunta. Para este caso, es recomendable tenerlo en json_object.

### Modelo **dall-e-3**

- **model**: hace referencia al modelo de DALL·E que usaremos en la API. Estos modelos se encuentran en [Models](https://platform.openai.com/docs/models/dall-e).

- **prompt**: hace referencia a la descripción de la imagen que deseamos que genere el modelo.

- **n**: hace referencia al número de imágenes que puede generar el modelo.

- **size**: hace referencia al tamaño de la imagen de respuesta por parte del modelo.

> [!IMPORTANT]
> Para más información de configuración, consulta [API reference](https://platform.openai.com/docs/api-reference/introduction).

<a id="metodos"></a>

## Métodos HTTP

<a id="nuevasRutas"></a>

### Crear nuevas rutas

El único método aceptado para este proyecto es mediante el método **POST**. Sin embargo, puedes crear diferentes rutas para cambiar el uso de varios modelos.

 - Estructura básica para crear métodos post en nuestra app:
    ```plaintext
    app.post('/ruta', async (req, res)=>{
        try{

        } catch(error){

        }
    });
    ```

<a id="peticiones"></a>

### Hacer peticiones

Basu hace el consumo de dos modelos de OpenAI. El primer modelo se usa para generar proyectos ecológicos según tu lista de compras. El segundo modelo se utiliza para generar una imagen de un prototipo ecológico según el proyecto generado anteriormente.

> [!TIP]
> Como alternativa a Postman, puedes usar el archivo request.http y hacer tus peticiones de acuerdo a las estructuras proporcionadas.

<a id="peticiones-proyecto"></a>

#### **Generar un proyecto a partir de un ticket**

- Ruta para solicitar petición:
    ```plaintext
    /create-product
    ```

- Ejemplo de cuerpo de petición:
    ```plaintext
    [
        {
            "nameItem": "Leche",
            "containerShape": "Caja",
            "material": "Cartón"
        },
        {
            "nameItem": "Ramen",
            "containerShape": "Bolsa",
            "material": "Plástico"
        },
        {
            "nameItem": "Cereal",
            "containerShape": "Caja",
            "material": "Cartón"
        },
        {
            "nameItem": "Refresco",
            "containerShape": "Lata",
            "material": "Aluminio"
        }
    ]
    ```

- Ejemplo de respuesta:
    ```plaintext
    {
        "listOfProjects": [
            {
            "name": "Macetas colgantes",
            "description": "Proyecto para crear macetas colgantes utilizando materiales reciclables",
            "items": [
                "Botella de plástico",
                "Cuerda de cáñamo",
                "Pintura en aerosol"
            ]
            },
            {
            "name": "Lámparas de papel reciclado",
            "description": "Proyecto para crear lámparas decorativas utilizando papel reciclado",
            "items": [
                "Papel de periódico",
                "Pegamento ecológico",
                "Bombilla LED"
            ]
            },
            {
            "name": "Jarrones de vidrio reciclado",
            "description": "Proyecto para crear jarrones decorativos utilizando botellas de vidrio recicladas",
            "items": [
                "Botellas de vidrio",
                "Pintura acrílica",
                "Cuerda decorativa"
            ]
            }
        ]
    }
    ```

<a id="peticiones-imagen"></a>

#### **Generar una imagen a partir de un proyecto**

- Ruta para generar imagen a partir de un proyecto:
    ```plaintext
    /create-image
    ```

- Ejemplo de cuerpo de petición:
    ```plaintext
    [
        {
            "description": "Proyecto para crear lámparas decorativas utilizando botellas de vidrio recicladas",
            "items": [
                "Botella de vino",
                "Cable eléctrico",
                "Bombilla LED"
                ]
        }
    ]
    ```

- Ejemplo de respuesta:
    ```plaintext
    {
        "imageUrl": [
            {
            "revised_prompt": "Create an image featuring the final version of a project to create decorative lamps using recycled glass bottles. The materials used include a wine bottle, an electrical cable, and a LED bulb. The lamp should give a sense of eco-friendly creativity and resourcefulness, highlighting the beauty of repurposed materials.",
            "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-3JeK1AQz0XtaQzGsvsEkW2fD/user-ok03Hw7INVzIDIDBrXCRDcK2/img-UiuUtSLVjOCkaXzyVJiOcgxw.png?st=2023-12-10T10%3A31%3A24Z&se=2023-12-10T12%3A31%3A24Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-12-09T23%3A15%3A11Z&ske=2023-12-10T23%3A15%3A11Z&sks=b&skv=2021-08-06&sig=7ap5V6fKirMCdFTha408Pa5bTzCLMFfOcLUPOweFP2Q%3D"
            }
        ]
    }
    ```

1. Configura tu petición con el método post.
2. En la pestaña body, configura en **raw** y el formato en **json**.
3. Copia la estructura del cuerpo para generar tu petición según sea el caso del modelo a usar.

> [!WARNING]
> Las URL del modelo DALL·E tienen una vigencia de 24 horas.

<a id="agradecimientos"></a>

## Notas extra
Si te gustó este proyecto y deseas contribuir al medio ambiente, haz clic en fork y no olvides seguirme en [LinkedIn 🚀](https://www.linkedin.com/in/javssmarc/) o visitar mi [portafolio 💻](https://jjaviermc.netlify.app).

