import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

const List = ()=>{
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    const getCoutries = async()=>{
      const data = await fetch("https://restcountries.eu/rest/v2/all?fildes=nane");
      const jsonData = await data.json();
      console.log(jsonData);
      setCountries(jsonData);
    }
    getCoutries();
  },[])

  return(
    <View>
      <Text>List of Countries</Text>
     
    </View>
  )
}
export default List;

