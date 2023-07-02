import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Loading: React.FC = () => {
    return (
        <div className={styles.loading}>
            <Image
                src="/healthy-food.gif"
                width={100}
                height={100}
                alt="The page is loading"
            />
            <p>Please wait...</p>
        </div>
    );
};

export default Loading;
