import React from "react";
import "../styles/About.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="title">
        <h2>Осмонов Султанбек</h2>
        <Link style={{ textDecoration: "none" }} to="/">
          <Button variant="outline-primary">Назад</Button>
        </Link>
      </div>
      <p className="link">
        Ссылка на: <br />
        <a target="_blank" href="https://sula-portfolio.netlify.app">
          <strong>Портфолио</strong>
        </a>
        <br />
        <a target="_blank" href="https://www.linkedin.com/in/osmonov-sultan-a049a5240/">
          <strong>Linked In</strong>
        </a>
      </p>
      <p className="about-description">
        <strong>Описание обо мне:</strong> <br />
        Меня зовут Султан и frontend разработчик с 6 месяцами опыта в создании SPA и
        пользовательских интерфейсов. Учился программированию в образовательном центре Geeks. После
        окончания курсов я попал на стажировку в компанию GeekStudio, где пробыл 3 месяца. Выполняя
        задачи в этой компании я сталкивался со многими сложностями, например: код не работал
        выскакивала непонятная ошибка которая не ухадила. Но тем не менее я справлялся со всеми
        тасками и в итоге заметно стал намного лучше чем был. Сейчас я изучаю самые новые технологии
        чтобы всегда быть перспективным кандидатом на вакансии связанные с созданием клиентской
        части веб сайтов. А также я не против изучать backend часть.
      </p>
    </div>
  );
};

export default About;
