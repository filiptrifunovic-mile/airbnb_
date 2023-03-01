import Image from "./Image";

const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place.photos?.length) {
    return "";
  }

  if (!className) {
    className = "object-cover";
  }

  return <Image src={place.photos[index]} alt="photos" className={className} />;
};

export default PlaceImg;
