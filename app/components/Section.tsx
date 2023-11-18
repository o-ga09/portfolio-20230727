"use client";
import { FC, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/styles.module.css";
import Image from "next/image";

export const Title: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <div
        ref={ref}
        style={{ opacity: inView ? 1 : 0, transition: "opacity 3s" }}
        className={styles.title}
      >
        <h1>{inView && "要素が表示されました！"}</h1>
      </div>
    </>
  );
};

interface SectionProps {
  index: number;
}

export const Section: React.FC<SectionProps> = ({ index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <>
      <section id={styles.section}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            width: inView ? "40%" : "1px",
            left: index % 2 == 0 ? "55%" : "5%",
            transform: inView ? "translateX(0)" : "translateX(-50%)",
          }}
          className={styles.imgWrapper}
        >
          <h2
            style={{
              transform: inView ? "scale(1)" : "scale(0)",
              transition: "1s ease-out",
            }}
            id={styles.h2}
          >
            イメージ画像
          </h2>
          {inView && (
            <Image
              src={"/main-image.jpg"}
              alt={"イメージ画像"}
              width={1}
              height={1}
              className={styles.img}
            />
          )}
        </div>
      </section>
    </>
  );
};
