import ToggleDarkMode from "./Theme";
import {
  SunIcon,
  MoonIcon,
  Box,
  Heading,
  Link,
  Flex,
  Text,
  Input,
} from "../common/components/index";
import { GitHubRepo } from "./Icon";
import Image from "next/image";

export const Header = ({ title }: { title: string }) => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        h={"20vh"}
        alignItems={"center"}
        justifyContent={"space-between"}
        m={"0 auto"}
        p={4}
      >
        <Box p={4} display={"flex"} flexDirection={"row"}>
          <Image
            src={"/main-image.jpeg"}
            alt={"メイン画像"}
            width={100}
            height={100}
            style={{ marginRight: "1rem" }}
          />
          <Heading as={"h1"} display={"flex"} alignItems={"center"}>
            <Link href={"/"} textDecoration={"none"}>
              <Text>{title}</Text>
            </Link>
          </Heading>
        </Box>
        <Box p={4} letterSpacing={"2px"}>
          <Link href="/" textDecoration={"none"} marginLeft={4} fontSize={25}>
            Home
          </Link>
          <Link
            href="/blogs"
            textDecoration={"none"}
            marginLeft={4}
            fontSize={25}
          >
            Blogs
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export const BlogHeader = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={"center"}
        fontSize={"15px"}
        fontWeight={"bold"}
        p={"0 40px"}
        justifyContent={"space-between"}
        h={{ base: "250px", xl: "100px" }}
      >
        <Heading as={"h1"}>
          <Link
            href="/"
            textDecoration={"none"}
            w={"100px"}
            textAlign={"center"}
            fontSize={"20px"}
            backgroundImage={"linear-gradient(90deg, red.500, red.500)"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"left bottom"}
            backgroundSize={"0 3px"}
            transition={"background-size 0.6s"}
            _hover={{ backgroundSize: "100% 3px" }}
          >
            o-gaのテックブログ
          </Link>
        </Heading>

        <Box display={"flex"} h={"30px"} w={"300px"} justifyContent={"center"}>
          <Text marginRight={4} alignItems={"center"} fontSize={"20px"}>
            検索
          </Text>
          <Input
            type="text"
            placeholder="Search ..."
            borderRadius={"10px"}
            w={"200px"}
            border={"1px solid"}
          />
        </Box>

        <Box
          display={"flex"}
          p={4}
          alignItems={"center"}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <Box display={"flex"} marginTop={4}>
            <SunIcon marginRight={"30px"} marginLeft={"30px"} />
            <ToggleDarkMode marginRight={"30px"} marginLeft={"30px"} />
            <MoonIcon marginRight={"30px"} marginLeft={"30px"} />
          </Box>

          <Flex
            flexDirection={{ base: "row", xl: "row" }}
            marginTop={4}
            marginBottom={4}
          >
            <GitHubRepo />
            <Link
              href="/"
              textDecoration={"none"}
              w={"100px"}
              textAlign={"center"}
              fontSize={"20px"}
              backgroundImage={"linear-gradient(90deg, red.500, red.500)"}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"left bottom"}
              backgroundSize={"0 3px"}
              transition={"background-size 0.6s"}
              _hover={{ backgroundSize: "100% 3px" }}
            >
              Home
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export const ProfileHeader = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={"center"}
        fontSize={"15px"}
        fontWeight={"bold"}
        p={"0 40px"}
        justifyContent={"space-between"}
        h={{ base: "200px", xl: "100px" }}
      >
        <Heading as={"h1"}>
          <Link
            href="/"
            textDecoration={"none"}
            w={"100px"}
            textAlign={"center"}
            fontSize={"20px"}
            backgroundImage={"linear-gradient(90deg, red.500, red.500)"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"left bottom"}
            backgroundSize={"0 3px"}
            transition={"background-size 0.6s"}
            _hover={{ backgroundSize: "100% 3px" }}
          >
            <Text>o-gaのプロフィール</Text>
          </Link>
        </Heading>

        <Box
          display={"flex"}
          p={4}
          alignItems={"center"}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <Box display={"flex"} marginTop={4}>
            <SunIcon marginRight={"30px"} marginLeft={"30px"} />
            <ToggleDarkMode marginRight={"30px"} marginLeft={"30px"} />
            <MoonIcon marginRight={"30px"} marginLeft={"30px"} />
          </Box>
          <Flex
            flexDirection={{ base: "row", xl: "row" }}
            marginTop={4}
            marginBottom={4}
          >
            <GitHubRepo />
            <Link
              href="/"
              textDecoration={"none"}
              w={"100px"}
              textAlign={"center"}
              fontSize={"20px"}
              backgroundImage={"linear-gradient(90deg, red.500, red.500)"}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"left bottom"}
              backgroundSize={"0 3px"}
              transition={"background-size 0.6s"}
              _hover={{ backgroundSize: "100% 3px" }}
            >
              Home
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export const SkillHeader = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={"center"}
        fontSize={"15px"}
        fontWeight={"bold"}
        p={"0 40px"}
        justifyContent={"space-between"}
        h={{ base: "200px", xl: "100px" }}
      >
        <Heading as={"h1"}>
          <Link
            href="/"
            textDecoration={"none"}
            w={"100px"}
            textAlign={"center"}
            fontSize={"20px"}
            backgroundImage={"linear-gradient(90deg, red.500, red.500)"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"left bottom"}
            backgroundSize={"0 3px"}
            transition={"background-size 0.6s"}
            _hover={{ backgroundSize: "100% 3px" }}
          >
            o-gaのスキル
          </Link>
        </Heading>

        <Box
          display={"flex"}
          p={4}
          alignItems={"center"}
          flexDirection={{ base: "column", xl: "row" }}
        >
          <Box display={"flex"} marginTop={4}>
            <SunIcon marginRight={"30px"} marginLeft={"30px"} />
            <ToggleDarkMode marginRight={"30px"} marginLeft={"30px"} />
            <MoonIcon marginRight={"30px"} marginLeft={"30px"} />
          </Box>

          <Flex
            flexDirection={{ base: "row", xl: "row" }}
            marginTop={4}
            marginBottom={4}
          >
            <GitHubRepo />
            <Link
              href="/"
              textDecoration={"none"}
              w={"100px"}
              textAlign={"center"}
              fontSize={"20px"}
              backgroundImage={"linear-gradient(90deg, red.500, red.500)"}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"left bottom"}
              backgroundSize={"0 3px"}
              transition={"background-size 0.6s"}
              _hover={{ backgroundSize: "100% 3px" }}
            >
              Home
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
