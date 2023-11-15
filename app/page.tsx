import { FC } from "react";
import { Title, Section } from "./components/Section";

const Home: FC = () => {
  return (
    <div>
      <Title />
      {[...Array(6)].map((_, index) => (
        <Section key={index} index={index} />
      ))}
    </div>
  );
};

export default Home;
