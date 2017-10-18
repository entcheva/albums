import React from 'react';
import { View } from 'react-native';
import Header from './src/containers/Header';
import AlbumList from './src/containers/AlbumList';

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
