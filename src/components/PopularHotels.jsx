// src/components/PopularHotels.jsx

const hotels = [
  {
    id: 1,
    name: 'Ayana Resort',
    location: 'Bali, Indonesia',
    price: '$420',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 2,
    name: 'Blue Lagoon',
    location: 'Maldives',
    price: '$580',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 3,
    name: 'Royal Palace',
    location: 'Dubai',
    price: '$690',
    rating: '5.0',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function PopularHotels() {
  return (
    <section className="popular-hotels">

      <div className="section-title-wrap">

        <div>

          <span className="section-tag">
            POPULAR HOTELS
          </span>

          <h2 className="section-title">
            Best Hotels For You
          </h2>

        </div>

        <button className="btn btn-secondary">
          View All
        </button>

      </div>

      <div className="hotel-grid">

        {hotels.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>

            <div
              className="hotel-image"
              style={{
                backgroundImage: `url(${hotel.image})`,
              }}
            >

              <div className="hotel-rating">
                ⭐ {hotel.rating}
              </div>

            </div>

            <div className="hotel-content">

              <h3>{hotel.name}</h3>

              <p>{hotel.location}</p>

              <div className="hotel-footer">

                <div>
                  <div className="hotel-price">
                    {hotel.price}
                  </div>

                  <div className="hotel-night">
                    per night
                  </div>
                </div>

                <button className="btn btn-primary btn-sm">
                  Book
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}