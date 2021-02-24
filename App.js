import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

const List = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCoutries = async () => {
      const data = await fetch("https://restcountries.eu/rest/v2/all");
      const jsonData = await data.json();
      console.log("jsonData", jsonData);
      setCountries(jsonData);
    }
    getCoutries();
    console.log("countries", countries);
  }, [])

  return (
    <View>
      <Text>List of Countries</Text>
      <FlatList
        data={countries}
        renderItem=
        {
          ({ item }) =>
          (
            <View >
              <Text>Country name: {item.name} <br /> Capital : {item.capital} </Text>
            </View>
          )
        }
      />

    </View>
  )
}
export default List;

