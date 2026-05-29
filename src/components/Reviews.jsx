import SectionHeader from './SectionHeader.jsx'

const reviews = [
  {
    name: 'Rajesh K.',
    rating: 5,
    text: 'Excellent service! Helped us find the perfect 3 BHK in Sector 20, Panchkula. Very professional and transparent throughout the deal.',
    date: '2 weeks ago',
  },
  {
    name: 'Priya S.',
    rating: 5,
    text: 'Best property dealer in the Tricity area. They showed us multiple options in Mohali and negotiated a great price for our flat.',
    date: '1 month ago',
  },
  {
    name: 'Amit M.',
    rating: 5,
    text: 'Sold our commercial shop in Chandigarh through Budhiraja Property Consultant. Quick process and fair valuation. Highly recommended.',
    date: '1 month ago',
  },
  {
    name: 'Neha G.',
    rating: 5,
    text: 'Very knowledgeable about the local market. Available even late at night which was helpful for working professionals like us.',
    date: '2 months ago',
  },
]

function Stars({ count }) {
  return (
    <span className="review-stars" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="reviews-top">
          <SectionHeader
            eyebrow="Client Feedback"
            title="Google Reviews"
          />
          <div className="reviews-score-card">
            <span className="reviews-score-card__num">4.833</span>
            <div>
              <Stars count={5} />
              <p>Rated by our clients on Google</p>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <article key={i} className="review-card">
              <Stars count={review.rating} />
              <p className="review-card__text">&ldquo;{review.text}&rdquo;</p>
              <div className="review-card__meta">
                <strong>{review.name}</strong>
                <span>{review.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
