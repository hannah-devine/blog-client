import Head from "next/head";
import Link from "next/link";

import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>All my blogposts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav className={styles.list}>
        <ul className={styles.list}>
          <li className={styles.list}>
            <Link className={styles.link} href="/">
              <a className={styles.link}>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={styles.title}>
          Welcome to my Blog Website
      </h1>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
