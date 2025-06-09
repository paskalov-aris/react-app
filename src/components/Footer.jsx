import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Корисні посилання</h3>
          <a href="#home">Головна</a>
          <a href="#about">Про нас</a>
          <a href="#products">Послуги</a>
          <a href="#review">Відгуки</a>
          <a href="#contact">Контакти</a>
        </div>
        <div className="box">
          <h3>Контакти</h3>
          <a href="tel:+380991112233">+38 099 111 22 33</a>
          <a href="mailto:beautysalon@email.com">beautysalon@email.com</a>
          <a href="#">м. Черкаси, вул. Салонна, 15</a>
        </div>
        <div className="box">
          <h3>Слідкуй за нами</h3>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>
      </div>
      <div className="credit">
        &copy; {new Date().getFullYear()} <span>BeautySalon</span> | Всі права
        захищено
      </div>
    </section>
  );
};

export default Footer;
