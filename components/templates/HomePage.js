import Attribute from '../modules/Attribute';
import Banner from '../modules/Banner';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attribute />
      
    </div>
  )
}

export default HomePage
