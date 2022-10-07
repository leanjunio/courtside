import styles from './courtside-feature-home.module.scss';

/* eslint-disable-next-line */
export interface CourtsideFeatureHomeProps {}

export function CourtsideFeatureHome(props: CourtsideFeatureHomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CourtsideFeatureHome!</h1>
    </div>
  );
}

export default CourtsideFeatureHome;
