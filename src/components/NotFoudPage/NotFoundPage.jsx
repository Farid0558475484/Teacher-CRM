import styles from "./NotFoundPage.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <span className={styles.notFoundIcon} role="img" aria-label="Crying face">
        😢
      </span>
      <h1 className={styles.notFoundHeading}>404 Not Found</h1>
      <p className={styles.notFoundText}>
        Sorry, but the page you requested could not be found. 
      </p>
    </div>
  );
};

export default NotFound;
