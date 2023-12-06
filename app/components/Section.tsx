"use client";
import { FC, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/styles.module.css";
import Image from "next/image";
import { title } from "process";
import { Box, Heading, Text } from "../common/components";

export const Title = ({ title }: { title: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <Box
        ref={ref}
        style={{ opacity: inView ? 1 : 0, transition: "opacity 3s" }}
        position={"absolute"}
        top={"5%"}
        left={"50%"}
        transform={"translateX(-50%)"}
        zIndex={1}
        opacity={0}
      >
        <Heading
          as={"h1"}
          textAlign={"center"}
          h={"100%"}
          fontSize={{ base: "1.5rem", xl: "2rem" }}
        >
          {inView && title}
        </Heading>
      </Box>
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
      <Box
        as="section"
        position={"relative"}
        h={"100vh"}
        w={"100%"}
        overflow={"hidden"}
        zIndex={1}
        color={"white"}
      >
        <Box
          ref={ref}
          position={"relative"}
          style={{
            opacity: inView ? 1 : 0,
            width: inView ? "40%" : "1px",
            left: index % 2 == 0 ? "55%" : "5%",
            transform: inView ? "translateX(0)" : "translateX(-50%)",
          }}
          top={{ base: "35%", xl: "40%" }}
          h={"40%"}
          overflow={"hidden"}
          transition={"opacity 1s, transform 1s"}
          w={{ base: "100%", xl: "50%" }}
        >
          <Heading
            as={"h2"}
            style={{
              transform: inView ? "scale(1)" : "scale(0)",
              transition: "1s ease-out",
            }}
            position={"absolute"}
            fontSize={"2rem"}
            top={"70%"}
            zIndex={2}
            letterSpacing={"2px"}
            opacity={1}
            transition={"all 0.2s"}
            color={"white"}
          >
            {contents}
          </Heading>
          {inView && (
            <Image
              src={`/${index + 5}.png`}
              alt={"イメージ画像"}
              fill
              sizes="40vw"
            />
          )}
        </Box>
        {index % 2 == 0 ? (
          <>
            <Box
              position={"absolute"}
              p={4}
              w={{ base: "100%", xl: "50%" }}
              top={{ base: "70%", xl: "40%" }}
              left={{ base: "0", xl: "5%" }}
            >
              <Text
                style={{
                  transform: inView ? "scale(1)" : "scale(0)",
                  transition: "1s ease-out",
                  letterSpacing: "2px",
                }}
                fontSize={{ base: "1rem", md: "2rem" }}
                fontWeight={"bold"}
                textColor={"gray.300"}
                p={4}
                alignItems={"center"}
              >
                {explain}
              </Text>
            </Box>
          </>
        ) : (
          <>
            <Box
              position={"absolute"}
              p={4}
              w={{ base: "100%", xl: "50%" }}
              top={{ base: "70%", xl: "40%" }}
              left={{ base: "0", xl: "47%" }}
            >
              <Text
                style={{
                  transform: inView ? "scale(1)" : "scale(0)",
                  transition: "1s ease-out",
                  letterSpacing: "2px",
                }}
                fontSize={{ base: "1rem", md: "2rem" }}
                fontWeight={"bold"}
                textColor={"gray.300"}
                p={4}
                alignItems={"center"}
              >
                {explain}
              </Text>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
