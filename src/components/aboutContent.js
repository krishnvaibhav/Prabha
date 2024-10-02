import React from "react";
import "../components/aboutus.css";
import prabha1 from "../assets/images/prabha1.jpg";
import prabha2 from "../assets/images/prabha2.jpg";
import prabha3 from "../assets/images/prabha3.jpg";
import prabha3F from "../assets/images/prabha3F.jpg";
import MotionWrapper from "./motionWrapper";
import { fadeInUp } from "./motionVarient";

export default function AboutContent() {
  return (
    <div
      className="about-container"
      // style={{
      //   backgroundImage: `url(${process.env.PUBLIC_URL}/themes/surface-white-wall.jpg)`,
      // }}
    >
      <h2 className="thq-heading-3 center">Our Story</h2>
      <MotionWrapper variants={fadeInUp} viewportAmount={0.2}>
        <section className="about-section">
          <div className="about-founder about-content">
            <h3 className="thq-heading-3">About The Founder</h3>
            <p>
              B.V. Prabhakaran, our visionary founder, began his career in the
              early 1960s as a freelance bookbinder in Ernakulam. Specializing
              in the rare craft of leather binding, his work gained recognition
              among judicial officers, advocates, and prominent figures in the
              town. He meticulously bound law books, record books, dictionaries,
              and epics using long-lasting materials that were highly
              appreciated by his clients. Inspired by his growing success, he
              aspired to establish a permanent binding shop, a rarity in
              Ernakulam at that time. With the support of his well-wishers, he
              set up a small unit in a rented space, marking the humble
              beginnings of what would become a legacy. In the 1960s, printing
              jobs in our area were labor-intensive and involved multiple
              people—compositors arranging individual metal type letters,
              printers operating manual machines, and binders performing
              post-press tasks like cutting, numbering, and binding. Recognizing
              the need for innovation, our founder invested in cutting,
              printing, and ruling machines, enabling the production of
              notebooks, registers, and account books with much-needed
              efficiency. In 1969, he established Prabha Industries as a
              proprietary firm, propelling the business into full-scale
              operations. As the printing industry evolved, so did we. The
              arrival of offset printing machines and computer-based DTP
              (desktop publishing) technology revolutionized the market.
              Embracing these changes, we incorporated offset printing into our
              services, and over time, Prabha Industries became one of the most
              respected names in the local printing industry.
            </p>
          </div>
          <div className="about-content-img">
            <img src={prabha3} alt="Team" className="about-image" />
          </div>
        </section>
      </MotionWrapper>
      <MotionWrapper viewportAmount={0.3} variants={fadeInUp}>
        <section className="about-section">
          <div className="about-content-img">
            <img src={prabha1} alt="Team" className="about-image" />
            <b className="thq-heading-3 img-text">Biju B.P</b>
          </div>
          <div className="about-founder about-content">
            <h3 className="thq-heading-3">Managing Partners</h3>
            <p>
              In 1990, B.V. Prabhakaran’s sons, Biju B.P. and Binu B.P., joined
              the company, playing instrumental roles in its expansion.
              Responding to the increasing demands from corporate clients, they
              launched
              <b> Prabha Prints and Sales</b>, a new venture focused on office
              stationery products. The company quickly became a major player in
              the local market, supplying essential office products to
              corporates, many of whom required mandatory vendor registration.
              Today, under the leadership of Biju and Binu, Prabha Prints and
              Sales is a trusted name in the corporate world. The business
              continues to thrive, with a solid reputation for providing
              high-quality stationery and printing solutions, serving businesses
              across various industries.
            </p>
          </div>
        </section>
      </MotionWrapper>
      <MotionWrapper viewportAmount={0.4} variants={fadeInUp}>
        <section className="about-section">
          <div className="about-founder about-content">
            <h3 className="thq-heading-3">Building on Tradition</h3>
            <p>
              Biju B.P. and Binu B.P. have successfully taken over the reins of
              the company, drawing inspiration from their late parents, B.V.
              Prabhakaran and P.V. Ramani. With over 30 years of combined
              experience in the printing field, their expertise, coupled with
              their creative and innovative approach, has driven the company to
              new heights. Both partners oversee every aspect of the business,
              from designing to finishing, ensuring that each project is
              delivered with precision and care. Their hands-on involvement,
              working 12 to 14 hours a day, ensures that every client receives
              the best service and timely deliveries, maintaining the high
              standards set by their founder.
            </p>
          </div>
          <div className="about-content-img">
            <img src={prabha2} alt="Team" className="about-image" />
            <b className="thq-heading-3 img-text">Binu B.P</b>
          </div>
        </section>
      </MotionWrapper>
    </div>
  );
}

{
  /* <section className="about-section">
<div className="about-content-img">
  <img
    src="https://via.placeholder.com/400x300"
    alt="Mission"
    className="about-image"
  />
</div>
<div className="about-content ">
  <h2 className="thq-heading-2">Our Mission</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Repellendus, earum. Doloribus eveniet inventore fugit placeat
    temporibus ab praesentium facere, odio reprehenderit perferendis
    ipsa autem tempore nesciunt voluptate officiis dolore nihil
    pariatur, magnam asperiores nulla saepe at fugiat aperiam. Quo amet
    fugit sunt reiciendis vitae laborum voluptatum repellendus dicta et
    omnislorem3ugit placeat temporibus ab praesentium facere, odio
    reprehenderit perferendis ipsa autem tempore nesciunt voluptate
    officiis dolore nihil pariatur, magnam asperiores nulla saepe at
    fugiat aperiam. Quo amet fugit sunt reiciendis vitae laborum
    voluptatum repellendus dicta et omnislorem3
  </p>
</div>
</section>

<section className="about-section">
<div className="about-content">
  <h2>Our Story</h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Repellendus, earum. Doloribus eveniet inventore fugit placeat
    temporibus ab praesentium facere, odio reprehenderit perferendis
    ipsa autem tempore nesciunt voluptate officiis dolore nihil
    pariatur, magnam asperiores nulla saepe at fugiat aperiam. Quo amet
    fugit sunt reiciendis vitae laborum voluptatum repellendus dicta et
    omnislorem3ugit placeat temporibus ab praesentium facere, odio
    reprehenderit perferendis ipsa autem tempore nesciunt voluptate
    officiis dolore nihil pariatur, magnam asperiores nulla saepe at
    fugiat aperiam. Quo amet fugit sunt reiciendis vitae laborum
    voluptatum repellendus dicta et omnislorem3
  </p>
</div>
<div className="about-content-img">
  <img
    src="https://via.placeholder.com/400x300"
    alt="Story"
    className="about-image"
  />
</div>
</section> */
}
