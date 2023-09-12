import Image from 'next/image';
import styles from './page.module.css';

async function ApiCall() {
  const res = await fetch('https://catfact.ninja/fact');
  const str = await res.json();
  const data = str.fact;
  return data;
}

export default async function Home() {
  const quote = ApiCall();
  return (
    <>
      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Anonymous</h2>
          <div className={styles.cardText}>{quote}</div>
        </div>
      </main>
    </>
  );
}
