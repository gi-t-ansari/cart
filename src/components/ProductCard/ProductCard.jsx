import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

export default function ProductCard({ name, image, price, id }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart({ id, name, image, price }));
    console.log("Item added...");
  };

  return (
    <Card className="w-72 h-96 mb-4" id={id}>
      <CardHeader shadow={false} floated={false} className="h-1/2">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </CardHeader>
      <CardBody>
        <div className="flex flex-col items-left justify-between gap-2">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium flex align-center font-bold"
          >
            {`Rs ${price}`}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className=" shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={addToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
