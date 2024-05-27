import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/types';

type InicioCidaNavigationProp = StackNavigationProp<RootStackParamList, 'InicioCida'>;

type Props = {
  navigation: InicioCidaNavigationProp;
};

const InicioCida: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, 
    });
  }, [navigation]);

  return (
    <View style={styles.inicioCida}>
      
      
      <Image
        style={styles.inicioCidaChild}
        resizeMode="cover"
        source={require("../assets/images/cida-image2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inicioCidaChild: {
    top: 280,
    left: 43,
    width: 300,
    position: "absolute",
    height: 200,
  },
  image3Icon: {
    marginTop: -83.8,
    marginLeft: -132,
    top: "50%",
    left: "50%",
    width: 264,
    height: 400,
    position: "absolute",
  },
  inicioCida: {
    backgroundColor: 'white', 
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: "100%",
  },
});

export default InicioCida;
