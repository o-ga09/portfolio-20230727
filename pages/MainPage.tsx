import Image from "next/image";
import {
  ArrowForwardIcon,
  Box,
  CheckCircleIcon,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Link,
} from "../common/components";

function MainPage() {
  const name = "オーガ";
  const job = "ソフトウェアエンジニア";
  const introduction =
    "ソフトウェアエンジニアをしているオーガです。出身は新潟で、日本酒大好きです。趣味は、ゲーム、アニメ、ダーツです。ゼノブレイドが好きです。推しは、１０年くらい山本彩です。最近、おうちk8sをやっています。";
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"} p={4}>
      <Box w={"50%"} h={"100%"} display={"flex"} flexDirection={"column"}>
        <Box p={2} display={"flex"} flexDirection={"row"} marginBottom={10}>
          <Image
            src={"/icon.jpg"}
            alt={"メイン画像"}
            width={50}
            height={50}
            style={{ marginRight: "1rem", borderRadius: "50px" }}
          />
          <Heading
            as={"h3"}
            fontSize={20}
            display={"flex"}
            alignItems={"center"}
          >
            {name}／{job}
          </Heading>
        </Box>
        <Text>{introduction}</Text>

        <span style={{ height: "5vh" }}></span>

        <Heading
          as={"h3"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          information...
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            名前：オーガ
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            生年月日：1997/09/27
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            出身地：新潟県三条市
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            居住地：東京都三鷹市
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            出身大学：会津大学 24期
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            大学卒業年度：20卒
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            どうでもいい自慢：俳優の高橋克実さんと出身小中高が一緒
          </ListItem>
        </List>

        <span style={{ height: "5vh" }}></span>

        <Heading
          as={"h3"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          skills...
        </Heading>
        <Text>Go／GCP／React／Typescript／AWS／k8s／Docker</Text>

        <span style={{ height: "5vh" }}></span>

        <Heading
          as={"h3"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          Hobbies...
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            ライブ
            <Text marginTop={4}>山本彩のライブに行くこと</Text>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            ゲーム
            <Text marginTop={4}>
              ドラクエ、モンハン（MH3rd、MH3G、MH4、MH4G、MHW、MHW:I、MHR、MHR:S）、ゼノブレイド
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            アニメ
            <Text marginTop={4}>
              ハイキュー！！、鬼滅の刃、推しの子、ダイヤのA、メジャー
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            ダーツ
            <Text marginTop={4}>超初心者。ハンデ付き。</Text>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            お酒
            <Text marginTop={4}>日本酒、ウイスキー、ハイボール</Text>
          </ListItem>
        </List>

        <span style={{ height: "5vh" }}></span>

        <Heading
          as={"h3"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          products...
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            推しの歌詞のワンフレーズで共鳴を当てるクイズゲーム
            <ArrowForwardIcon marginX={4} />
            <Link href={"https://sy-quiz.t09-blog.com/"}>SYQ</Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            パワプロのパワフェスモードの計算ツール
            <ArrowForwardIcon marginX={4} />
            <Link href={"https://pawafes-calc-20220223.dt.r.appspot.com/"}>
              パワフェスモードの計算ツール
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"} />
            モンハンAPI
            <ArrowForwardIcon marginX={4} />
            <Link href={"https://github.com/o-ga09/MH-API"}>MHAPI</Link>
          </ListItem>
        </List>

        <span style={{ height: "5vh" }}></span>

        <Heading
          as={"h3"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          feature...
        </Heading>
        <Text>
          バックエンドエンジニアでエンターテイメントのサービス基盤を作るエンジニアになりたい
        </Text>

        <span style={{ height: "5vh" }}></span>

        <Heading
          as={"h3"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          links...
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"}></ListIcon>
            GitHub{" "}
            <Link href={"https://github.com/o-ga09"}>
              <ArrowForwardIcon marginX={4} />
              @o-ga09
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"}></ListIcon>
            Twitter{" "}
            <Link href={"https://twitter.com/o_ga09"}>
              <ArrowForwardIcon marginX={4} />
              @o_ga09
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"}></ListIcon>
            Instagram
            <Link href={"https://www.instagram.com/o_ga09/"}>
              <ArrowForwardIcon marginX={4} />
              @o_ga09
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={"green.500"}></ListIcon>
            LAPRAS{" "}
            <Link href={"https://lapras.com/person"}>
              <ArrowForwardIcon marginX={4} />
              @o-ga09
            </Link>
          </ListItem>
        </List>
        <span style={{ height: "5vh" }}></span>
      </Box>
    </Box>
  );
}

export default MainPage;
