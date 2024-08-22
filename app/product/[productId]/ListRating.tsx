"use client";

import { Rating } from "@mui/material";
import moment from "moment";
import Avatar from "../Avatar";

interface RatingProps {
  product: any;
}
const ListRating: React.FC<RatingProps> = ({ product }) => {
  return (
    <div>
      <h1>Product Reviews</h1>
      <div className=""></div>
    </div>
  );
};
export default ListRating;
