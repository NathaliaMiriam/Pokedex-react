// rafc
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    console.log(endpoints);
    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    //   .then((res) => setPokemons(res.data.results))
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
    /*
maxWidth='false' --> p ñ ter largura nenhuma de margem p os cards
*/
  );
};
