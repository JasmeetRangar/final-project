import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import Results from './Results';
import { Typography } from "@material-ui/core";
import { spacing } from '@material-ui/system';
const axios = require('axios');

export default function Search(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (term) {

      const testURL = `http://api.tvmaze.com/search/shows?q=${term}`;
      axios.get(testURL).then(response => {
        //console.log(response.data);
        setResults([...response.data])
      })
      .catch(e => console.log(e));
    }
  }, [term])
  return (
    <React.Fragment>
      <Typography variant='h4' spacing='2'>Search Shows</Typography>
      <SearchBar onSearch={term => setTerm(term)} />
      <Results results={results.length > 0? results : data} />
    </React.Fragment>
  )
}
