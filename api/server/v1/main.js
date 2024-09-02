import {cliente} from './js/module/cliente.js'
import {funcion} from './js/module/funcion.js'
import {lugar} from './js/module/lugar.js'
import {pagos} from './js/module/pagos.js'
import {pelicula} from './js/module/pelicula.js'

import { Users } from '../credenciales/roles/users.js'

import { ObjectId } from 'mongodb'


/**
 * TODO: Esta parte del codigo llama a los metodos para la API de validacion 
 * TODO: API #8
*/
// let mongo = new cliente();
// let clienteId = new ObjectId ("66a7f65b8d77080ab692ebea"); //* Escribe el cliente que desea verificar
// let numeroTarjeta = "2345678901234567"; //* Escribe el numero tarjeta del cliente a verificar
// console.log(await mongo.verificarValidezTarjeta(clienteId, numeroTarjeta)); //* Debería mostrar si está verificado
// ! En caso contrario, asegurese de que esté digitando los parametros correctos


/**
 * TODO: Esta parte del codigo en main.js llama los metodos usados para las API's de asientos, 
 * TODO: especificamente las siguientes 9 lineas de codigo se encargan de buscar cuantos asientos 
 * TODO: disponibles hay para cada funcion.
*/
    // let mongo = new funcion() 
    // let funcionId = "66a805ad8d77080ab692ebf4"; //* Ingresa una _id valida, en caso contrario enviará una alerta
    // let funcionData = await mongo.getAllfunciones({ _id: funcionId });
    // if (funcionData && funcionData.length > 0) {
    //   const asientosDisponibles = await mongo.calculateAsientosDisponibles(funcionData[0]);
    //   console.log(asientosDisponibles); //* debería imprimir { normal: 18, preferencial: 9 }
    // } else {
    //   console.log("No se encontró la función con el ID especificado"); //! Alerta si la id agregada en la variable funcionId está mal escrita 
    // }

/**
 *   TODO: Las siguientes 9 lineas de codigo son usadas para que funcione la api de agregar una reserva 
 * * Los datos a cambiar son a conveniencia del usuario.
 */
    // const mongo = new funcion();
    // const funcionId = new ObjectId("66a805ad8d77080ab692ebf5"); //* _id requerido para buscar la funcion a actualizar
    // const reserva = {
    //   id_cliente: new ObjectId ("66a7f65b8d77080ab692ebe9"), //* o un ID de cliente válido
    //   tipo_asiento: "preferencial", //* o "normal"
    //   costo: 50, // costo de la reserva (note the decimal point)
    //   codigo_asiento: "F3" 
    // };
    // console.log(await mongo.asignarReserva(funcionId, reserva))

/**
 *   TODO: Las siguientes 4 lineas de codigo son usadas para que funcione la api para eliminar una reserva 
 * * Los datos a cambiar son a conveniencia del usuario.
 */
    // const mongo = new funcion();
    // const funcionId = new ObjectId("66a805ad8d77080ab692ebf5"); //* _id requerido para buscar la funcion a actualizar
    // const codigo_asiento = "F3" //* Asegurarse de cambiar el codigo_asiento para evitar inconvenientes
    // console.log(await mongo.eliminarReserva(funcionId, codigo_asiento)) //* Deberia mostrar la informacion de todo el dato

// let mongo = new lugar()
// console.log(await mongo.getAllLugares());

// let mongo = new pagos()
// console.log(await mongo.getAllPagos());


/** 
* TODO: Esta parte del codigo en main.js llama los metodos usados para filtrar peliculas 
*/

/**
* *Las siguientes dos lineas de codigo se encargan de llamar el metodo 
* * usado en la primer API encargada de consultar las peliculas disponibles
* * en el catalogo  con detalles como titulo, genero, etc.   
*/

  // let mongo = new pelicula()
  // console.log(await mongo.getAllPeliculasConLugarYDuracion());

/** 
  * * Las siguientes dos lineas de codigo se encargan de llamar el metodo 
  * * usado en la segunda API encargada de consultar los detalles de una pelicula
  * * especifica llamandola por el _id.
*/
  // let mongo = new pelicula()
  // console.log(await mongo.getPeliculaById("66a7f7228d77080ab692ebed")); //* Ingresa una _id valida, en caso contrario enviará una alerta


  /**
   * TODO: Ejecucion de insercion de users a la base de datos
   */

  // async function main() {  //* Define la funcion 
  //   const userManager = new Users(); //* Asigna los parametros
  //   const username = 'UserEstandar1';
  //   const password = 'admin123';
  //   const roles = [
  //     { role: 'usuarioEstandar', db: 'CineCampus' },
  //   ];
  
  //   await userManager.createUser(username, password, roles); //* Ejecuta la promesa y el metodo

  //   const users = await userManager.getAllUsers(); //* Metodo para visualizar los usuarios creados
  //   console.log('Usuarios:', users);
  // }
  
  // main(); //* Si los parametros están bien establecidos creará un usuario exitosamente


/** 
*  TODO: LA SIGUIENTE FUNCION ES PARA EJECUTAR LA ACTUALIZACION DEL USER
*/  
  // async function updateUser() {
  //   const userManager = new Users(); //* Declara los datos adecuados, de otra forma mostrará un error
  //   const username = 'User1';
  //   const updateFields = {
  //     pwd: 'admin123',
  //     roles: [{ role: 'readWrite', db: 'CineCampus' }]
  //   };
  //   await userManager.updateUser(username, updateFields);
  
  //   const updatedUsers = await userManager.getAllUsers();
  //   console.log('Usuarios actualizados:', updatedUsers);
  // }

  // async function main() { //* Declara la funcion main para update los usuarios
  //   await createUserAndShowUsers();
  //   await updateUser();
  // }
  
  // main(); //* Ejecuta la funcion 