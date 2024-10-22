const modelo = require("./modelo.js");

describe('El sistema', function() 
{ 
  let sistema; 

  // Se ejecuta antes de cada bloque de it.
  beforeEach(function() 
  { 
    sistema = new modelo.Sistema() 
  }); 
  
  it('inicialmente no hay usuarios', function() //TEST
  { 
    expect(sistema.numeroUsuarios().num).toEqual(0); //ASSERTION
  }); 

  it("comprobamos agregar usuario con nick", function()
  {
    // Comprobar que no hay usuarios
    expect(sistema.numeroUsuarios().num).toEqual(0); 
    // agregar un usuario concreto
    sistema.agregarUsuario("pepe");
    // comprobar que hay 1 usuario en el sistema
    expect(sistema.numeroUsuarios().num).toEqual(1);
    // comprobar que el único que hay es el que acabamos de incluir
    expect(sistema.usuarioActivo("pepe").activo).toEqual(true); 
  });

  it("comprobamos eliminar usuario", function()
  {
    // comprobar que no hay usuarios
    // agregamos un usuario
    sistema.agregarUsuario("pepe");
    // comprobamos que el usuario creado está en el sistema 
    // eliminamos el usuario
    let res = sistema.eliminarUsuario("pepe");
    // comprobamos que el usuario creado no está en el sistema 
    expect(res.eliminado).toEqual(true);
    // comprobamos que no se puede volver a borrar
    res = sistema.eliminarUsuario("pepe");
    expect(res.eliminado).toEqual(false);
  });

  it("comprobamos usuario activo", function()
  {
    // comprobar que no hay usuarios
    let res = sistema.usuarioActivo("pepe");
    expect(res.activo).toEqual(false);
    // agregamos un usuario
    sistema.agregarUsuario("pepe");
    // comprobamos que el usuario creado está en el sistema 
    res = sistema.usuarioActivo("pepe");
    expect(res.activo).toEqual(true);
  });

  it("comprobamos el método número de usuarios", function()
  {
    // calcular las claves del array associativo Object.keys(sistema.usuarios)
    // comprobamos que el valor devuelto por numero de usuarios es igual al anterior
    let res=sistema.numeroUsuarios();
    expect(res.num).toEqual(0);
    sistema.agregarUsuario("pepe");
    sistema.agregarUsuario("pepa");
    res=sistema.numeroUsuarios();
    expect(res.num).toEqual(2);

  });

  //xit es para que el programa sepa que es provisional y que no lo ejecute.
});
