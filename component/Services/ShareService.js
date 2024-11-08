import { Share } from "react-native";

const SharePlace = (place) => {
  Share.share({
    title: "Share Business",
    message:
      "Place Name: " +
      place.name +
      "\n" +
      "Address: " +
      (place.vicinity ? place.vicinity : place.formatted_address),
  });
};

export default {
  SharePlace,
};
