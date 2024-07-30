import style from "../../styles/companyUSPS.module.css";

const CompanyUps = () => {
  const UPSP_DATA = [
    {
      id: 1,
      icon: "/Ups1.png",
      title: "Innovative Designs",
      description:
        "We are a castle designer that offers magical transformation and functional design solutions to style your home like our own. ",
    },
    {
      id: 2,
      icon: "/Ups2.png",
      title: "Turnkey Solutions",
      description:
        "Concept to Completion, we take the stress out of the equation for the client by providing a one-stop solution for the entire project. ",
    },
    {
      id: 3,
      icon: "/Ups3.png",
      title: "Full Transparency",
      description:
        "We welcome the responsibility to be honest and thrive on the problem-solving, we encounter despite the grey hairs.",
    },
    {
      id: 4,
      icon: "/Ups4.png",
      title: "Project Management",
      description:
        "We help you envision the design and realise your home, We aim for a comprehensive process from foundation to furnishing.  ",
    },
  ];
  return (
    <>
      <div className={style.CompanyUpsMainContainer}>
        <div className="container">
          <div className={style.CompanyUpsBg}>
            <div className={style.tag}>
              <p>Company USPS</p>
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
