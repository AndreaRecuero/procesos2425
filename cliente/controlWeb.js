function ControlWeb()
{   this.mostrarAgregarUsuario = function()
    {
        $('#mAU').remove() // para eliminar el formulario
        // esto es muy artesanal, de ahí que hayan salido tantos frameworks ahora, esto ya no se hace.
        let cadena = '<div id="mAU" class="form-group">'; //mAU = mostrar agregar Usuario
        cadena = cadena + '<label for="nick">Nick:</label>';
        cadena = cadena + '<input type="text" class="form-control" id="nick">';
        cadena = cadena + '<button id = "btnAU" "type="submit" class="btn btn-primary">Submit</button>'; // btnAU= boton agregar usuario
        cadena = cadena + '</div>';

        $('#agregarUsuario').append(cadena); // en index.html
        //otra manera de buscar:
        // $(div)
        // $(.)
        //Codigo del manejador del evento click en este elemento HTML. Busca un elemento cuyo id sea btnAU (es el botón)
        $("#btnAU").on("click",function()
        { 
            let nick=$("#nick").val();
            rest.agregarUsuario(nick)
        });
    }
}