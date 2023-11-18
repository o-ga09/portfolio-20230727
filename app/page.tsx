import { FC } from "react";
import { Title, Section } from "./components/Section";
import styles from "../styles/styles.module.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

const Home: FC = () => {
  return (
    <div id={styles.body}>
      <Header title={"title"} />
      <Title />
      {[...Array(6)].map((_, index) => (
        <Section key={index} index={index} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
