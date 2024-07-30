import { useState } from "react";
import styles from "../../styles/faq.module.css";
import styleA from "../../styles/aboutSection.module.css";

const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className={styles.faqItem}>
      <div
        className={`${styles.question} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        {question}
        <p></p>
      </div>
      {isActive && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};

const Faq = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div
        className={styleA.sectionTitle}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div style={{ width: "100%" }} className={styleA.left}>
          <div style={{ justifyContent: "center" }} className={styleA.tag}>
            {/* <hr style={{ border: "1px solid #fff" }} /> */}
            Faq
          </div>
          <h2 style={{ textAlign: "center" }}>
            Frequently Asked <br />
            Questions
          </h2>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div className={styles.faqItems}>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isActive={index === activeIndex}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
