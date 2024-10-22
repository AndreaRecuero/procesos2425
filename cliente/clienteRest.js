function ClienteRest()
{ 
    this.agregarUsuario=function(nick)
    { 
        let cli=this; 
        $.getJSON("/agregarUsuario/"+nick,function(data)
        {
            if (data.nick!=-1)
            { 
                console.log("Usuario "+nick+" ha sido registrado") 
            } 
            else
            { console.log("El nick ya está ocupado"); // si es menos 1 el usuario estáocupado, o vete a saber que ha pasado
            } 
        });
        // este codigo se ejecuta sin esperar a que se resuelva. 
    } 

    this.obtenerUsuarios=function()
    { 
        let cli=this; 
        $.getJSON("/obtenerUsuarios/",function(lista)
        {
            console.log(lista)            
        });
    } 

    this.numeroUsuarios=function()
    { 
        let cli=this; 
        $.getJSON("/numeroUsuarios/",function(data)
        {
            console.log("Número usuarios: " + data.num);            
        });
    } 

    this.usuarioActivo=function(nick)
    {
        let cli=this;
        $.getJSON("/usuarioActivo/"+nick, function(data)
        {
            if (!data.activo)
            {
                console.log("Usuario "+nick+" no está activo")
            }
            else 
            {
                console.log("Usuario "+nick+" está activo")
            }
        });
    }

    this.eliminarUsuario=function(nick)
    {
        let cli=this;
        $.getJSON("/eliminarUsuario/"+nick, function(data)
        {
            if (!data.eliminado)
            {
                console.log("Usuario "+nick+" no está eliminado")
            }
            else 
            {
                console.log("Usuario "+nick+" está eliminado")
            }
        });
    }

    /* 
    this.agregarUsuario2=function(nick){}
    $.ajax({ 
        type:'GET', 
        url:'/agregarUsuario/'+nick, 
        success:function(data)
        { 
            if (data.nick!=-1)
            { 
                console.log("Usuario "+nick+" ha sido registrado") 
            }
            else
            {
                console.log("El nick ya está ocupado"); 
            } 
        }, 
            error:function(xhr, textStatus, errorThrown)
            { 
                console.log("Status: " + textStatus); 
                console.log("Error: " + errorThrown); 
            }, 
            contentType:'application/json' 
    }); */
} 