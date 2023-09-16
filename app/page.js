import Image from 'next/image';
import styles from './page.module.css';

async function ApiCall() {
  const res = await fetch('https://catfact.ninja/fact');
  const str = await res.json();
  const data = str.fact;
  return data;
}
function QuoteBox() {
  const quote = ApiCall();
  return (
    <div className={styles.card}>
      <h2>Anonymous</h2>
      <div className={styles.cardText}>{quote}</div>
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <main className={styles.main}>
        <QuoteBox />
      </main>
    </>
  );
}
