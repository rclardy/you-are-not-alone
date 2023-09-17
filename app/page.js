'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    // Fetch an initial fact when the component mounts
    ApiCall().then((initialFact) => {
      setFact(initialFact);
    });
  }, []);

  const fetchNewFact = () => {
    // Fetch a new fact and update the state
    ApiCall().then((newFact) => {
      setFact(newFact);
    });
  };

  return (
    <main className={styles.main}>
      <QuoteBox fact={fact} />
      <Button onClick={fetchNewFact} />
    </main>
  );
}

async function ApiCall() {
  try {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    return data.fact;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function QuoteBox({ fact }) {
  return (
    <div className={styles.card}>
      <h2>Anonymous</h2>
      <div className={styles.cardText}>{fact || 'Loading...'}</div>
    </div>
  );
}

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Anotha One
    </button>
  );
};
