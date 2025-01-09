import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = (props) => {
 const {restaurentName, resImg, rating, time, cuisines, location} = props;
  return (
    <>
      <section className="card-wrapper">
        <div className="card-img">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resImg}`}
            alt="pizza-hut"
          />
        </div>
        <div className="card-desc">
          <h1>{restaurentName}</h1>
          <div>
            <span>
              <FontAwesomeIcon icon={faStar} className="star" /> {rating}
            </span>
            <span>&nbsp;&nbsp;{time}</span>
          </div>
          <p>{cuisines.join(', ')}</p>
          <h2><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</h2>
        </div>
      </section>
    </>
  );
};
