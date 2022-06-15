import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

function AddToCart() {
  const [cartPro, setCartPro] = useState([]);
  const { addToCart } = useSelector((state) => {
    return state.addToCartPro;
  });

  useEffect(() => {
    if (addToCart) {
      setCartPro([...cartPro, addToCart]);
    }
  }, []);
  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Pro Name</Th>
              <Th>Description</Th>
              <Th>brand</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartPro.map((data) => {
              return (
                <Tr>
                  <Td>{data.ProductName}</Td>
                  <Td>{data.description}</Td>
                  <Td>{data.branch}</Td>
                  <Td>{data.price}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AddToCart;
