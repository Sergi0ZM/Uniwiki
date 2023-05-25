# UniWiki - App
###### DEVELOPED BY D1N0C0D3 T34M

Uniwiki es una WA en constante desarrollo

## Tecnologías
UniWiki se apoya de diversas tecnologías para su desarrollo en cuestión
-[ReactJs](react.dev)
-[NodeJs](node.org)  
-[Tailwind css](https://tailwindcss.com/) 
-[Essential JS 2 for React](https://ej2.syncfusion.com/home/react.html) 

## Configuraciones:

### El archivo .editorconfig

Contiene la configuración general de vs code, para todos los participantes del proyecto.

### El archivo .gitignore

node_modules

> por lo que se debe instalar de forma independiente por cada participante

## Paquetes adicionales:

> para python & webScrapping 

- Nota: `AÚN NO SE IMPLEMENTA EN LA VERSIÓN 0.0.0 DE UNIWIKI`

#### Instalar pip
```
py get-pip.py
```
#### Instalar BeautifulSoup
```
pip install beautifulsoup4
```
##### _importar_
```
from bs4 import BeautifulSoup
```
#### Instalar pandas
```
pip install pandas
```
##### _importar_
```
import pandas as pd
```
#### Instalar requests
```
python -m pip install requests
```
##### _importar_
```
import requests
```
# lanzamiento
#### verificar versión de NodeJs
```
node --version
```
> De no tenerlo, instalar desde el [sitio oficial](https://nodejs.org/es)

#### Proyecto uniwiki-app
Desde una terminal, aaceder a la carpeta del proyecto /uniwiki-app, luego ejecutar
```
npm install
```
> Para instalar los paquetes que requiere el proyecto

#### IMPORTANTE: `Para ejecutar proyecto`
```
npm start
```
# Paquetes asistentes:

- Syncfusion & reactJs: componentes y herramientas de desarrollo para crear aplicaciones empresariales.
- > [Fuente & documentación](https://ej2.syncfusion.com/home/react.html)

- TailwindCss
- > [Fuente & documetación](tailwindcss.com)

`importante: documentarse de la funcionalidad básica, todos los estilos de uniWiki-app son con tailwind, y los componentes como gráficas son de Essential JS 2 react`

# Archivos claves

#### App.js

> Configuración de enrutamiento (navegación de toda la aplicación)

#### index.jsx _en carpeta /components_

> Archivo maestro, que funciona como directorio de componentes en toda la aplicación

#### index.js _en carpeta /pages_

> Archivo maestro, que funciona como directorio de paginas en toda la aplicación

#### archivos .js _en carpeta /data_

> Contienen todos los datos para la operabilidad de cada uno de los componentes

# Pendientes 

- [ ] Terminar algoritmo principal de búsqueda
- [ ] Añadir página de inicio/bienvenida
- [ ] Añadir página 404
- [ ] Definir logo e intercambiar miniatura