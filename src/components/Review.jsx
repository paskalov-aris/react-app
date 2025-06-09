import React from "react";

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        відгуки 
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
          </div>
          <p>
            Чудовий сервіс і дуже приємна атмосфера! Після візиту почуваюсь як
            нова людина.
          </p>
          <div className="user">
            <img src="/images/user-1.jpg" alt="user" />
            <div className="user-info">
              <h3>Оксана</h3>
              <span>постійна клієнтка</span>
            </div>
          </div>
        </div>

        {/* Додай інші відгуки аналогічно */}
      </div>
    </section>
  );
};

export default Review;
