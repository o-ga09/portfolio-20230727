"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "../common/components";
import { Sacramento } from "next/font/google";

const SacramentoFont = Sacramento({
  weight: "400",
  subsets: ["latin-ext"],
});

export const Title = ({ title }: { title: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <Box
        w={"100%"}
        h={"80vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        ref={ref}
        style={{ opacity: inView ? 1 : 0, transition: "opacity 3s" }}
        zIndex={1}
        opacity={0}
      >
        <Heading as={"h1"}>
          <Text fontSize={{ base: "4rem", xl: "8rem" }}>{inView && title}</Text>
        </Heading>
      </Box>
    </>
  );
};

export const ProfileSection = () => {
  const sectionTitle = "自己紹介";
  const explainList = [
    "オーガ",
    "２６歳",
    "新潟出身",
    "東京",
    "エンジニア",
    "パスタやお酒",
  ];
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
    >
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {sectionTitle}
        </Heading>
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          alignItems={"center"}
        >
          {explainList.map((item, index) => (
            <UnorderedList
              key={index}
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              listStyleType={"none"}
            >
              <ListItem m={1}>{item}</ListItem>
            </UnorderedList>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export const SkillSection = () => {
  const sectionTitle = "スキル";
  const explainList = [
    "バックエンド開発",
    "フロントは少しです",
    "保守の経験や障害対応",
  ];
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
    >
      <Box
        w={"100%"}
        h={"60%"}
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          w={{ base: "100%", xl: "30%" }}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {sectionTitle}
        </Heading>
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={{ base: "100%", xl: "30%" }}
          alignItems={"center"}
        >
          {explainList.map((item, index) => (
            <UnorderedList
              key={index}
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              listStyleType={"none"}
            >
              <ListItem m={1}>{item}</ListItem>
            </UnorderedList>
          ))}
        </Box>
      </Box>
      <Box
        w={"100%"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text display={"flex"} flexDirection={"row"} marginBottom={4}>
          {" "}
          <a
            href="https://www.cprogramming.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
              alt="c"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://dart.dev" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
              alt="dart"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://flutter.dev" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
              alt="flutter"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://cloud.google.com" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
              alt="gcp"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://golang.org" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
              alt="go"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://jestjs.io" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
              alt="jest"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://kubernetes.io" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
              alt="kubernetes"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
        </Text>
        <Text display={"flex"} flexDirection={"row"}>
          <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
              alt="nextjs"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://redis.io" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
              alt="redis"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
              alt="vuejs"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://vuetifyjs.com/en/" target="_blank" rel="noreferrer">
            {" "}
            <Image
              src="https://bestofjs.org/logos/vuetify.svg"
              alt="vuetify"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
        </Text>
      </Box>
    </Box>
  );
};

export const HobbySection = () => {
  const sectionTitle = "趣味";
  const explainList = [
    "モンハン",
    "ドラクエ",
    "ゼノブレイド",
    "ハイキュー",
    "ダーツ",
  ];
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
    >
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {sectionTitle}
        </Heading>
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          alignItems={"center"}
        >
          {explainList.map((item, index) => (
            <UnorderedList
              key={index}
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              listStyleType={"none"}
            >
              <ListItem m={1}>{item}</ListItem>
            </UnorderedList>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export const ProductSection = () => {
  const sectionTitle = "プロダクト";
  const explainList = "こちらです。";
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
    >
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {sectionTitle}
        </Heading>
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
          fontSize={32}
        >
          {explainList}
        </Box>
      </Box>
    </Box>
  );
};

export const LoveSection = () => {
  const sectionTitle = "推し";
  const explainList = "山本彩";
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
    >
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {sectionTitle}
        </Heading>
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
          fontSize={32}
        >
          {explainList}
        </Box>
      </Box>
    </Box>
  );
};

export const FutureSection = () => {
  const sectionTitle = "将来";
  const explainList = "エンジニアでワクワクできるサービスを作りたいです";
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
    >
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {sectionTitle}
        </Heading>
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={{ base: "100%", xl: "30%" }}
          h={"30%"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
          fontSize={32}
        >
          {explainList}
        </Box>
      </Box>
    </Box>
  );
};
