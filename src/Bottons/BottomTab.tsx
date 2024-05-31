import React from "react";
import { Image } from 'expo-image';
import { View, Text, Pressable } from "react-native";
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import styles from "./styles";




const BottomTabNavigator = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
  <View>
    <View style={styles.frameContainer}>
        <Pressable style={styles.instanceParent} onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.mingcutedownFillIcon}
            contentFit="cover"
            source={require("../../assets/images/icons6.png")}
          />
          <Text style={styles.home}>Home</Text>
        </Pressable>
        <Pressable style={styles.instanceParent} onPress={() => navigation.navigate("PesquisarUnidades")}>
          <Image
            style={styles.mingcutedownFillIcon}
            contentFit="cover"
            source={require("../../assets/images/mappin1.png")}
          />
          <Text style={styles.home}>Cras/Creas</Text>
        </Pressable>
        <View style={styles.instanceParent}>
          <Image
            style={styles.mingcutedownFillIcon}
            contentFit="cover"
            source={require("../../assets/images/icons7.png")}
          />
          <Text style={styles.home}>Configurações</Text>
        </View>
        <View style={styles.instanceParent}>
          <Image
            style={styles.icons2}
            contentFit="cover"
            source={require("../../assets/images/icons8.png")}
          />
          <Text style={styles.home}>Notificações</Text>
        </View>
      </View>
      <View style={styles.header}>
        <Pressable style={styles.headerContent} onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.icons3}
            contentFit="cover"
            source={require("../../assets/images/icons5.png")}
          />
          <View style={styles.texto}>
            <Text style={styles.credito}>PAIF</Text>
          </View>
          <View style={styles.iconsWrapper}>
            <Image
              style={styles.icons4}
              contentFit="cover"
              source={require("../../assets/images/icons4.png")}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default BottomTabNavigator;
