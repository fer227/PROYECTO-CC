# BLIOTEC

[![Build Status](https://travis-ci.com/fer227/BLIOTEC.svg?branch=main)](https://travis-ci.com/fer227/BLIOTEC) [![CircleCI](https://circleci.com/gh/fer227/BLIOTEC.svg?style=svg)](https://circleci.com/gh/fer227/BLIOTEC) [![Build status](https://ci.appveyor.com/api/projects/status/pt44c0loki51d9tp?svg=true)](https://ci.appveyor.com/project/fer227/bliotec)

BLIOTEC consiste en un proyecto orientado a la computación en la nube que pretende organizar y gestionar el catálogo de libros de una biblioteca, además de los préstamos con los clientes de la misma.

Para probarlo, primero clona el repositorio e instala nuestro gestor de tareas (para a su vez instalar las dependencias y probar el proyecto).

```
git clone https://github.com/fer227/BLIOTEC
npm install -g gulp gulp-run
gulp install
gulp test
```

En el directorio [doc](./doc) se puede observar las diferentes fases del avance del proyecto.

## Composición de servicios

### Estructura escogida
Puesto que tenemos tres entidades bastante independientes (libros, préstamos y usuarios), seguiremos nuestra idea del principio de dividir el sistema en tres microservicios. Cada entidad dispone de su controlador y sus propias rutas. 

Necesitaremos crear tres ficheros "index" que lancen los servicios, introducir cada servicio en una imagen y coordinarlos mediante docker-compose.

### Contenedores
