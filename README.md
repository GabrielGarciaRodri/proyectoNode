📕 **Título: CineCampus**

------

**Tiempo de ejecución**: 4 Dias

**Nivel de dificultad:** ★★★★☆

### **Problematica**

CineCampus es una empresa de entretenimiento que se especializa en ofrecer una experiencia de cine completa y personalizada. La empresa desea desarrollar una aplicación web que permita a los usuarios seleccionar películas, comprar boletos y asignar asientos de manera eficiente y cómoda. La aplicación también ofrecerá opciones de descuento para usuarios con tarjeta VIP y permitirá realizar compras en línea.

### **Objetivo**

Desarrollar una serie de APIs para la aplicación web de CineCampus utilizando MongoDB como base de datos. Las APIs deberán gestionar la selección de películas, la compra de boletos, la asignación de asientos, y la implementación de descuentos para tarjetas VIP, con soporte para diferentes roles de usuario.

### **Requisitos Funcionales**

1. Selección de Películas:
   - **API para Listar Películas:** Permitir la consulta de todas las películas disponibles en el catálogo, con detalles como título, género, duración y horarios de proyección.

     ```js
     /**
     * *Las siguientes dos lineas de codigo se encargan de llamar el metodo 
     * * usado en la primer API encargada de consultar las peliculas disponibles
     * * en el catalogo  con detalles como titulo, genero, etc.   
     */
     
       let mongo = new pelicula()
       console.log(await mongo.getAllPeliculasConLugarYDuracion());
     ```

     

   - **API para Obtener Detalles de Película:** Permitir la consulta de información detallada sobre una película específica, incluyendo sinopsis.

     ```js
     
     /** 
       * * Las siguientes dos lineas de codigo se encargan de llamar el metodo 
       * * usado en la segunda API encargada de consultar los detalles de una pelicula
       * * especifica llamandola por el _id.
     */
       let mongo = new pelicula()
       console.log(await mongo.getPeliculaById("66a7f7228d77080ab692ebed")); 
     //* Ingresa una _id valida, en caso contrario enviará una alerta
     
     ```

     

2. Compra de Boletos:
   - **API para Comprar Boletos:** Permitir la compra de boletos para una película específica, incluyendo la selección de la fecha y la hora de la proyección. (NO NECESARIA)

   - **API para Verificar Disponibilidad de Asientos:** Permitir la consulta de la disponibilidad de asientos en una sala para una proyección específica.

     ```js
     
     /**
      * TODO: Esta parte del codigo en main.js llama los metodos usados para las API's de asientos, 
      * TODO: especificamente las siguientes 9 lineas de codigo se encargan de buscar cuantos asientos 
      * TODO: disponibles hay para cada funcion.
     */
         let mongo = new funcion() 
         let funcionId = "66a805ad8d77080ab692ebf4"; 
     	//* Ingresa una _id valida, en caso contrario enviará una alerta
         let funcionData = await mongo.getAllfunciones({ _id: funcionId });
         if (funcionData && funcionData.length > 0) {
         const asientosDisponibles = await mongo.calculateAsientosDisponibles(funcionData[0]);
         console.log(asientosDisponibles); 
         //* debería imprimir { normal: 18, preferencial: 9 }
         } else {
         console.log("No se encontró la función con el ID especificado"); 
             //! Alerta si la id agregada en la variable funcionId está mal escrita 
         }
     ```

     

