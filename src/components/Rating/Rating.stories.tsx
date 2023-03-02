import React, {useState} from "react";
import {action} from "@storybook/addon-actions";


import {Rating, RatingType} from "./Rating";

export default {
   title: 'Rating stories',
   component: Rating,
}

export const EmptyRating = () => <Rating value={0} setRatingValue={() => {}}/>
export const Rating1 = () => <Rating value={1} setRatingValue={() => {}}/>
export const Rating2 = () => <Rating value={2} setRatingValue={() => {}}/>
export const Rating3 = () => <Rating value={3} setRatingValue={() => {}}/>
export const Rating4 = () => <Rating value={4} setRatingValue={() => {}}/>
export const Rating5 = () => <Rating value={5} setRatingValue={() => {}}/>

export const RatingChanging = () => {
   const [rating, setRating] = useState<RatingType>(3);

   return (
      <Rating value={rating} setRatingValue={setRating}/>
   )
}

