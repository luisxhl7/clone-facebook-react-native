import { videos } from "../../assets/videos/index";

export const dataReels = [
  {
    idUser: '5678901234',
    idPublication: '090909069',
    description: 'BM el personaje mas tierno y a la vez el mas solitario de hora de aventura.',
    image: videos.reel_1,
    date: new Date(),
    reactions: [12322,123123,123123,53453,1123,123123],
    comments: [
      {
        idUser: '4567890123',
        idComment: '123123123',
        comment:'El mejor de todos los tiempos!!!',
      },
      {
        idUser: '4567890123',
        idComment: '123123124',
        comment:'Extraño hora de aventura :(',
      },
    ],
  },
  {
    idUser: '2345678901',
    idPublication: '09090908651123',
    description: 'Un carrito asi para rodar por Medellin.',
    image: videos.reel_4,
    date: new Date(),
    reactions: [],
    comments: [
      {
        idUser: '4567890123',
        idComment: '123123123',
        comment:'ese coche en Medellin seria la sensación',
      },
    ],
  },
  {
    idUser: '4567890123',
    idPublication: '1234090907',
    description: 'Datos del espacio que debes saber antes de morir.',
    image: videos.reel_3,
    date: new Date(),
    reactions: [12322,123123,123123,53453,1123,123123],
    comments: [
      {
        idUser: '4567890123',
        idComment: '123123123',
        comment:'No tenia ni idea de estos datos!!',
      },
    ],
  },
  {
    idUser: '1234567890',
    idPublication: '0909120909',
    description: 'Uno de los mejores deportivos que existen en mi opinion.',
    image: videos.reel_2,
    date: new Date(),
    reactions: [12322,123123,123123,53453,1123,123123],
    comments: [
      {
        idUser: '4567890123',
        idComment: '123123123',
        comment:'que belleza como ruge',
      },
    ],
  },
  {
    idUser: '9012345678',
    idPublication: '0909056905',
    description: '¿Como hacen para que salga fuego de los mofles?',
    image: videos.reel_4,
    date: new Date(),
    reactions: [12322,123123,123123,53453,1123,123123],
    comments: [
      {
        idUser: '4567890123',
        idComment: '123123123',
        comment:'Algún dia tendré uno similar',
      },
    ],
  },
];
