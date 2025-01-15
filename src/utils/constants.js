const encodedUrl = encodeURIComponent(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const encodedResDetails = encodeURIComponent(
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&submitAction=ENTER&restaurantId="
);
const encodedImgUrl = encodeURIComponent(
  "https://media-assets.swiggy.com/swiggy/"
);

export const RES_LIST = `https://corsproxy.io/?url=${encodedUrl}`;
export const RES_DETAILS = `https://corsproxy.io/?url=${encodedResDetails}`;
export const MENU_IMG_URL_PREFIX = `https://corsproxy.io/?url=${encodedImgUrl}`;

import { v4 as uuidv4 } from "uuid";

export const FILTERS = {
  Ratings: [
    { id: uuidv4(), value: "3+" },
    { id: uuidv4(), value: "4+" },
    { id: uuidv4(), value: "4.5+" },
  ],
  "Delivery Time": [
    { id: uuidv4(), value: "10-15 mins" },
    { id: uuidv4(), value: "15-20 mins" },
    { id: uuidv4(), value: "20-25 mins" },
    { id: uuidv4(), value: "25-30 mins" },
    { id: uuidv4(), value: "30-35 mins" },
    { id: uuidv4(), value: "35-40 mins" },
    { id: uuidv4(), value: "40-45 mins" },
    { id: uuidv4(), value: "45-50 mins" },
    { id: uuidv4(), value: "50-55 mins" },
    { id: uuidv4(), value: "55-60 mins" },
  ],
  "Veg/Non-Veg": [
    { id: uuidv4(), value: "Veg" },
    { id: uuidv4(), value: "Non-veg" },
  ],
};

export const SORT_OPTIONS = [
  "Relevance (Default)",
  "Delivery Time",
  "Rating",
  "Name",
  "Location",
];

export const DELIVERY_FEE = 20;
export const PLATFORM_FEE = 9;

export const CART_REPLACEMENT_MSG =
  "Cart items removed successfully. Please add items to your cart.";
export const CART_ADD_MSG = "Item added to cart successfully.";
export const CART_UPDATE_MSG = "Item count changed.";
export const CART_REMOVE_MSG = "Item removed from cart successfully.";
export const CART_CLEAR_MSG = "Cart cleared successfully.";
