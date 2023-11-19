"use client";
import { FC, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/styles.module.css";
import Image from "next/image";
import { title } from "process";

export const Title = ({ title }: { title: string }) => {
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
        <h1>{inView && title}</h1>
      </div>
    </>
  );
};

interface SectionProps {
  index: number;
  contents: string;
  explain: string;
}

export const Section: React.FC<SectionProps> = ({
  index,
  contents,
  explain,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <>
      <section className={styles.section}>
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
            className={styles.h2}
          >
            {contents}
          </h2>
          {inView && (
            <Image
              src={`/${index + 5}.png`}
              alt={"イメージ画像"}
              fill
              className={styles.img}
            />
          )}
        </div>
        <div
          style={{
            position: "absolute",
            left: index % 2 == 0 ? "5%" : "47%",
            width: "50%",
            padding: "5px",
          }}
        >
          <p
            style={{
              transform: inView ? "scale(1)" : "scale(0)",
              transition: "1s ease-out",
              fontSize: "2rem",
              letterSpacing: "2px",
            }}
          >
            {explain}
          </p>
        </div>
      </section>
    </>
  );
};
