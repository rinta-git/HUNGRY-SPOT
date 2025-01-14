import { toast } from "react-toastify";

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const getCartTotalCount = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    acc = item.count + acc;
    return acc;
  }, 0);
};

export const getSubTotal = (cartItems) => {
  return cartItems.reduce((acc, curr) => {
    acc =
      acc +
      curr.count * ((curr?.card?.info?.defaultPrice || curr?.card?.info?.price) / 100);
      return acc;
  }, 0);
};

export const notify = (str) => toast.success(str);