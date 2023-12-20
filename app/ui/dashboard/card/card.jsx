import styles from './card.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className={styles.container}>
        <MdSupervisedUserCircle width={24}/>
        <div className={styles.texts}>
            <span className={styles.title}>Total Users</span>
            <span className={styles.number}>103.980</span>
            <span className={styles.detail}>
                <span className={styles.positive}>more than previous week</span>
            </span>
        </div>
    </div>
  )
}

export default Card