import Link from 'next/link';
import styles from '../asset/policy.module.css';

import Layout from '../components/Layout';
export default function Policy() {
  return (
    <Layout>
      <header className={styles.header}>
        <Link href="/">
          <a style={{ color: 'black' }}>
            <h1 className={styles.logo}> Random Color </h1>
          </a>
        </Link>
      </header>
      <div className={styles.card}>
        <h1>Privacy Policy </h1>
        <h3>
          Last Time Update
          <span> 15 Nov 2021 </span>{' '}
        </h3>
        <p>
          Random color is a project. It provides every refresh with a new random
          colour tool. The random color tool does not get any data to form
          you—the random color tool is free software for everyone.
        </p>
        <br />
        <p>
          The random color tool currently does not support open-source licenses.
          The random color UI is under developer. Next month we deploy a random
          color tool with full functionality.
        </p>
      </div>
    </Layout>
  );
}
