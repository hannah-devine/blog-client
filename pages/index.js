import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";

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
              <h3>{article.title} &rarr;</h3>
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
