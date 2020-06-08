# AccessibleModalWindow

Ventana modal o Lightbox accesible de acuerdo a las pautas WCAG 2.0 y 2.1.

## Ejemplo en funcionamiento
Puedes                     encontrar un ejemplo funcional así como un tutorial en el blog del autor Javier Rodríguez (https://wwww.tecnologiaaccesible.com)
                   
### Pre-requisitos 📋

Esta ventana modal hace uso de los frameworks JQuery y Bootstrap, por lo que es necesario incluir las dependencias necesarias antes de utilizar el componente:
```
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

<script src="libs/jquery.min.js"></script>
<script src="libs/bootstrap.bundle.min.js"></script>
<script src="js/modal_window.js"></script>

```

### Instalación 🔧

Una vez se han incluido los estilos, librerías y el script, el código html deberá respetar la siguiente estructura:

```
<!-- Button trigger modal -->
<button id="btnModal" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" aria-label="4 Estaciones. (Abre en ventana modal)." title="4 Estaciones. (Abre en ventana modal)." data-access="tooltip">
  4 Estaciones
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalTitle">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalTitle">4 Estaciones</h1>
        <button type="button" class="close" data-dismiss="modal" aria-label="X Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
</div> <!-- modal header -->

<div class="modal-body">
<!-- Introducir aqui el contenido que se quiera -->
<div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Aceptar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
</div> <!-- modal footer -->
    </div> <!-- modal content -->
  </div> <!-- modal dialog -->
</div> <!-- modal -->

```

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/tecnologiaaccesible/AccessibleAccordionMegaMenu) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Web del Autor

Puedes encontrar mucho más de cómo utilizar este proyecto en mi  blog(https://www.tecnologiaaccesible.com/ventana-modal-o-lightbox-accesible/)

## Autor ✒️

* **Javier Rodríguez** - *Desarrollo y tutorial completos* - [tecnologiaaccesible](https://github.com/tecnologiaaccesible)

## Licencia 📄

Este proyecto está bajo la Licencia (GNU GENERAL PUBLIC LICENSE) - mira el archivo LICENSE para detalles