3. Asignación de Asientos:
   - **API para Reservar Asientos:** Permitir la selección y reserva de asientos para una proyección específica.

     ```js
     /**
      *   TODO: Las siguientes 9 lineas de codigo son usadas para que funcione la api de agregar una reserva 
      * * Los datos a cambiar son a conveniencia del usuario.
      */
         const mongo = new funcion();
         const funcionId = new ObjectId("66a805ad8d77080ab692ebf5"); 
     	//* _id requerido para buscar la funcion a actualizar
         const reserva = {
         id_cliente: new ObjectId ("66a7f65b8d77080ab692ebe9"), //* o un ID de cliente válido
         tipo_asiento: "preferencial", //* o "normal"
         costo: 50, // costo de la reserva (note the decimal point)
         codigo_asiento: "F3" 
         };
     	console.log(await mongo.asignarReserva(funcionId, reserva))
     
     ```

     

   - **API para Cancelar Reserva de Asientos:** Permitir la cancelación de una reserva de asiento ya realizada.

     ```js
     
     /**
      *   TODO: Las siguientes 4 lineas de codigo son usadas para que funcione la api para eliminar una reserva 
      * * Los datos a cambiar son a conveniencia del usuario.
      */
         const mongo = new funcion();
         const funcionId = new ObjectId("66a805ad8d77080ab692ebf5"); 
     	//* _id requerido para buscar la funcion a actualizar
         const codigo_asiento = "F3" 
         //* Asegurarse de cambiar el codigo_asiento para evitar inconvenientes
         console.log(await mongo.eliminarReserva(funcionId, codigo_asiento)) 
     	//* Deberia mostrar la informacion de todo el dato
     
     ```

     

4. Descuentos y Tarjetas VIP:
   - **API para Aplicar Descuentos:** Permitir la aplicación de descuentos en la compra de boletos para usuarios con tarjeta VIP. (NO NECESARIA)

   - **API para Verificar Tarjeta VIP:** Permitir la verificación de la validez de una tarjeta VIP durante el proceso de compra.

     ```js
     /**
      * TODO: Esta parte del codigo llama a los metodos para la API de validacion 
      * TODO: API #8
     */
         let mongo = new cliente();
     	let clienteId = new ObjectId ("66a7f65b8d77080ab692ebea");
     	//* Escribe el cliente que desea verificar
     	let numeroTarjeta = "2345678901234567"; 
     	//* Escribe el numero tarjeta del cliente a verificar
     	console.log(await mongo.verificarValidezTarjeta(clienteId, numeroTarjeta)); 
     	//* Debería mostrar si está verificado
     	// ! En caso contrario, asegurese de que esté digitando los parametros correctos
     ```

     

