import style from "../../styles/companyUSPS.module.css";

const CompanyUps = () => {
  const UPSP_DATA = [
    {
      id: 1,
      icon: "/Ups1.png",
      title: "Innovative Designs",
      description:
        "We customise designs and layouts as per your preferences, bringing your vision to life."

    },
    {
      id: 2,
      icon: "/Ups2.png",
      title: "Turnkey Solutions",
      description:
        "Sit back and relax. We ensure you to deliver your desired project on time. Concept to Completion will always be our motto.",
    },
    {
      id: 3,
      icon: "/Ups3.png",
      title: "Full Transparency",
      description:
        "We welcome the responsibility to be honest and thrive on problem-solving, Full transperancy and communication to be maintained with the client.",
    },
    {
      id: 4,
      icon: "/Ups4.png",
      title: "Project Management",
      description:
        "We help you envision the design you've always dreamt of and aim for a comprehensive process from foundation to furnishing.  ",
    },
  ];
  return (
    <>
      <div className={style.CompanyUpsMainContainer}>
        <div className="container">
          <div className={style.CompanyUpsBg}>
            <div className={style.tag}>
              <p>Company USP<span style={{ textTransform: "lowercase" }}>s</span></p>
              <hr />
            </div>
            <div className={style.CompanyUpsItems}>
              {UPSP_DATA.map(({ id, icon, title, description }) => {
                return (
                  <>
                    <div key={id} className={style.upsCard} data-aos="fade-up">
                      <div className={style.icon}>
                        <figure>
                          <img src={icon} alt="" />
                        </figure>
                      </div>
                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyUps;
