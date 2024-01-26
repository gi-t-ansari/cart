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
import { removeItemFromCart } from "../../redux/cartSlice";

export default function CartProduct({ name, image, price, id }) {

  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeItemFromCart({id: id}));
  }

  return (
    <Card className="w-64 h-80 mb-4" id={id}>
      <CardHeader shadow={false} floated={false} className="h-1/2">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </CardHeader>
      <CardBody>
        <div className="flex flex-col items-left justify-between gap-2">
          <Typography color="blue-gray" className="text-sm">
            {name}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="absolute w-52 bottom-4 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          onClick={removeItem}
        >
          Remove Item
        </Button>
      </CardFooter>
    </Card>
  );
}
