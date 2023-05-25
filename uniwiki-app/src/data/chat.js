import React from "react";

// TODO importando imágenes USADAS MUCHAS VECES NO ELIMINAR!
import avatar from './img/avatar.jpg';
import avatar2 from './img/avatar2.jpg';
import avatar3 from './img/avatar3.png';
import avatar4 from './img/avatar4.jpg';

// llamando desde chat.jsx
export const chatData = [
  {
    image:
      avatar2,
    message: 'Juan Ingresó al Grupo!',
    desc: 'Hola de Nuevo',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'Sebastían Novoa',
    desc: 'Actualización de Información',
    time: '1:56 AM',
  },
  {
    image:
      avatar4,
    message: 'Serio Zamora',
    desc: 'Revisar los Pendientes',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Daniel Caicedo',
    desc: 'Nuevas Tareas Asinadas',
    time: '1:12 AM',
  },
];