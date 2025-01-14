import { useDispatch, useSelector } from "react-redux";
import { addResInfo, clearCart } from "../DetailsPage/resDetailsSlice";
import { notify } from "../../utils/common";

export const ReplaceCart = ({ onShow, restaurent }) => {
  const { resInfo } = useSelector((store) => store.resDetails);
  const restaurantInfo = {
    id: restaurent.id,
    name: restaurent.name,
    area: restaurent.areaName,
    city: restaurent.city,
  };
  const dispatch = useDispatch();
  const handleClose = () => {
    onShow();
  };
  const handleReplace = () => {
    dispatch(clearCart());
    dispatch(addResInfo(restaurantInfo));
    onShow();
    notify('Cart replaced successfully');
  };
  return (
    <div className="replace-cart-model">
      <h1 className="title">
        <b>Replace cart item?</b>
      </h1>
      <p className="replace-desc">
        {`Your cart contains dishes from`} <b>{resInfo?.name}</b>.{" "}
        {`Do you want to discard the selection and add dishes from`}{" "}
        <b>{restaurantInfo.name}</b>
      </p>
      <div className="button-options">
        <button className="cancel-button" onClick={handleClose}>
          No
        </button>
        <button className="replace-btn" onClick={handleReplace}>
          Replace
        </button>
      </div>
    </div>
  );
};
