import Avatar from "./Avatar";
import Card from "./Card";

export type Person = {
    name: string;
    profession: string;
    avatar: string;
    awards: Array<string>;
    discovery: string;
}

export default function Profile({ person }: { person: Person }) {
  return (
    <Card className={'profile mb-3'}>

      <h2>{person.name}</h2>
      <Avatar src={person.avatar} alt={person.name} width={70} height={70} className="mb-3" />
      <ul>
        <li>
          <b>Profession : </b>
          {person.profession}
        </li>
        <li>
          <b>Récompenses : {person.awards.length} </b>(
          {person.awards.join(", ")})
        </li>
        <li>
          <b>A découvert : </b>
          {person.discovery}
        </li>
      </ul>
    </Card>
  );
}