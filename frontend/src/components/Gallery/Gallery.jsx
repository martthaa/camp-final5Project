export const Gallery = () => {
	const galleryCards = [
		{ title: "Organic Juice" },
		{ title: "Organic Food" },
		{ title: "Nuts Cookies" },
	];

     const GalleryCard = ({ title }) => {
        return (
            <div className="gallery-card">
                <div className="gallery-card__title">{title}</div>
            </div>
        );
    };

	return (
		<div className="gallery" id="gallery">
			<div className="gallery__wrapper">
				{galleryCards.map((card, index) => (
					<GalleryCard title={card.title} key={index} />
				))}
			</div>
		</div>
	);
};
