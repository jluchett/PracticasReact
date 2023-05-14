import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";
function App() {
  const users = [
    {
      name: "Jorge Luchetta",
      userName: "jluchett",
      isfollowing: true,
    },
    {
      name: "Miguel Angel Duran",
      userName: "midudev",
      isfollowing: true,
    },
    {
      name: "Santiago Luchetta",
      userName: "yorkel18",
      isfollowing: false,
    },
  ];
  return (
    <section className="App">
      {users.map(({ name, userName, isfollowing }) => (
        <TwitterFollowCard
          name={name}
          username={userName}
          isfollowing={isfollowing}
        />
      ))}
    </section>
  );
}

export default App;
