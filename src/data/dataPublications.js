import { imagePublications } from "../../assets/images/publications";

export const dataPublications = [
  {
    idUser: '2345678901',
    idPublication: '09090908',
    description: 'Es increíble que podremos ver de nuevo una nueva película de harry potter.',
    image: imagePublications.image_1,
    datePublication: 'enero',
    reactions: [12322,123123,123123],
    comments: [
      {
        idUser: '4567890123',
        idComment: '123123123',
        comment:'ya han pasado muchísimos años',
      },
      {
        idUser: '4567890123',
        idComment: '123123124',
        comment:'tendré que sacar un dia entero para ponerme al dia',
      },
      {
        idUser: '4567890123',
        idComment: '123123125',
        comment:'mi momento a llegado',
      },
    ],
  },
  {
    idUser: '4567890123',
    idPublication: '09090907',
    description: 'Linterna Verde - Avance avance | Tom Holanda 2024',
    image: imagePublications.image_2,
    datePublication: 'enero',
    reactions: [12322,123123,123123,53453,1123,123123],
    comments: [
    ],
  },
  {
    idUser: '1234567890',
    idPublication: '09090909',
    description: 'Hoy solo disfrutare el paisaje, después vuelvo a la realidad.',
    image: imagePublications.image_3,
    datePublication: 'enero',
    reactions: [12322,123123,123123,53453,1123,123123],
    comments: [
      {
        idUser: '4567890123',
        idComment: '123123125',
        comment:'que panorama tan hermosos!!',
      },
    ],
  },
  {
    idUser: '5678901234',
    idPublication: '090909072',
    description: 'Linterna Verde - Avance avance | Tom Holanda 2024',
    image: imagePublications.image_2,
    datePublication: 'enero',
    reactions: [12322,123123,123123,53453,1123,123123],
    comments: [
    ],
  },
  {
    idUser: '5678901234',
    idPublication: '09090906',
    description: 'Definitivamente Negan es y sera el mejor personaje de esta franquicia',
    image: imagePublications.image_4,
    datePublication: 'enero',
    reactions: [12322,123123,123123,53453,1123,123123],
    comments: [
      {
        idUser: '4567890123',
        idComment: '123123125',
        comment:'Negan es lo mejor de lo mejor',
      },
    ],
  },
  {
    idUser: '9012345678',
    idPublication: '09090905',
    description: '¿algo mejor que acampar con buena compañía?',
    image: imagePublications.image_5,
    datePublication: 'enero',
    reactions: [],
    comments: [
      {
        idUser: '4567890123',
        idComment: '123123125',
        comment:'Espero que la pasen muy bien',
      },
    ],
  },
];
