import axios from "axios";
import React from "react";
import { ListItem } from 'react-native-elements'
import {
    View,
    
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
  } from 'react-native';
const baseURL = "https://fakestoreapi.com/products";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function detalleProducto() {
    
  }

  if (!post) return "No post!"

  return (
    <View>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftIcons={{ source: { uri: l.icons } }}
        nombre={l.name}
        precio={l.precio}
        
      />
    ))
  }
</View>
  );
}