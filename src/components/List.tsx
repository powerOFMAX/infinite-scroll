import React, { FC, useState, useEffect } from "react";
import { Box, Stack, Skeleton } from "@chakra-ui/core";
import House from "./House";
import axios from "axios";
import useRefElement from "./useRefElement";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://app-homevision-staging.herokuapp.com/api_project/houses?per_page=10";

export const List: FC = () => {
  const [listItems, setListItems] = useState<Array<HouseData>>([]);
  const [fetchMore, setFetchMore] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchMoreListItems(): Promise<any> {
      console.log("Fetching...");
      setIsFetching(true);
      try {
        const response = await axios.get(`${API_URL}&page=${page}`);
        setListItems((prevHouses) => [...prevHouses, ...response.data.houses]);
      } catch (err) {
        console.log("Error, fetching again!");
        return await fetchMoreListItems();
      }

      setFetchMore(false);
      setIsFetching(false);
      setPage((prevPage) => prevPage + 1);
    }
    if (fetchMore) fetchMoreListItems();
  }, [fetchMore, page]);

  const refElement = useRefElement(isFetching, setFetchMore);

  return (
    <>
      <Stack alignItems="center" spacing={30}>
        {listItems.map((item) => (
          <House
            key={item.id}
            address={item.address}
            src={item.photoURL}
            owner={item.homeowner}
            price={item.price}
          />
        ))}
        <Box w="40%" ref={refElement}>
          <Skeleton h="240px" my="10px" />
          <Skeleton h="20px" my="10px" />
          <Skeleton h="20px" my="10px" />
          <Skeleton h="20px" my="10px" />
        </Box>
      </Stack>
    </>
  );
};

type HouseData = {
  id: number;
  address: string;
  photoURL: string;
  homeowner: string;
  price: number;
};
