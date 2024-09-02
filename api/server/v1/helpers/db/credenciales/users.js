/**
 * TODO: Se crea el usuario correspondiente     
 */

// db.createUser(
//     {
//         user: "User1",
//         pwd: "admin123",
//         roles: [
//             { role: "dbAdmin", db: "CineCampus"}, // * Se asignan los roles al usuario
//             { role: "userAdmin", db: "CineCampus"},
//             { role: "readWrite", db: "CineCampus"},
//             { role: "userAdminAnyDatabase", db: "admin"},
//             { role: "dbAdminAnyDatabase", db: "admin"},
//         ]
//     }
// );

/** 
 * TODO: Creacion de un nuevo usuario
 */

// db.createUser( //* Ajuste para un nuevo usuario y sus roles
//     {
//         user: "gabrielUser",
//         pwd: "admin123",
//         roles: [
//             { role: "usuarioEstandar", db: "cineCampus"}, // *Asignacion de roles
//             { role: "usuarioVip", db: "cineCampus"},
//         ]
//     }
// )

/**
 * TODO: LA SIGUIENTE CLASE Y METODOS ES EXCLUSIVAMENTE PARA USERS
 * ! IMPORTANTE ACLARAR QUE LOS METODOS DE CREAR Y VISUALIZAR SE EJECUNTAN A LA VEZ
 */
import { connect } from '../../helpers/db/connect.js';

export class Users extends connect {
  static instance;
  constructor() {
    if (typeof Users.instance === 'object') {
      return Users.instance;
    }
    super();
    Users.instance = this;
    return this;
  }

  async createUser(username, password, roles) {
    try {
      const result = await this.db.command({
        createUser: username,
        pwd: password,
        roles: roles
      });

      console.log('Usuario creado:', result);
    } catch (err) {
      console.error('Error al crear el usuario:', err);
    }
  }
  /** 
  *  TODO: METODO PARA VISUALIZAR USUARIOS 
  */

  async getAllUsers() {
    try {
      const users = await this.db.command({ usersInfo: 1 });
      return users.users; // La respuesta contiene una propiedad 'users' con la lista de usuarios
    } catch (err) {
      console.error('Error al obtener los usuarios:', err);
      throw err;
    }
  }

  async updateUser(username, updateFields) {
    try {
      const result = await this.db.command({
        updateUser: username,
        ...updateFields
      });

      console.log('Usuario actualizado:', result);
    } catch (err) {
      console.error('Error al actualizar el usuario:', err);
    }
  }
}


