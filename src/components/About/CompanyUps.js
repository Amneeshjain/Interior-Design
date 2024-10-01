import style from "../../styles/companyUSPS.module.css";
import Counter from "../../components/homepage/Counter"

const CompanyUps = () => {
  const UPSP_DATA = [
    {
      id: 1,
      icon: "/Ups1.png",
      title: "Createive Adaptibility",
    },
    {
      id: 2,
      icon: "/Ups2.png",
      title: "Discipline Planning",
    },
    {
      id: 3,
      icon: "/Ups3.png",
      title: "Competitive Flexible",
    },
    {
      id: 4,
      icon: "/Ups4.png",
      title: "Trust Quality",
    },
  ];
  return (
    <>
      <div className={style.CompanyUpsMainContainer}>
        <div className="container">
          <div className={style.CompanyUpsBg}>
            <div className={style.tag}>
              <p>Why Colonelz<span style={{ textTransform: "lowercase" }}>s</span></p>
              <hr />
            </div>
            <div className={style.CompanyUpsItems}>
              {UPSP_DATA.map(({ id, icon, title }) => (
                <div key={id} className={style.upsCard} data-aos="fade-up">
                  <div className={style.icon}>
                    <figure>
                      <img src={icon} alt="" loading="lazy" />
                    </figure>
                  </div>
                  <div>
                    <h3>{title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center py-3">
              <p>
                At Colonelz, we prioritize our clients' preferences, ensuring that every space we create
                aligns with their unique vision. With a focus on eco-friendly designs,
                we use non-toxic, sustainable materials, carefully selected by our experts.
                Our team works meticulously to craft interiors that are both functional
                and aesthetically pleasing, going beyond expectations. Founded on the principle
                of delivering top-quality results, we bring years of experience and a passion for design
                innovation. Whether residential or commercial, Colonelz is dedicated to shaping environments
                that inspire comfort, creativity, and well-being for every client we serve.
              </p>

            </div>
          </div>
          <Counter />
        </div>
      </div>
    </>
  );
};

export default CompanyUps;
