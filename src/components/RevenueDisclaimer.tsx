export default function RevenueDisclaimer() {
  return (
    <section id="revenue-disclaimer" className="section revenue-notice" aria-labelledby="revenue-notice-title">
      <div className="container">
        <div className="notice-panel reveal">
          <p className="notice-label">Important Revenue Notice</p>
          <h2 id="revenue-notice-title" className="notice-title">
            Target figures are not guaranteed earnings
          </h2>
          <div className="notice-body">
            <p>
              These figures are not guaranteed earnings. Actual revenue depends on market
              conditions, freight availability, equipment, mileage, operating area, seasonality,
              fuel costs, and carrier decisions.
            </p>
            <p>
              The figures shown represent target or potential weekly gross revenue levels. Actual
              revenue can vary based on freight availability, market conditions, equipment type,
              operating area, mileage, fuel costs, carrier availability, seasonality, and the loads
              a carrier chooses to accept.
            </p>
            <p className="notice-strong">
              The carrier always has the final decision on whether to accept or decline a load.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
