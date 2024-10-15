function Sistema()
{
    this.usuarios={}; //Que tipo de colección??
    // operaciones sobre la colección.
    this.agregarUsuario=function(nick)
    {   
        if(!this.usuarios[nick])
        {
            this.usuarios[nick]=new Usuario(nick);
            console.log(`Usuario ${nick} agregado.`);
        } 
        else {
            console.log(`El usuario ${nick} ya existe.`);
        }
            
    }

    this.eliminarUsuario = function(nick) {
        res=false;
        if (this.usuarios[nick]) {
            delete this.usuarios[nick];
            console.log(`Usuario ${nick} eliminado.`);
            return true;
        } else {
            console.log(`El usuario ${nick} no existe.`);
        }
        return res;
    };
    
    this.obtenerUsuarios=function()
    {
        return this.usuarios;
    }
    
    this.usuarioActivo=function()
    {
        return this.usuarios[nick]!=undefined;
    }
    this.numeroUsuarios=function()
    {
        return Object.keys(this.usuarios).length;
    } 

}


function Usuario(nick)
{
    this.nick=nick;
}

module.exports.Sistema=Sistema