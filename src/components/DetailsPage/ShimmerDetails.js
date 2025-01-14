export const ShimmerDetails = () => {
  return (
    <>
      <section className="shimmer-details shimmer-card restaurent">
        <h1 className="shimmer-bg shimmer-res-tittle"></h1>
        <div className="shimmer-data">
          <div className="shimmer-bg shimmer-res-content"></div>
          <div className="shimmer-bg shimmer-res-content"></div>
          <div className="shimmer-bg shimmer-res-content"></div>
        </div>
      </section>
      {Array(20)
        .fill()
        .map((_, index) => (
          <section
            key={index}
            className="shimmer-menu shimmer-card menu shimmer-bg"
          ></section>
        ))}
    </>
  );
};
