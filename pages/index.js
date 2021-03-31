import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home( {data}) {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {data.map((article) => (
            <div className={styles.card}>
              <Link href={`/articles/${article.slug}`}>
                <a>{article.title} &rarr;</a>
              </Link>
              <p>{article.description}</p>
            </div>
          ))} 
        </div>
      </main>
    
    </div>
  </Layout>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.STRAPI_URL}/articles`);
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};
