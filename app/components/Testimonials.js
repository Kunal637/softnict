export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="section-subtitle">Don't just take our word for it</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "The AI chatbot they built transformed our customer service. Response times dropped by 80% 
              and customer satisfaction is at an all-time high."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">J</div>
              <div>
                <h4>John Smith</h4>
                <p>CEO, TechCorp</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Professional, knowledgeable, and delivered exactly what we needed. The predictive analytics 
              system has been a game-changer for our business."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div>
                <h4>Sarah Johnson</h4>
                <p>CTO, DataFlow Inc</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Outstanding work on our document processing system. They understood our needs perfectly 
              and delivered ahead of schedule."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">M</div>
              <div>
                <h4>Michael Chen</h4>
                <p>Director, FinanceHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
