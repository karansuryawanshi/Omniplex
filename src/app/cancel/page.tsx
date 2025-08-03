import styles from "../../styles/Cancel.module.css";

export default function CancelPage() {
  return (
    <div className={styles.wrapper}>
      <div id="failurePage" className={styles.container}>
        <div className={styles.failureIcon}>✕</div>
        <h1 className={styles.title}>Payment Failed</h1>
        <p className={styles.subtitle}>
          We couldn't process your payment. Please try again or use a different
          payment method.
        </p>

        <div className={styles.errorMessage} id="errorMessage">
          Your card was declined. Please check your card details and try again.
        </div>

        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Error Code:</span>
            <span className={styles.detailValue} id="errorCode">
              card_declined
            </span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Attempted Amount:</span>
            <span className={styles.detailValue} id="failedAmount">
              $99.99
            </span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Payment Method:</span>
            <span className={styles.detailValue} id="failedPaymentMethod">
              •••• •••• •••• 4000
            </span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Time:</span>
            <span className={styles.detailValue} id="failedTime">
              March 15, 2024 - 2:30 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
