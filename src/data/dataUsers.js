import { imagePublications } from "../../assets/images/publications";
import { imageProfile } from "../../assets/images/users";

export const usuariosFacebook = [
  {
    id: '1234567890',
    name: 'Luis Carlos',
    lasName: 'Hernandez Lopez',
    email: 'usuario1@correo.com',
    profilePicture: imageProfile.profile_1,
    birthDate: '01/01/1990',
    gender: 'masculino',
    location: 'Colombia, Medellin',
    friendsList: [
      {
        id: '2345678901',
        name: 'María Fernanda'
      },
      {
        id: '3456789012',
        name: 'Juan Pablo'
      },
      {
        id: '4567890123',
        name: 'Ana María'
      },
      {
        id: '5678901234',
        name: 'Pedro José'
      }
    ],
  },
  {
    id: '2345678901',
    name: 'María Fernanda',
    lasName: 'González Pérez',
    email: 'usuario2@correo.com',
    profilePicture: imageProfile.profile_2,
    birthDate: '02/02/1991',
    gender: 'femenino',
    location: 'México, Ciudad de México',
    friendsList: [
      {
        id: '5678901234',
        name: 'Pedro José'
      }
    ],
  },
  {
    id: '3456789012',
    name: 'Juan Pablo',
    lasName: 'Rodríguez García',
    email: 'usuario3@correo.com',
    profilePicture: imageProfile.profile_7,
    birthDate: '03/03/1992',
    gender: 'masculino',
    location: 'España, Madrid',
    friendsList: [
      {
        id: '2345678901',
        name: 'María Fernanda'
      },
      {
        id: '4567890123',
        name: 'Ana María'
      },
      {
        id: '5678901234',
        name: 'Pedro José'
      }
    ],
  },
  {
    id: '4567890123',
    name: 'Ana María',
    lasName: 'Martínez González',
    email: 'usuario4@correo.com',
    profilePicture: imageProfile.profile_3,
    birthDate: '04/04/1993',
    gender: 'femenino',
    location: 'Argentina, Buenos Aires',
    friendsList: [
      {
        id: '2345678901',
        name: 'María Fernanda'
      },
      {
        id: '3456789012',
        name: 'Juan Pablo'
      },

    ],
  },
  {
    id: '5678901234',
    name: 'Pedro José',
    lasName: 'Pérez Rodríguez',
    email: 'usuario5@correo.com',
    profilePicture: imageProfile.profile_8,
    birthDate: '05/05/1994',
    gender: 'masculino',
    location: 'Chile, Santiago',
    friendsList: [
      {
        id: '2345678901',
        name: 'María Fernanda'
      },
      {
        id: '3456789012',
        name: 'Juan Pablo'
      },
      {
        id: '4567890123',
        name: 'Ana María'
      },
      {
        id: '5678901234',
        name: 'Pedro José'
      }
    ],
  },
  {
    id: '6789012345',
    name: 'María José',
    lasName: 'López Martínez',
    email: 'usuario6@correo.com',
    profilePicture: imageProfile.profile_4,
    birthDate: '06/06/1995',
    gender: 'femenino',
    location: 'Perú, Lima',
    friendsList: [
      {
        id: '2345678901',
        name: 'María Fernanda'
      },
      {
        id: '4567890123',
        name: 'Ana María'
      },
      {
        id: '5678901234',
        name: 'Pedro José'
      }
    ],
    publications: [
      {
        description: 'que tal les parece esto',
        reactions: 200,
        comments: 10,
        image: imagePublications.image_1,
        date: new Date()
      }
    ],
  },
  {
    id: '7890123456',
    name: 'Juan Carlos',
    lasName: 'Gómez Fernández',
    email: 'usuario7@correo.com',
    profilePicture: imageProfile.profile_9,
    birthDate: '07/07/1996',
    gender: 'masculino',
    location: 'Uruguay, Montevideo',
    friendsList: [
      {
        id: '2345678901',
        name: 'María Fernanda'
      },
      {
        id: '4567890123',
        name: 'Ana María'
      },
      {
        id: '5678901234',
        name: 'Pedro José'
      }
    ],
  },
  {
    id: '8901234567',
    name: 'Fernanda',
    lasName: 'Martínez López',
    email: 'usuario8@correo.com',
    profilePicture: imageProfile.profile_5,
    birthDate: '08/08/1997',
    gender: 'femenino',
    location: 'Ecuador, Quito',
    friendsList: [
    ],
  },
  {
    id: '9012345678',
    name: 'Pablo',
    lasName: 'Hernández Rodríguez',
    email: 'usuario9@correo.com',
    profilePicture: imageProfile.profile_10,
    birthDate: '09/09/1998',
    gender: 'masculino',
    location: 'Paraguay, Asunción',
    friendsList: [
      {
        id: '2345678901',
        name: 'María Fernanda'
      },
      {
        id: '3456789012',
        name: 'Juan Pablo'
      },
      {
        id: '4567890123',
        name: 'Ana María'
      },
      {
        id: '5678901234',
        name: 'Pedro José'
      }
    ],
  },
  {
    id: '0123456789',
    name: 'Carolina',
    lasName: 'García Pérez',
    email: 'usuario10@correo.com',
    profilePicture: imageProfile.profile_6,
    birthDate: '10/10/1999',
    gender: 'femenino',
    location: 'Brasil, São Paulo',
    friendsList: [
      {
        id: '2345678901',
        name: 'María Fernanda'
      },
      {
        id: '3456789012',
        name: 'Juan Pablo'
      },
      {
        id: '4567890123',
        name: 'Ana María'
      },
      {
        id: '5678901234',
        name: 'Pedro José'
      }
    ],
  }
];