5. Roles Definidos:

   **Administrador:** Tiene permisos completos para gestionar el sistema, incluyendo la venta de boletos en el lugar físico. Los administradores no están involucrados en las compras en línea realizadas por los usuarios.

   ```js
   /** 
    * TODO: Crea el rol de administrador de la base de datos
    */
   
   db.createRole({
       role: "Administrador",
       privileges: [
         {
           resource: { db: "cineCampus", collection: "" },
           actions: ["find", "insert", "update", "remove"] //* En este rol me parecio practico que fuera un CRUD
         }
       ],
       roles: []
   });
   ```

   **Usuario Estándar:** Puede comprar boletos en línea sin la intervención del administrador.

   ```js
   /** 
    * TODO: Crea el rol de un usuario estandar
    */
   
   db.createRole({
       role: "usuarioEstandar",
       privileges: [
         {
           resource: { db: "CineCampus", collection: "cliente" }, //* Se le asignan permisos para crear usuario 
           actions: ["insert"]
         },
         {
           resource: { db: "CineCampus", collection: "funcion" }, //* Y para ver las funciones del cine
           actions: ["insert"]
         }
       ],
       roles: []
   });
   ```

   **Usuario VIP:** Puede comprar boletos en línea con descuentos aplicables para titulares de tarjetas VIP.

   ```js
   
   /** 
    * TODO: Crea el rol de usuarioVip con permisos especiales
    */
   
   db.createRole({
       role: "usuarioVip",
       privileges: [
         {
           resource: { db: "CineCampus", collection: "funcion" },
           actions: ["find", "insert"]
         },
         {
           resource: { db: "cineCampus", collection: "pelicula" },
           actions: ["find"]
         }
       ],
       roles: ["usuarioEstandar"]
   });
   ```

   **API para Crear Usuario:** Permitir la creación de nuevos usuarios en el sistema, asignando roles y privilegios específicos (usuario estándar, usuario VIP o administrador).

   ```js
     /**
      * TODO: Ejecucion de insercion de users a la base de datos
      */
   
     async function main() {  //* Define la funcion 
     const userManager = new Users(); //* Asigna los parametros
     const username = 'User1';
     const password = 'admin123';
     const roles = [
     { role: 'dbAdmin', db: 'CineCampus' },
     { role: 'userAdmin', db: 'CineCampus' },
     { role: 'readWrite', db: 'CineCampus' },
     { role: 'userAdminAnyDatabase', db: 'admin' },
     { role: 'dbAdminAnyDatabase', db: 'admin' },
     ];
     
     await userManager.createUser(username, password, roles); //* Ejecuta la promesa y el metodo
     }
     
     main(); //* Si los parametros están bien establecidos creará un usuario exitosamente
   ```

   **API para Obtener Detalles de Usuario:** Permitir la consulta de información detallada sobre un usuario, incluyendo su rol y estado de tarjeta VIP.

   ```js
   // IMPORTANTE!!!!! 
   // LOS METODOS DE CREAR Y VISUALIZAR USUARIOS SE USAN A LA VEZ
   // DESCRITO EN EL MAIN
   
   const users = await userManager.getAllUsers(); //* Metodo para visualizar los usuarios creados
   console.log('Usuarios:', users);
   ```

   **API para Actualizar Rol de Usuario:** Permitir la actualización del rol de un usuario (por ejemplo, cambiar de usuario estándar a VIP, o viceversa).

   ```js
   /** 
   *  TODO: LA SIGUIENTE FUNCION ES PARA EJECUTAR LA ACTUALIZACION DEL USER
   */  
     async function updateUser() {
       const userManager = new Users(); //* Declara los datos adecuados, de otra forma mostrará un error
       const username = 'User1';
       const updateFields = {
         pwd: 'newpassword123',
         roles: [{ role: 'readWrite', db: 'CineCampus' }]
       };
       await userManager.updateUser(username, updateFields);
     
       const updatedUsers = await userManager.getAllUsers();
       console.log('Usuarios actualizados:', updatedUsers);
     }
   
     async function main() { //* Declara la funcion main para update los usuarios
       await createUserAndShowUsers();
       await updateUser();
     }
     
     main(); //* Ejecuta la funcion 
   ```

   **API para Listar Usuarios:** Permitir la consulta de todos los usuarios del sistema, con la posibilidad de filtrar por rol (VIP, estándar o administrador).

6. Compras en Línea:
   - **API para Procesar Pagos:** Permitir el procesamiento de pagos en línea para la compra de boletos.
   - **API para Confirmación de Compra:** Enviar confirmación de la compra y los detalles del boleto al usuario.



# Plantilla:

```js
MONGO_USER = "mongo" 
MONGO_PORT =  
MONGO_PWD = "" 
MONGO_HOST = "mongodb://" 
MONGO_CLUSTER = "" 
MONGO_DB = "CineCampus"
```



### Cadena de conexion:

```js
mongodb://mongo:sxmPyeFKtCzCADfdGDrrnOqAXhktjGIG@monorail.proxy.rlwy.net:13940

```



### **Requisitos Técnicos**

