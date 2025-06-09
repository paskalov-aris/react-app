const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        {" "}
        <span>Про</span> нас{" "}
      </h1>
      <div className="row">
        <div className="video-container">
          <video src="/images/about-vid.mp4" autoPlay loop muted playsInline />
          <h3>Поринь в гармонію</h3>
        </div>

        <div className="content">
          <h3>Чому саме ми?</h3>
          <p>
            Ми віримо у те, що догляд за собою та оселею має бути приємним і
            безпечним. Ми ретельно добираємо продукцію, орієнтуючись на якість,
            склад і відгуки реальних людей. У нашому каталозі ви знайдете
            перевірені бренди та новинки, що відповідають сучасним
            еко-стандартам.
          </p>
          <p>Запишись сьогодні та відчуй себе королевою!</p>
          <a href="#contact" className="btn">
            Більше
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
