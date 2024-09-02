/** 
 * TODO: Crea el rol de administrador de la base de datos
 */

db.createRole({
  role: "Administrador",
  privileges: [
      {
          resource: { db: "CineCampus", collection: "cliente" },
          actions: ["find", "insert", "update", "remove"]
      },
      {
          resource: { db: "CineCampus", collection: "funcion" },
          actions: ["find", "insert", "update", "remove"]
      },
      {
          resource: { db: "CineCampus", collection: "lugar" },
          actions: ["find", "insert", "update", "remove"]
      },
      {
          resource: { db: "CineCampus", collection: "pagos" },
          actions: ["find", "insert", "update", "remove"]
      },
      {
          resource: { db: "CineCampus", collection: "pelicula" },
          actions: ["find", "insert", "update", "remove"]
      }
  ],
  roles: [
    {role: "userAdmin", db:"CineCampus"},
  ]
});

/** 
 * TODO: Crea el rol de un usuario estandar
 */

db.createRole({
    role: "usuarioEstandar",
    privileges: [
      {
        resource: { db: "CineCampus", collection: "cliente" }, //* Se le asignan permisos para crear usuario 
        actions: ["insert", "find"]
      },
      {
        resource: { db: "CineCampus", collection: "funcion" }, //* Y para ver las funciones del cine
        actions: ["insert", "find"]
      }
    ],
    roles: []
});

/** 
 * TODO: Crea el rol de usuarioVip con permisos especiales
 */

db.createRole({
    role: "usuarioVip",
    privileges: [
      {
        resource: { db: "CineCampus", collection: "pelicula" },
        actions: ["find"]
      }
    ],
    roles: ["usuarioEstandar"]
});