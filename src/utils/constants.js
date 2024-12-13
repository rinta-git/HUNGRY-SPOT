export const RES_LIST =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  import { v4 as uuidv4 } from 'uuid';

  export const FILTERS = {
    Ratings: [
      { id: uuidv4(), value: "3+" },
      { id: uuidv4(), value: "4+" },
      { id: uuidv4(), value: "4.5+" }
    ],
    "Delivery Time": [
      { id: uuidv4(), value: "10-20 mins" },
      { id: uuidv4(), value: "20-25 mins" },
      { id: uuidv4(), value: "25-30 mins" },
      { id: uuidv4(), value: "20-30 mins" },
      { id: uuidv4(), value: "40-45 mins" }
    ],
    "Veg/Non-Veg": [
      { id: uuidv4(), value: "Veg" },
      { id: uuidv4(), value: "Non-veg" }
    ]
  };
  