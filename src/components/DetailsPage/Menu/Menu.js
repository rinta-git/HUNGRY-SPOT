export const Menu = ({ resMenu }) => {
  const { cards } = resMenu?.groupedCard?.cardGroupMap?.REGULAR || {};
  console.log("Menu cards:", cards);

  const renderMenuList = (card) => {
    return (
        <div className="menu-card">
            <h2>{card?.title} ({card?.itemCards?.length})</h2>
            <div className="menu-items">
                {card?.itemCards?.map((item) => (
                    <div className="menu-item" key={item?.card?.info?.id}>
                        <div className="menu-item-info">
                        <h3>{item?.card?.info?.name}</h3>
                        <p>{item?.card?.info?.defaultPrice / 100}</p>
                        <p>{item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>
                        <p>{item?.card?.info?.description}</p>
                        </div>
                        <div className="menu-item-img">

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
  }
  return (
    <>
      <h1>--- Menu ---</h1>
      <hr />
      <section className="menu-wrapper">
        {cards?.map((item) => item.card.card.hasOwnProperty("itemCards") ? renderMenuList(item.card.card) : "" ) }
      </section>
    </>
  );
};
