import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/79553681?s=400&u=40ddb008831c2f02e4dac4526afbf9ee9f37336e&v=4" alt="Deywerson Pereira" />
            <div>
                <strong>Deywerson Pereira</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>

    );
}