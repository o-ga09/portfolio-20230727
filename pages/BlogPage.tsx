import { Box, Grid, GridItem, Heading, Link, Text } from "@/common/components";
import Image from "next/image";
import React from "react";

export default function BlogPage({ articles }: { articles: ArticleInfo[] }) {
  return (
    <Box
      w={"100%"}
      minH={"70vh"}
      display={"flex"}
      justifyContent={"center"}
      p={4}
    >
      <Box w={"50%"} h={"100%"} display={"flex"} flexDirection={"column"}>
        <Heading as={"h2"} fontSize={30} display={"flex"} alignItems={"center"}>
          Ariticles...
        </Heading>
        <Text marginY={4}>記事一覧です</Text>
        <Grid
          w={"100%"}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
          marginTop={4}
        >
          {articles?.map((item) => (
            <Link
              href={`${item.url}`}
              key={item.id}
              _hover={{ textDecoration: "none" }}
            >
              <GridItem>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  w={"100%"}
                  h={"5rem"}
                  border={"black"}
                >
                  {item.icon == "qiita" || item.icon == "zenn" ? (
                    <>
                      {item.icon == "zenn" ? (
                        <>
                          <Image
                            src={"/zenn.png"}
                            alt={"qiita画像"}
                            width={50}
                            height={50}
                          />
                        </>
                      ) : (
                        <>
                          <Image
                            src={"/qiita.png"}
                            alt={"qiita画像"}
                            width={50}
                            height={50}
                          />
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Text
                        w={"5rem"}
                        background={"white"}
                        borderRadius={"10px"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        fontSize={"3rem"}
                      >
                        {item.icon}
                      </Text>
                    </>
                  )}
                  <Box
                    w={"15rem"}
                    h={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    marginLeft={"1rem"}
                  >
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      w={"100%"}
                      h={"100%"}
                    >
                      {item.title}
                    </Text>
                    <Text
                      display={"flex"}
                      justifyContent={"flex-end"}
                      alignItems={"flex-end"}
                      w={"100%"}
                      fontSize={"0.8rem"}
                    >
                      {item.created_at}
                    </Text>
                  </Box>
                </Box>
              </GridItem>
            </Link>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
