export const EcoFriendly = () => {
  const ecoFriendlyItems = [
    {
      title: "Start with Our Company First",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
    },
    {
      title: "Learn How to Grow Yourself",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
    },
    {
      title: "Farming Strategies of Today",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.",
    },
  ];
  return (
    <div className="eco-friendly" id="eco-friendly">
      <div className="container">
        <div className="eco-friendly__content">
          <h3 className="eco-friendly__subtitle">Eco Friendly</h3>
          <h2 className="eco-friendly__title">
            Econis is a Friendly Organic Store
          </h2>
          <div className="eco-friendly__items">
            {ecoFriendlyItems.map((item, index) => (
              <div className="about-us__item" key={index}>
                <div className="about-us__content-wrapper">
                  <h4 className="about-us__item-title">{item.title}</h4>
                  <div className="about-us__item-description">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
