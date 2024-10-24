const fs=require("fs"); // import de dependencias, utiliza dependencias de sistema archivo, file sistem: fs
const express = require('express'); // dependencia que hay que cargar
const app = express(); // se inicializa instancia de express. Express hace el papel de servidor web (gestiona HTTP)
const modelo = require("./servidor/modelo.js");  //implementamos dependencia de index.js a modelo.js de servidor. Diferencia entre mi capa RES y mi capa lógica.
const PORT = process.env.PORT || 3000; // definimos una constante 

let sistema = new modelo.Sistema(); //creando la instancia

// parte dedicada a directivas             ---------------------------------------------------
app.use(express.static(__dirname + "/"));  // definimos que el nombre del directorio de mi aplicación ('C: \Users\root\OneDrive - Universidad de Castilla-La Mancha\UCLM\Cuarto\Procesos\Proyecto\procesos2425>') la hace raíz

// zona de paticiones al sistema. ENDPOINT ---------------------------------------------------
app.get("/", function(request,response) // request es lo que llega, la petición y según la info que llegue, mi aplicación construye un objeto respuesta
{ 
    /*response.statusCode = 200; 
    response.setHeader('Content-Type', 'text/plain'); 
    response.end('Hola Mundo!');*/ 
    let contenido=fs.readFileSync(__dirname+"/cliente/index.html"); 
    // contenido si definido por que estamos invocando una llamada bloqueante, que el hilo de ejecucion no puede segui hasta que no lea el archivo (llamadas sync y async)
    response.setHeader("Content-type","text/html"); 
    response.send(contenido); 
}); 

app.get("/agregarUsuario/:nick",function(request,response){ 
    let nick=request.params.nick;  // asi accedo al parámetro donde se pone nick
    let res=sistema.agregarUsuario(nick); 
    // OJO estoy asumiendo que agregarUsuario(nick) es una llamada asíncrona.
    response.send(res); 
    }); 

app.get("/numeroUsuarios",function(request,response){ 
    let res=sistema.numeroUsuarios();
    response.send(res); 
    }); 

app.get("/obtenerUsuarios",function(request,response){ 
    let lista=sistema.obtenerUsuarios();
    response.send(lista); 
    }); 

app.get("/eliminarUsuario/:nick",function(request,response){ 
    let nick=request.params.nick;
    let res=sistema.eliminarUsuario(nick);
    response.send(res); 
    }); 

app.get("/usuarioActivo/:nick",function(request,response){ 
    let nick=request.params.nick;
    response.send(sistema.usuarioActivo(nick)); 
    }); 
// Las apps web se quedan esperando una vez lanzadas ---------------------------------------------------
app.listen(PORT, () => { 
    console.log(`App está escuchando en el puerto ${PORT}`); 
    console.log('Ctrl+C para salir'); 
}); 



//index js levanta el servidor eb y tiene una dependencia de que todo lo que le llegue a la capa RES lo delega a la capa lógica modelo.js servidor