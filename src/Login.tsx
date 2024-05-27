import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/types';

type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, 
    });
  }, [navigation]);

  return (
    <View style={[styles.login, styles.loginFlexBox]}>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/images/cida-login.png")}
      />
      <View style={[styles.image3Parent, styles.loginFlexBox]}>
        <Image
          style={styles.image3Icon}
          resizeMode="cover"
          source={require("../assets/images/cida-image.png")}
        />
        <View style={styles.botoParent}>
          <Pressable
            style={[styles.boto1, styles.botoFlexBox]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={[styles.botoPrimario1, styles.botoTypo]}>
              Entrar na minha conta
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  botoFlexBox: {
    padding: 1,
    flexDirection: "row",
    width: 328,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  botoTypo: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 18,
  },
  maskGroupIcon: {
    width: 387,
    height: 566,
  },
  image3Icon: {
    width: 138,
    height: 88,
  },
  botoPrimario: {
    color: '#d9d9d9',
  },
  boto: {
    backgroundColor: '#e42f582',
  },
  botoPrimario1: {
    color: '#fff',
    
  },
  boto1: {
    backgroundColor: '#E42F58',
    borderStyle: "solid",
    borderColor: '#ccc',
    borderWidth: 2,
    marginTop: 8,
  },
  botoParent: {
    justifyContent: "flex-end",
    marginTop: 16,
    alignItems: "center",
  },
  image3Parent: {
    paddingHorizontal: 0,
    paddingVertical: 16,
  },
  login: {
    backgroundColor: '#fff',
    flex: 1,
    width: "100%",
    height: 800,
    paddingBottom: 32,
    overflow: "hidden",
    justifyContent: "center",
  },
});

export default Login;
