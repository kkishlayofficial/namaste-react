import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

export default RestaurantCard = (props) => {
  const { res } = props;
  let data = res?.info;
  let {
    name,
    cloudinaryImageId,
    cuisines,
    id,
    avgRating,
    costForTwo,
    sla: deliveryTime,
  } = data;
  return (
    <Link to={`/restaurant/${id}`} key={id}>
      <div data-testid='resCard' className='m-4 p-4 w-[300px] h-[500px] bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer'>
        <img
          className='rounded-lg w-[100%] h-[200px] object-fill'
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt={name}
        />
        <h3 className='font-bold py-4 text-lg'>{name}</h3>
        <h4 className='text-sm py-2 text-neutral-500'>{cuisines.join(", ")}</h4>
        <h4 className='text-sm py-2 font-bold'>{avgRating}</h4>
        <h4 className='text-sm py-2'>{costForTwo}</h4>
        <h4 className='text-sm py-2'>{deliveryTime.slaString}</h4>
      </div>
    </Link>
  );
};

export const withOffersLabel = (RestaurantCard) => {
  return (props) => {
    const { res } = props;
    const { header, subHeader } = res.info.aggregatedDiscountInfoV3;
    return (
      <div className='relative'>
        <label className='absolute top-[38%] mx-8 font-bold text-white text-xl bg-black bg-opacity-15 left-4 rounded-lg'>{`${header} ${subHeader}`}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
