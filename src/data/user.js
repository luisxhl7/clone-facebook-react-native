import { imageProfile } from "../../assets/images/users";
import { dataNotification } from "./dataNotifications";

export const user =  {
  id: '1234567890',
  name: 'Luis Carlos',
  lastName: 'Hernandez Lopez',
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
  notifications: dataNotification
}