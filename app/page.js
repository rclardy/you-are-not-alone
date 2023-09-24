'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Layout from './components/layout';
import { useState, useEffect } from 'react';

export default function Home() {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    // Fetch an initial fact when the component mounts
    apiCall().then((initialFact) => {
      setFact(initialFact);
    });
  }, []);

  const fetchNewFact = () => {
    // Fetch a new fact and update the state
    apiCall().then((newFact) => {
      setFact(newFact);
    });
  };

  return (
    <Layout>
      <main className={styles.main}>
        <QuoteBox fact={fact} />
        <Button onClick={fetchNewFact} />
      </main>
    </Layout>
  );
}

const apiCall = async () => {
  try {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    return data.fact;
  } catch (error) {
    console.error(error);
    return null;
  }
};

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
