import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const baseURL = "http://localhost:5000/images/"; // Replace with your actual base URL

const RestaurentCard = ({ resData }) => {
  // console.log(resData.rating);
  const { imageOfRes, name, cuisines, rating, location, deliveryTime } = resData;

  const imageUrl = baseURL + imageOfRes;

  // Log the full image URL to ensure it is correct
  console.log("Full Image URL:", imageUrl);

  // Placeholder image for debugging
  const placeholderImage = "https://via.placeholder.com/150";

  return (
    <div data-testid="cards" className="m-4 p-4 w-64 bg-zinc-200 rounded-lg">
      <img
        className="rounded-t-md"
        src={imageUrl || placeholderImage}
        alt={name}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop in case of placeholder failure
          e.target.src = placeholderImage;
        }}
      />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <h4 className="font-semibold">{cuisines.join(", ")}</h4>
        <div className="flex items-center">
          <h4>{rating}</h4>
          <FaStar className="text-yellow-500 ml-1" />
        </div>
        <h4>{deliveryTime}</h4>
        <div className="flex items-center">
          <MdLocationOn className="text-slate-600 -ml-1" />
          <h4 className="ml-1">{location}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
