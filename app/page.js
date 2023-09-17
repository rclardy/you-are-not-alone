'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useState, useEffect } from 'react';

function ApiCall() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>no facts</p>;

  return <QuoteBox fact={data.fact} />;
}

function QuoteBox({ fact }) {
  return (
    <div className={styles.card}>
      <h2>Anonymous</h2>
      <div className={styles.cardText}>{fact}</div>
      <Button />
    </div>
  );
}

const Button = ({ onClick }) => {
  const handleClick = () => {
    const newQoute = ApiCall();
  };
  return (
    <button type="button" onClick={handleClick}>
      Anotha One
    </button>
  );
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <QuoteBox />
      </main>
    </>
  );
}
