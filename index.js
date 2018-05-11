import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList headerText={'Album List'} />
  </View>

);

// Render it to a device
AppRegistry.registerComponent('albums', () => App);
