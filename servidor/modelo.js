function Sistema()
{
    this.usuarios={}; //Que tipo de colección??
    // operaciones sobre la colección.
    /*this.agregarUsuario=function(nick)
    {   
        if(!this.usuarios[nick])
        {
            this.usuarios[nick]=new Usuario(nick);
            console.log(`Usuario ${nick} agregado.`);
        } 
        else {
            console.log(`El usuario ${nick} ya existe.`);
        }     
    }*/
    this.agregarUsuario=function(nick)
    { 
        let res={"nick":-1}; 
        if(!nick)
        {
            return res;
        }
        if (!this.usuarios[nick])
        { 
            this.usuarios[nick]=new Usuario(nick); 
            console.log(`Usuario ${nick} agregado.`);
            res.nick=nick; 
        } 
        else
        { 
            console.log("el nick "+nick+" está en uso");             
        } 
        return res; 
    } 

    this.eliminarUsuario = function(nick) {
        /*res=false;
        if (this.usuarios[nick]) {
            delete this.usuarios[nick];
            console.log(`Usuario ${nick} eliminado.`);
            return true;
        } else {
            console.log(`El usuario ${nick} no existe.`);
        }
        return res;*/
        let res={"eliminado":false};
        if (this.usuarios[nick])
        {
            delete this.usuarios[nick];
            console.log(`Usuario ${nick} eliminado.`);
            res.eliminado=true;
        }
        else {
            console.log(`El usuario ${nick} no existe.`);
        }
        return res;
    };
    
    this.obtenerUsuarios=function()
    { 
        let lista=[];
        for(usr in this.usuarios)
        {
            lista.push(this.usuarios[usr]);
        }
        return lista;
    }
    
    this.usuarioActivo=function(nick)
    {
        let res={activo:false};
        res.activo=this.usuarios[nick]!=undefined;
        return res;
    }

    this.numeroUsuarios=function()
    { 
        let res={num:-1};
        res.num=Object.keys(this.usuarios).length;
        return res;
    } 

}


function Usuario(nick)
{
    this.nick=nick;
}

module.exports.Sistema=Sistema