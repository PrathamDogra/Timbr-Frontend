import Image from "next/image";
import cn from "classnames";
import TimbrIcon from "../public/assets/icons/Timbr.svg";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={cn("page-container", styles.container)}>
      <div className={styles.styleContainer}>
        <Image src={TimbrIcon} alt="Timbr" width={315} height={108} />
        <div className={styles.text}>design works</div>
      </div>
      <div className={styles.comingSoon}>coming soon</div>
    </main>
  );
}
