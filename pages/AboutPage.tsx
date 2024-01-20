import {
  ArrowDownIcon,
  Box,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@/common/components";
import React from "react";

function AboutPage() {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"} p={4}>
      <Box w={"50%"} h={"100%"} display={"flex"} flexDirection={"column"}>
        <Heading
          as={"h3"}
          fontSize={30}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          経歴
        </Heading>
        <Text marginY={4}>2020年3月：会津大学　卒業</Text>
        <ArrowDownIcon />
        <Text marginY={4}>
          2020年4月：株式会社アイテル　入社　（2022年9月　退職）
        </Text>
        <ArrowDownIcon />
        <Text marginY={4}>2022年10月：株式会社ワクト　入社　〜　現在</Text>
        <span style={{ height: "2rem" }}></span>
        <Heading
          as={"h2"}
          fontSize={30}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          参画プロジェクト
        </Heading>
        <Heading
          as={"h3"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          marginY={16}
        >
          大手クレジットカード発行会社向けMarketingAutomationのシステム保守および機能追加の受け入れテスト
        </Heading>
        <Text marginY={4}>【作業工程】</Text>
        <Text marginY={4}>
          要件定義/基本設計/詳細設計/開発/結合テスト/総合テスト
        </Text>
        <Text marginY={4}>【役割・プロジェクト規模】</Text>
        <List spacing={3}>
          <ListItem>メンバー・7人</ListItem>
        </List>
        <Text marginY={4}>【作業内容】</Text>
        <UnorderedList spacing={3}>
          <ListItem>小規模な新規開発案件の対応</ListItem>
          <ListItem>
            サーバ内ファイルを自動削除するシェルスクリプトの設計、作成
          </ListItem>
          <ListItem>SQLを用いた業務ロジックの作成、性能改善</ListItem>
          <ListItem>保守定常作業(監視等)</ListItem>
          <ListItem>アラート対応</ListItem>
          <ListItem>MAツールにおける機能追加のテスト</ListItem>
          <ListItem>システム保守の補助ツール作成</ListItem>
          <ListItem>
            VBAマクロ、シェルスクリプト等のプログラムの設計開発および検証
          </ListItem>
          <ListItem>手順書に則ったエラー案件の検出、リカバリの実施</ListItem>
          <ListItem>
            手順書に則ったインシデント対応、情報採取、顧客報告
          </ListItem>
          <ListItem>週次作業報告書の作成、報告</ListItem>
          <ListItem>プロジェクト資料、申請書の作成、管理、最新化</ListItem>
          <ListItem>システム稼働に関する定期作業実施</ListItem>
          <ListItem>インシデント対応、トラブルシューティング</ListItem>
          <ListItem>顧客説明</ListItem>
          <ListItem>工程管理、品質管理</ListItem>
          <ListItem>各種ドキュメント(設計書・手順書etc)作成</ListItem>
        </UnorderedList>
        <Heading
          as={"h3"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          marginY={16}
        >
          宇宙・防衛分野における組み込みシステムの開発およびテスト
        </Heading>
        <Text marginY={4}>【作業工程】</Text>
        <List spacing={3}>
          <ListItem>単体テスト／詳細設計書作成／製造</ListItem>
        </List>
        <Text marginY={4}>【役割・プロジェクト規模】</Text>
        <List spacing={3}>
          <ListItem>メンバー・7人</ListItem>
        </List>
        <Text marginY={4}>【作業内容】</Text>
        <UnorderedList spacing={3}>
          <ListItem>手順に沿った単体テストの実施</ListItem>
          <ListItem>手順に沿ったFPGAを用いたドライランテストの実施</ListItem>
          <ListItem>
            詳細設計書のたたき台の作成 ・詳細設計書のレビュー指摘修正
          </ListItem>
          <ListItem>
            コーディング(流用元プログラムの改修) ・コーディングレビュー指摘修正
          </ListItem>
          <ListItem>単体テスト仕様書作成 ・単体テスト実施</ListItem>
        </UnorderedList>

        <Heading
          as={"h3"}
          fontSize={20}
          display={"flex"}
          alignItems={"center"}
          marginY={16}
        >
          建設業界向けグリーンファイル作成サポートSaaSのデータ連携APIの開発、保守
        </Heading>
        <Text marginY={4}>【作業工程】</Text>
        <Text marginY={4}>開発／結合テスト／保守</Text>
        <Text marginY={4}>【役割・プロジェクト規模】</Text>
        <List spacing={3}>
          <ListItem>プロダクトメンバー：20人</ListItem>
          <ListItem>チームメンバー・6人</ListItem>
        </List>
        <Text marginY={4}>【作業内容】</Text>
        <UnorderedList spacing={3}>
          <ListItem>バッチの不具合改修</ListItem>
          <ListItem>nodeの脆弱性対応</ListItem>
          <ListItem>リリース時エラーの横展開対応</ListItem>
          <ListItem>セキュリティチームから依頼対応</ListItem>
        </UnorderedList>

        <span style={{ height: "2rem" }}></span>

        <Heading
          as={"h2"}
          fontSize={30}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          使用技術
        </Heading>
        <Text marginY={4} fontWeight={"bold"}>
          言語
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>Typescript</ListItem>
          <ListItem>Javascript</ListItem>
          <ListItem>NodeJs</ListItem>
          <ListItem>Express</ListItem>
          <ListItem>Jest</ListItem>
          <ListItem>C</ListItem>
          <ListItem>C++</ListItem>
        </UnorderedList>
        <Text marginY={4} fontWeight={"bold"}>
          OS
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>Windows</ListItem>
          <ListItem>Mac</ListItem>
          <ListItem>Unix</ListItem>
          <ListItem>Linux</ListItem>
        </UnorderedList>
        <Text marginY={4} fontWeight={"bold"}>
          DB
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>MySQL</ListItem>
          <ListItem>PostgreSQL</ListItem>
          <ListItem>Oracle19c</ListItem>
        </UnorderedList>
        <Text marginY={4} fontWeight={"bold"}>
          Tool
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>Adobe Campaign</ListItem>
          <ListItem>Apache</ListItem>
          <ListItem>HULFT</ListItem>
          <ListItem>TeraTrm</ListItem>
          <ListItem>Eclipse</ListItem>
          <ListItem>VirtualBox</ListItem>
          <ListItem>VSCode</ListItem>
          <ListItem>Docker</ListItem>
        </UnorderedList>
        <Text marginY={4} fontWeight={"bold"}>
          Cloud
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>Google Cloud</ListItem>
          <ListItem>AWS</ListItem>
          <ListItem>Azure</ListItem>
        </UnorderedList>
        <Text marginY={4} fontWeight={"bold"}>
          コード管理
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>GitHub</ListItem>
          <ListItem>Subversion</ListItem>
        </UnorderedList>
        <Text marginY={4} fontWeight={"bold"}>
          CI/CD
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>GitHub Actions</ListItem>
          <ListItem>CircleCI</ListItem>
        </UnorderedList>

        <span style={{ height: "2rem" }}></span>

        <Heading
          as={"h3"}
          fontSize={30}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          資格
        </Heading>
        <UnorderedList spacing={3}>
          <ListItem>基本情報技術者</ListItem>
          <ListItem>AWS Practitioner</ListItem>
          <ListItem>普通自動車免許</ListItem>
        </UnorderedList>

        <span style={{ height: "2rem" }}></span>

        <Heading
          as={"h2"}
          fontSize={30}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          個人開発
        </Heading>
        <UnorderedList spacing={3}>
          <ListItem>クリーンアーキテクチャを用いたRESTAPI開発 with Go</ListItem>
          <Text marginY={4}>
            クリーンアーキテクチャを用いたGoでのREST APIの開発
          </Text>
          <ListItem>テストデータ生成CLIツール作成</ListItem>
          <Text marginY={4}>
            CLI開発フレームワークCobraを用いたテストデータ生成CLIツールの実装
          </Text>
          <ListItem>メールアドレスマスク化CLIツール作成</ListItem>
          <Text marginY={4}>
            CLI開発フレームワークCobraを用いたメールアドレスマスク化CLIツールの実装
          </Text>
          <ListItem>
            Golangを用いた簡易なAPIサーバの開発とゲームの計算ツールの開発
          </ListItem>
          <Text marginY={4}>SONを返却するAPIサーバのGolangでの実装</Text>
          <Text marginY={4}>Vue.jsを用いたゲームの計算ツールの開発</Text>
          <ListItem>Pythonを用いたLINEBotの開発</ListItem>
          <Text marginY={4}>
            LINEMessageingAPIを用いたPythonでのLINEBotの実装
          </Text>
          <Text marginY={4}>オウム返し、天気予報の機能の実装</Text>
        </UnorderedList>

        <span style={{ height: "2rem" }}></span>

        <Heading
          as={"h2"}
          fontSize={30}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          自己PR
        </Heading>
        <Text marginY={4}>
          サーバサイドが好きで、普段からGCPを用いてWebアプリや簡単なAPIサーバの個人開発を行なっています。
          qiitaやZennでのインプットに加え、ハンズオンやツールの個人開発によるアウトプットも日頃からしております。
          最近では、クリーンアーキテクチャやテスト駆動開発などの設計/開発手法の学習をしたり、プライベートにおけるモブプロ形式のチーム開発／勉強会等を行ったりしています。
          これからサーバサイドエンジニアとしてキャリアアップするためにも実務でも個人でも研鑽していきたいと考えています。
          これまでの経験から、システムにおける詳細設計書の作成や製造工程を行うことができ、またシステム保守としてもインシデントの初動対応や顧客応対を行うことができます。
          また、テスト工程についても、単体テスト〜結合テスト〜総合テストをテスト仕様書の作成から実施まで行ってきました。
        </Text>

        <span style={{ height: "2rem" }}></span>

        <Heading
          as={"h3"}
          fontSize={30}
          display={"flex"}
          alignItems={"center"}
          marginY={4}
        >
          links...
        </Heading>
        <List spacing={3}>
          <ListItem>
            <Link href={"https://zenn.dev/o_ga"}>Zenn</Link>
          </ListItem>
          <ListItem>
            <Link href={"https://qiita.com/o-ga"}>Qiita(個人)</Link>
          </ListItem>
          <ListItem>
            <Link href={"https://qiita.com/wakuto-o-ga"}>Qiita(会社)</Link>
          </ListItem>
          <ListItem>
            <Link href={"https://lapras.com/person"}>Lapras</Link>
          </ListItem>
        </List>
        <span style={{ height: "2rem" }}></span>
      </Box>
    </Box>
  );
}

export default AboutPage;
