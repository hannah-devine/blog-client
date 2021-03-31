import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

const article = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>

      <h2>{data.title}</h2>
      {/* {data.user && (
        <Link href={`/users/${data.user.id}`}>
          {data.user.username}
        </Link>
      )} */}
      <section>
        <h3>Categories</h3>
        {/* <ul>
          {data.category.map((categroy) => (
            <li key={categroy.id}>
              <article>
                <h4>{categroy.name}</h4>
                <p>{categroy.slug}</p>
              </article>
            </li>
          ))}
        </ul> */}
      </section>
    </Layout>
  );
};

export default article;


export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.STRAPI_URL}/articles`)
  const data = await response.json();

  const paths = data.map((article) => ({ params: { slug: "" + article.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {
  const response = await fetch(`${process.env.STRAPI_URL}/articles/${params.slug}`)
  const data = await response.json();

  return { props: { data } }
};



