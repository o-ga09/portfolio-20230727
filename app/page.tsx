import { FC } from "react";
import { Title, Section } from "./components/Section";
import styles from "../styles/styles.module.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import MouseTracking from "./components/MouseTracking";
import HorizontalScroll from "./components/Horizonscroll";

const Home: FC = () => {
  return (
    <div className={styles.body}>
      <Header title={"title"} />
      <Title />
      {[...Array(6)].map((_, index) => (
        <Section key={index} index={index} />
      ))}
      <MouseTracking />
      <HorizontalScroll />
      <Footer />
    </div>
  );
};

export default Home;
