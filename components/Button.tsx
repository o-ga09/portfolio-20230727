"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "../common/components";
import { blogslug } from "../lib/const/const";

export const Gopher = () => {
  const push = () => {
    console.log("push");
  };

  return (
    <Box
      w={{ base: "65px", md: "95px" }}
      h={{ base: "65px", md: "95px" }}
      margin="auto"
    >
      <Button w="100%" h="100%" onClick={() => push()} p={0} variant="ghost">
        <Image src="Gophersvg.svg" alt="gopher" />
      </Button>
    </Box>
  );
};

export const GopherPink = () => {
  const push = () => {
    console.log("push");
  };

  return (
    <Box
      w={{ base: "65px", md: "95px" }}
      h={{ base: "65px", md: "95px" }}
      margin="auto"
    >
      <Button w="100%" h="100%" onClick={() => push()} p={0} variant="ghost">
        <Image src="Gophersvg_pink.svg" alt="gopher" />
      </Button>
    </Box>
  );
};

export const GopherYellow = () => {
  const push = () => {
    console.log("push");
  };

  return (
    <Box
      w={{ base: "65px", md: "95px" }}
      h={{ base: "65px", md: "95px" }}
      margin="auto"
    >
      <Button w="100%" h="100%" onClick={() => push()} p={0} variant="ghost">
        <Image src="Gophersvg_yellow.svg" alt="gopher" />
      </Button>
    </Box>
  );
};

interface OutPutprops {
  title: string;
}
export const OutPutCardButton = (props: OutPutprops) => {
  const title = props.title;
  const push = () => {
    window.location.href = "https://pawafes-calc-20220223.dt.r.appspot.com/";
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="3px 3px 10px 2px rgba(133, 224, 92, 0.4)"
      borderRadius="26px"
      w="300px"
      h="100px"
      fontSize="30px"
      bg="#adf0a2"
    >
      <Button
        w="100%"
        h="100%"
        onClick={() => push()}
        p={0}
        bg="#adf0a2"
        _hover={{ bg: "#adf0a2" }}
      >
        <Flex direction="column">
          <Heading textAlign="center" fontSize={24}>
            {title}
          </Heading>
        </Flex>
      </Button>
    </Box>
  );
};

interface Articleprops {
  title: string;
  index: number;
}
export const ArticleCardButton = (props: Articleprops) => {
  const title = props.title;
  const index = props.index;
  const push = (index: number) => {
    switch (index) {
      case 0:
        window.location.href =
          "https://qiita.com/o-ga/items/6abb7081d470926cb128";
        break;
      case 1:
        window.location.href = "https://zenn.dev/o_ga/articles/51fb95bfcaf233";
        break;
      case 2:
        window.location.href =
          "https://qiita.com/o-ga/items/c2ff5bbff7d76d4eace2";
        break;
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="3px 3px 10px 2px rgba(133, 224, 92, 0.4)"
      borderRadius="26px"
      w="300px"
      h="100px"
      fontSize="30px"
      bg="#adf0a2"
    >
      <Button
        w="100%"
        h="100%"
        onClick={() => push(index)}
        p={0}
        bg="#adf0a2"
        _hover={{ bg: "#adf0a2" }}
      >
        <Flex direction="column">
          <Heading textAlign="center" fontSize={16}>
            {title}
          </Heading>
        </Flex>
      </Button>
    </Box>
  );
};

interface Blogprops {
  title: string;
  postday: string;
  slug: string;
  image: string;
}
export const BlogCardButton = (props: Blogprops) => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const title = props.title;
  const slug = props.slug;
  const postday = props.postday;
  const image = props.image;
  const push = (index: number) => {
    console.log(blogslug[index]);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="3px 3px 10px 2px rgba(133, 224, 92, 0.4)"
      borderRadius="26px"
      w={isSmallerThan600 ? "200px" : "300px"}
      h={isSmallerThan600 ? "200px" : "300px"}
      bg="#adf0a2"
      onClick={() => {
        window.location.href = `/blogs/${slug}`;
      }}
      _hover={{ bg: "#adf0a2" }}
    >
      <Flex direction="column">
        <Image src={`/${image}`} w="100%" h="100px" p={1} alt=""></Image>
        <Heading textAlign="center" fontSize={16}>
          {title}
        </Heading>
        <Text p={2} fontSize={16} textAlign="center" color="gray.700">
          {postday}
        </Text>
      </Flex>
    </Box>
  );
};