- **Base de Datos:** Utilizar MongoDB para el almacenamiento de datos relacionados con películas, boletos, asientos, usuarios y roles.
- **Autenticación:** Implementar autenticación segura para el acceso a las APIs, utilizando roles de usuario para determinar los permisos y accesos (por ejemplo, usuarios VIP y usuarios estándar).
- **Autorización de Roles:** Asegurar que las APIs y las operaciones disponibles estén adecuadamente restringidas según el rol del usuario (por ejemplo, aplicar descuentos solo a usuarios VIP).
- **Documentación:** Proveer una documentación clara y completa para cada API, describiendo los endpoints, parámetros, y respuestas esperadas.
- **Recursos**
  - ![](https://i.ibb.co/SRdNPRr/draw-SQL-image-export-2024-07-25.png)

### **Rúbrica Evaluativa**

Los puntos a evaluar serán los siguientes:

### 1. Selección de Películas (20%)

- **0 puntos:** No se implementa la funcionalidad para listar películas ni obtener detalles de una película.
- **25 puntos:** La funcionalidad para listar películas o obtener detalles de una película está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para listar películas y obtener detalles de una película está implementada pero presenta errores menores o no proporciona todos los datos requeridos.
- **75 puntos:** La funcionalidad para listar películas y obtener detalles de una película está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para listar películas y obtener detalles de una película está completamente implementada, es eficiente, y proporciona toda la información requerida de manera clara.

### 2. Compra de Boletos (20%)

- **0 puntos:** No se implementa la funcionalidad para comprar boletos ni verificar la disponibilidad de asientos.
- **25 puntos:** La funcionalidad para comprar boletos o verificar la disponibilidad de asientos está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para comprar boletos y verificar la disponibilidad de asientos está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para comprar boletos y verificar la disponibilidad de asientos está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para comprar boletos y verificar la disponibilidad de asientos está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 3. Asignación de Asientos (20%)

- **0 puntos:** No se implementa la funcionalidad para reservar ni cancelar reservas de asientos.
- **25 puntos:** La funcionalidad para reservar o cancelar reservas de asientos está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para reservar y cancelar reservas de asientos está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para reservar y cancelar reservas de asientos está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para reservar y cancelar reservas de asientos está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 4. Descuentos y Tarjetas VIP (10%)

- **0 puntos:** No se implementa la funcionalidad para aplicar descuentos ni verificar la validez de tarjetas VIP.
- **25 puntos:** La funcionalidad para aplicar descuentos o verificar la validez de tarjetas VIP está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para aplicar descuentos y verificar la validez de tarjetas VIP está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para aplicar descuentos y verificar la validez de tarjetas VIP está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para aplicar descuentos y verificar la validez de tarjetas VIP está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 5. Gestión de Usuarios y Roles (10%)

- **0 puntos:** No se implementa la funcionalidad para gestionar usuarios ni roles.
- **25 puntos:** La funcionalidad para gestionar usuarios o roles está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para gestionar usuarios y roles está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para gestionar usuarios y roles está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para gestionar usuarios y roles está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 6. Compras en Línea (10%)

- **0 puntos:** No se implementa la funcionalidad para procesar pagos ni enviar confirmaciones de compra.
- **25 puntos:** La funcionalidad para procesar pagos o enviar confirmaciones de compra está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para procesar pagos y enviar confirmaciones de compra está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para procesar pagos y enviar confirmaciones de compra está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para procesar pagos y enviar confirmaciones de compra está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 7. Documentación y Entregables (10%)

- **0 puntos:** No se entrega la documentación requerida ni el código fuente en el repositorio de GitHub.
- **25 puntos:** La documentación o el código fuente están incompletos o presentan errores significativos.
- **50 puntos:** La documentación y el código fuente están mayormente completos, pero con algunos errores menores o faltantes.
- **75 puntos:** La documentación y el código fuente están correctos, con pequeños problemas de claridad o detalles menores faltantes.
- **100 puntos:** La documentación y el código fuente están completos, claros y bien organizados, proporcionando toda la información necesaria de manera eficiente.

### GitHub y Entrega de Proyecto

- 🚨 **Cancelación o Anulación del Proyecto** : No se entregó ningún repositorio, su visualización está oculta (o no compartida con el Trainer) o hubo adulteración después de la fecha y hora establecida para su entrega, ***Evidencia de clonación o conocido como `fork` de algún repositorio, distribución y/o copia de dicho trabajo por cualquier medio de comunicación (verbal, digital, entre otras), se asumirá como cancelación del proyecto de manera definitiva.*** 🚨
- **25 puntos**: Se creó el repositorio, pero en su rama principal no se encuentra el proyecto general ,al igual que algún archivo en relación al proyecto.
- **100 puntos**: Se creó exitosamente el repositorio, donde en su rama principal se encuentra el proyecto general y sus archivos en relación a ello, con evidencia de la participación del equipo completo de manera periódica.

