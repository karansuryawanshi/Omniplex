import styles from "../../styles/Cancel.module.css";

export default function SuccessPage() {
  return (
    <div className={styles.wrapper}>
      <div id="successPage" className={styles.container}>
        <div className={`${styles.icon} ${styles.successIcon}`}>✓</div>
        <h1 className={styles.title}>Payment Successful!</h1>
        <p className={styles.subtitle}>
          Thank you for your purchase. Your payment has been processed
          successfully.
        </p>

        <div className={styles.successMessage}>
          Your order confirmation has been sent to your email address.
        </div>

        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Transaction ID:</span>
            <span className={styles.detailValue}>
              pi_3MtwBwLkdIwHu7ix28a3tqPa
            </span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Amount:</span>
            <span className={styles.detailValue}>$99.99</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Payment Method:</span>
            <span className={styles.detailValue}>•••• •••• •••• 4242</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Date:</span>
            <span className={styles.detailValue}>March 15, 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
