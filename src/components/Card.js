import React from 'react';
import { View } from 'react-native';

const Card = () => {
  return (
    <View style={styles.conatinerStyle}>
      
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shdowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRiht: 5,
    marginTop: 10,
  }
};

export default Card;
