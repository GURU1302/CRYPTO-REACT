import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import {useParams} from "react-router-dom"


const CoinDetails = () => {

    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState("inr");
  
    const params=useParams();

    const currencySymbol =
      currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  
      useEffect(() => {
        const fetchCoins = async () => {
          try {
            const { data } = await axios.get(
              `${server}/coins/${params.id}`
            );
            setCoin(data);
            setLoading(false);
          } catch (error) {
            setError(true);
            setLoading(false);
          }
        };
        fetchCoins();
      }, [params.id]);



  return (
    <div>CoinDetails</div>
  )
}

export default CoinDetails