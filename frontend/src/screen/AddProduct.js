import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Button,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductAction } from "../action/AdminAction";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //submitHander
  const submitHander = (e) => {
    e.preventDefault();
    console.log(
      name,
      "name",
      description,
      "description",
      brand,
      "brand",
      price,
      "price"
    );
    const obj = {
      name,
      description,
      brand,
      price,
    };
    dispatch(addProductAction(obj));
    navigate("/dashboard");
  };

  return (
    <Box w="500px" ml="auto" mr="auto" mt="20px">
      <form onSubmit={submitHander}>
        <VStack>
          <FormControl>
            <FormLabel htmlFor="name">Enter Product Name</FormLabel>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">
              Enter Product Description
            </FormLabel>
            <Input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              id="description"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="brand">Enter Product Brand</FormLabel>
            <Input
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              id="brrand"
              type="text"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="price">Enter Product Price</FormLabel>
            <Input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              id="price"
              type="text"
            />
          </FormControl>
        </VStack>
        <Center mt="10px">
          <Button type="submit">Add Product</Button>
        </Center>
      </form>
    </Box>
  );
}

export default AddProduct;
