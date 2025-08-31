import type { Person } from "./Profile";
import Profile from "./Profile";

/* eslint-disable no-irregular-whitespace */
export default function Gallery()
{
    function getImageUrl(imageId: string, size = 's') {
      return "https://i.imgur.com/" + imageId + size + ".jpg";
    }

    const scientists: Array<Person> = [
      {
        name: "Maria Skłodowska-Curie",
        profession: "physicienne et chimiste",
        avatar: getImageUrl("szV5sdG"),
        awards: [
          "Prix Nobel de Physique",
          "Prix Nobel de Chimie",
          "Medaille Davy",
          "Médaille Matteucci",
        ],
        discovery: "le Polonium (élément chimique)",
      },
      {
        name: "Katsuko Saruhashi",
        profession: "géochimiste",
        avatar: getImageUrl("YfeOqp2"),
        awards: [
          "Prix Miyake de géochimie",
          "Prix Tanaka"
        ],
        discovery: "une méthode de mesure du dioxyde de carbone dans l’eau de mer",
      }
    ];

    const profiles = scientists.map((scientist) => {
        return <Profile person={scientist} />
    })
      
    return (
      <div>
        <h1>Scientifiques remarquables</h1>

        {profiles}
      </div>
    );
}