import Image from 'next/image';
import styles from './page.module.css';

function Bs(props) {
  return (
    <div className={`${styles.card} ${styles.center}`}>
      <ul>
        <li>{props.element} -Sushi Roll</li>
      </ul>
    </div>
  );
}

export default async function Home() {
  const res = await fetch('https://catfact.ninja/fact');
  const str = await res.json();
  const arry = ['Skywalker Roll', 'Rock & Roll', 'Puyallup Roll'];
  return (
    <>
      <main className={styles.main}>{str.fact}</main>
      <div>
        <h2 className={styles.center}>My Sushi Order</h2>
        {arry.map((el) => (
          <Bs element={el} word="banana" />
        ))}
      </div>
    </>
  );
}
