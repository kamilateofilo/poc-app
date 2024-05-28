import React from "react";
import { Image, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Home";
import styles from "./styles";
import PesquisarUnidades from "../PesquisarUnidades";
import Configuracoes from "../Configuracoes";
import Notificacoes from "../Notificacoes";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.container,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.menu}>
              <Image
                source={require("../../assets/images/icons.png")}
                style={[styles.menuIcon, { tintColor: focused ? color : '#fff' }]}
              />
              <Text style={[styles.menuText, { color: focused ? color : '#fff' }]}>Home</Text>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.menu}>
              <Image
                source={require("../../assets/images/mappin.png")}
                style={[styles.menuIcon, { tintColor: focused ? color : '#fff' }]}
              />
              <Text style={[styles.menuText, { color: focused ? color : '#fff' }]}>Cras/Creas</Text>
            </View>
          ),
        }}
        name="Cras/Creas"
        component={PesquisarUnidades}
      />

    <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.menu}>
              <Image
                source={require("../../assets/images/icons1.png")}
                style={[styles.menuIcon, { tintColor: focused ? color : '#fff' }]}
              />
              <Text style={[styles.menuText, { color: focused ? color : '#fff' }]}>Configurações</Text>
            </View>
          ),
        }}
        name="Configurações"
        component={Configuracoes}
      />

    <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.menu}>
              <Image
                source={require("../../assets/images/icons2.png")}
                style={[styles.menuIcon, { tintColor: focused ? color : '#fff' }]}
              />
              <Text style={[styles.menuText, { color: focused ? color : '#fff' }]}>Notificações</Text>
            </View>
          ),
        }}
        name="Notificações"
        component={Notificacoes}
      />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
