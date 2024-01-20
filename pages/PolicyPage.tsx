import { Box, Heading, Text } from "@/common/components";
import React from "react";

function PolicyPage() {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"} p={4}>
      <Box w={"50%"} h={"100%"} display={"flex"} flexDirection={"column"}>
        <Heading
          as={"h2"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginY={16}
        >
          サイトポリシー
        </Heading>

        <Heading
          as={"h2"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginY={4}
        >
          適用範囲
        </Heading>

        <Text p={4} textAlign={"center"} marginY={4}>
          本プライバシーポリシー(以下「本ポリシー」といいます。)は、当社が利用者から個人情報を取得、利用及び管理するときに適用されます。
        </Text>

        <Heading
          as={"h2"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginY={4}
        >
          Cookieの利用およびアクセス分析について
        </Heading>

        <Text padding={4} textAlign={"center"} marginY={4}>
          ウェブサイト及び本サービス(以下、これらを総称して「ウェブサイ
          ト等」といいます。)のアクセス及び利用状況の分析、広告配信並びにウェブサ
          イト等の利便性向上のために、ウェブサイト等にアクセスした利用者の情報通信
          端末に保存されるCookie等のファイル及びこれに類似する技術を取得することが
          あります。当社は、Cookie等と利用者の個人情報を関連付けることがあります。
          利用者の個人情報と関連付けたCookie等が利用者の個人情報であること
          に鑑み、当該Cookie等を本ポリシーの定めに従って管理いたします。また、
          Cookie等の情報を第三者が運営するデータ・マネジメント・プラットフォー
          ムに提供し、当該第三者からCookie等により収集されたウェブの閲覧履歴及びそ
          の分析結果を取得し、これらを利用者の個人データと結び付けた上で、広告配信
          等の目的で利用することがあります。
        </Text>

        <Text paddingY={4} textAlign={"center"} marginY={4}>
          本サイトは、Google Analyticsを使用し、アクセス解析を行なっております。
          このGoogle
          Analyticsは、データ収集のためにCookieを使用しています。このデータは匿名であり、個人を特定するものではありません。
          この機能は、Cookieを無効化することで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
          この規約に関して詳細は、
          <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
            Google Analyticsサービス利用規約
          </a>
          のページや
          <a href="https://policies.google.com/technologies/ads?hl=ja">
            googleポリシーと規約
          </a>
          のページを参照ください。
        </Text>
        <Heading
          as={"h2"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginY={4}
        >
          ご意見/ご要望について
        </Heading>
        <Text padding={4} textAlign={"center"} marginY={4}>
          X(旧)Twitter:o_ga09
        </Text>
        <Heading
          as={"h2"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginY={4}
        >
          Gopherくんのアイコンの著作権について
        </Heading>
        <Text padding={4} textAlign={"center"} marginY={4}>
          Gopher designed by Renée French
        </Text>
      </Box>
    </Box>
  );
}

export default PolicyPage;
