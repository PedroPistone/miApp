import React from 'react';
import { View, Text } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const MyComponent = ({ style }) => {
  return (
    <View style={style}>
      <Text>Contenido de mi componente</Text>
    </View>
  );
};

MyComponent.propTypes = {
  style: ViewPropTypes.style,
};

export default MyComponent;
