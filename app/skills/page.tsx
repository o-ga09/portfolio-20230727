import { Grid, GridItem, Heading} from "../common/components";
import { ArticleCard, ExamCard, OutPutCard, SkillCard } from "../components/Card";


export default function Skills() {
  const contents: Map<number,string[]> = new Map();
  const skillTitle = ['スキルレベル','成果物','執筆記事','資格'];
  const skillcontents = ['Go','C/C++','GCP','k8s','VueJs','SalesForce'];
  const outputcontents = ['パワフェス計算ツール'];
  const articlecontents = ['テストデータ生成ツール作った話','メールアドレスマスクCLI作った話','Golangに入門して詰まった話'];
  const examcontents = ['基本情報技術者'];
  contents.set(0,skillcontents);
  contents.set(1,outputcontents);
  contents.set(2,articlecontents);
  contents.set(3,examcontents);
  const skillEvaluates = [3,2,1,1,1,1];
  
  return (
    <>
        {skillTitle.map((title,i) => (
          <>
            <Heading textAlign='center' key={i} textDecoration='underline' paddingTop={16}>{title}</Heading>
            <Grid
              templateColumns={{ base: 'repeat(1, 0fr)', md: 'repeat(2, 0fr)' }}
              gap={6}
              marginX='auto'
              paddingTop={16}
            >
              {contents.get(i)?.map((title, index) => {
                let contentToShow = null;

                switch (i) {
                  case 0:
                    contentToShow = <GridItem key={index}><SkillCard title={title} evaluate={skillEvaluates[index]} index={index} /></GridItem>;
                    break;
                  case 1:
                    contentToShow = <GridItem key={index}><OutPutCard title={title} /></GridItem>;
                    break;
                  case 2:
                    contentToShow = <GridItem key={index}><ArticleCard title={title} index={index} /></GridItem>;
                    break;
                  case 3:
                    contentToShow = <GridItem key={index}><ExamCard title={title}/></GridItem>;
                    break;
                  default:
                    contentToShow = <GridItem key={index}>Default Content</GridItem>;
                    break;
                }

                return contentToShow;
              })};
            </Grid>
          </>
        ))};
    </>
  )
}