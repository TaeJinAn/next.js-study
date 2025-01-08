'use client'
import styles from "./styles.module.css";
const SkeletonCart = () => {
  return (
    <>
      <div className={styles.skeleton}>
        <div className={styles['skeleton-img']} />
        <div className={styles['skeleton-btn']} />
        <div className={styles['skeleton-line-one']} />
        <div className={styles['skeleton-line-two']} />
      </div>
    </>
  );
};
export default function Page() {
  return (
    <>
      <div className='space-y-4'>
        <h1 className='text-xl font-medium text-gray-400/80'>
          Styled with CSS Modules
        </h1>
        <div className={styles.container}>
          <SkeletonCart/>
          <SkeletonCart/>
          <SkeletonCart/>
        </div>
      </div>
    </>
  );
}
