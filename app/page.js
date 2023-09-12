import Image from 'next/image';
import styles from './page.module.css';

export default async function Home() {
  const res = await fetch('https://catfact.ninja/fact');
  const str = await res.json();
  return (
    <>
      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Anonymous</h2>
          <div>{str.fact}</div>
        </div>
      </main>
    </>
  );
}
