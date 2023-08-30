import { Button } from "../../utils/Button/Button";

const NewsCardItem = ({ author, title, description }) => {
  return (
    <div className="news-card-item">
      <div className="news-card-item__author">By {author}</div>
      <h4 className="news-card-item__title">{title}</h4>
      <p className="news-card-item__description">{description}</p>
      <Button text="Read More" color="yellow" />
    </div>
  );
};

const NewsCard = (props) => {
  const { date, author, title, description } = props;
  const day = date.getDate();
  const month = date.toLocaleString("eng", { month: "short" });

  return (
    <div className="news-card">
      <div className="news-card__date">
        <span className="news-card__day">{day}</span>
        <span className="news-card__month">{month}</span>
      </div>
      <NewsCardItem author={author} title={title} description={description} />
    </div>
  );
};

export const News = () => {
  const cardsData = [
    {
      date: new Date("2022-11-25"),
      author: "Rachi Card",
      title: "The Benefits of Vitamin D & How to Get It",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      date: new Date("2022-09-12"),
      author: "Rachi Card",
      title: "Our Favourite Summertime Tomato",
      description:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];
  return (
    <div className="news" id="news">
      <div className="container">
        <div className="news__header">
          <div className="news__titles">
            <h4 className="news__subtitle">News</h4>
            <h3 className="news__title">
              Discover weekly content about organic food, & more
            </h3>
          </div>
          <div className="news__button-wrapper">
            <Button text="More News" color="white" />
          </div>
        </div>
        <div className="news-cards__wrapper">
          {cardsData.map((card, index) => (
            <NewsCard
              key={index}
              date={card.date}
              author={card.author}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
