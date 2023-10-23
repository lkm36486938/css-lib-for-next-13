import CustomButton from "@/components/Button";
import styles from "./page.module.css";
import ButtonContainer from "@/components/ButtonContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      hello world
      <hr />
      <CustomButton />
      <hr />
      <ButtonContainer />
    </main>
  );
}
