import { User } from "../../types.d";

const Card = ({ user }: { user: User }) => {
  return (
    <div className="rounded-lg bg-fuchsia-200 mr-2 mb-2 flex flex-col items-center font-mono">
      <img src={`https://robohash.org/${user.id}?200x200`} alt="robots" />
      <h1 className="mt-2">{user.firstName}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default Card;
