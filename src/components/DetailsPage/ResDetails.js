import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_DETAILS } from "../../utils/constants";
import { TittleCard } from "./TittleCard/TittleCard";
import { Menu } from "./Menu/Menu";

export const ResDetails = () => {
  const [resData, setResData] = useState([]);
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
  return (
    resData.length > 0 && (
      <>
        <main className="content">
          <section className="tittle restaurent">
            <TittleCard resDetails={resData?.[2]} />
          </section>
          <section className="menu restaurent">
            <Menu resMenu={resData?.[4]} />
          </section>
        </main>
      </>
    )
  );
};
