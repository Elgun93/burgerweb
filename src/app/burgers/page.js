import Link from "next/link";
import Image from "next/image";
import styles from "../styles/burgers.module.css";

// export const getStaticProps = async() => {
async function getData() {
  const res = await fetch("http://localhost:5000/items");
  // const data = await res.json();

  // console.log('data >>>', data);
  // console.log(res.json());
  return res.json();
  // return {
  //   props: {burgers: data}
  // }
}

export default async function Burgers() {
  const data = await getData();

  console.log(data);
  return (
    <div>
      <h1 className="text-3xl py-3">Burgers</h1>
      {data.map((burger) => {
        return (
          <Link href={`/burgers/${burger.id}`} key={burger.id}>
            <div className={styles.burgerCard}>
              <div className={styles.imageContainer}>
                <Image src={burger.image} alt="" width={400} height={300} />
              </div>
              <div>
                <h3 className={styles.burgerName}>{burger.name}</h3>
                <p>{burger.desc}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// export default Burgers;
