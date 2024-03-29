import { Box, Flex, Heading, Text } from "../common/components";
import { ArticleCardButton, OutPutCardButton } from "./Button";
interface Profileprops {
  title: string;
  contents: string;
}
interface Skillprops {
  title: string;
  evaluate: number;
  index: number;
}
interface OutPutprops {
  title: string;
}
interface Articleprops {
  title: string;
  index: number;
}
interface Examprops {
  title: string;
}
interface Blogprops {
  title: string;
  postday: string;
  slug: string;
  image: string;
}

export const ProfileCard = (props: Profileprops) => {
  const title = props.title;
  const contents = props.contents;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="3px 3px 10px 2px rgba(133, 224, 92, 0.4)"
      borderRadius="26px"
      w="300px"
      h="200px"
      fontSize="30px"
      bg="#adf0a2"
    >
      <Flex direction="column">
        <Heading p={4} textAlign="center" fontSize={24}>
          {title}
        </Heading>
        <Text p={4} textAlign="center" fontSize={16}>
          {contents}
        </Text>
      </Flex>
    </Box>
  );
};

export const OutPutCard = (props: OutPutprops) => {
  const title = props.title;
  return (
    <>
      <OutPutCardButton title={title} />
    </>
  );
};

export const ArticleCard = (props: Articleprops) => {
  const title = props.title;
  const index = props.index;
  return (
    <>
      <ArticleCardButton title={title} index={index} />
    </>
  );
};

export const ExamCard = (props: Examprops) => {
  const title = props.title;
  return (
    <Box w="300px" h="100px">
      <Text textAlign="center">{title}</Text>
    </Box>
  );
};
