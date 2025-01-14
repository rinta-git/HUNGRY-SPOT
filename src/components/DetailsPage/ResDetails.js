import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_DETAILS } from "../../utils/constants";
import { TittleCard } from "./TittleCard/TittleCard";
import { Menu } from "./Menu/Menu";
import { ReplaceCart } from "../ReplaceCart/ReplaceCart";
import { ShimmerDetails } from "./ShimmerDetails";

export const ResDetails = () => {
  const [resData, setResData] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const { resId } = useParams();
  const API_URL = RES_DETAILS + resId;
  useEffect(() => {
    fetchDetails(API_URL);
  }, [API_URL]);

  const fetchDetails = async (API_URL) => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      setResData(json.data.cards);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };
  if(resData.length === 0) return <main className="content"><ShimmerDetails /></main>;
  return (
    resData.length > 0 && (
      <>
        {showModel && <div className="overlay" />}
        <main className={`content ${showModel ? "model-open" : ""}`}>
          <section className="tittle restaurent">
            <TittleCard resDetails={resData?.[2]} />
          </section>
          <section className="menu restaurent">
            <Menu
              resMenu={resData?.[4]}
              resInfo={resData?.[2]?.card?.card?.info}
              showModel={showModel}
              onShow={() => setShowModel(!showModel)}
            />
          </section>
          {showModel && (
            <ReplaceCart
              onShow={() => setShowModel(!showModel)}
              restaurent={resData?.[2]?.card?.card?.info}
            />
          )}
        </main>
      </>
    )
  );
};
