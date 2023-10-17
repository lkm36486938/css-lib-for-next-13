import CustomButton from "@/components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      hello world
      <hr />
      <CustomButton />
    </main>
  );
}
