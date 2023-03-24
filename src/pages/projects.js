import Layout from "../../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../../config";
import ProjectItem from "../../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-5 sm:w-full">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject}/>
          ))}
        </div>

      </Layout>
    </>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects },
  };
}
