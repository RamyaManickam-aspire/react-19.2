import { useContext } from "react";
import { UserContext } from "./user/userContect";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <p>{user}</p>
      <button onClick={() => setUser("Giri")}>Set Name</button>
    </>
  );
};
export default Home;
