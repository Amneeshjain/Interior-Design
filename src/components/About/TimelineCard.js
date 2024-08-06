import React from "react";
import styles from "../../styles/timelineCard.module.css";

const TimelineCard = () => {
  return (
    <div className="container">
      <div className={styles.timeline}>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_icon}>1</div>
          <div className={styles.timeline_content}>
            <div className={styles.timeline_title}>Initial Meeting</div>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_icon}>2</div>
          <div className={styles.timeline_content}>
            <div className={styles.timeline_title}>Evaluation & Planning</div>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_icon}>3</div>
          <div className={styles.timeline_content}>
            <div className={styles.timeline_title}>Design & Development</div>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_icon}>4</div>
          <div className={styles.timeline_content}>
            <div className={styles.timeline_title}>Quality Testing</div>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_icon}>5</div>
          <div className={styles.timeline_content}>
            <div className={styles.timeline_title}>
              Maintenance & Enhancement
            </div>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_icon}>6</div>
          <div className={styles.timeline_content}>
            <div className={styles.timeline_title}>Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
