import { StackNavigationProp } from "@react-navigation/stack";
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import Familia from "../components/Beneficios/ContasEBeneficios";

const Beneficios = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const integrantesDetalhes = [
    {
      tipo: "Fixo",
      dataConcessão: "01/01/1980",
      status: "Ativo",
    },
  ];

  const cestaBasica = [
    {
      tipo: "Eventual",
      dataConcessão: "22/05/2023",
      status: "Eventual",
    },
    {
      tipo: "Eventual",
      dataConcessão: "20/04/2023",
      status: "Eventual",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.headerPosition]}>
        <View style={[styles.header]}>
          <TouchableOpacity onPress={() => navigation.navigate('Home' as never)}>
            <Image style={styles.headerIcon} source={require("../assets/images/arrow-left-icon.png")} />
          </TouchableOpacity>
          <Text style={[styles.headerText]}>
            Benefícios
          </Text>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <View>
          <View style={styles.background} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/images/group.png")}
            />
            <Text style={styles.descriptionContainer}>
              <Text>
                <Text>{`Estes são os `}</Text>
                <Text style={styles.highlightText}>beneficios</Text>
                <Text>{` recebidos e em recebimento. Fique atento aos `}</Text>
                <Text style={styles.highlightText}>status</Text>
                <Text>
                  {` dos beneficios para sempre renovar e/ou regularizar, mantendo assim a continuidade do direito. `}
                </Text>
              </Text>
            </Text>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/images/group2..png")}
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View>
          <View style={styles.familyContainer}>
            <Familia
              title="Bolsa Família"
              mingcutedownFill={require("../assets/images/mingcutedownfill4.png")}
              detailsBenefits={integrantesDetalhes}
              propMarginTop={16}
            />
          </View>

          <View style={styles.familyContainer}>
            <Familia
              title="Tarifa Social de Energia Elétrica"
              mingcutedownFill={require("../assets/images/mingcutedownfill4.png")}
              detailsBenefits={integrantesDetalhes}
              propMarginTop={16}
            />
          </View>

          <View style={styles.familyContainer}>
            <Familia
              title="Cesta Básica"
              mingcutedownFill={require("../assets/images/mingcutedownfill4.png")}
              detailsBenefits={cestaBasica}
              propMarginTop={16}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 300,
  },
  highlightText: {
    fontWeight: "700",
    color: "#e42f58",
  },
  background: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  icon: {
    bottom: -160,
    height: "100%",
    left: -35,
    width: "125%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  descriptionContainer: {
    top: -10,
    left: -25,
    lineHeight: 15,
    textAlign: "left",
    width: "120%",
    height: "50%",
    fontSize: 9,
  },
  textContainer: {
    height: "54.27%",
    width: "71.46%",
    bottom: "45.73%",
    left: "28.54%",
  },
  image: {
    top: 186,
    width: 170,
    height: 170,
    right: 180,
    position: "absolute",
  },
  contentContainer: {
    height: "93.78%",
    width: "82.18%",
    top: "6.22%",
    right: "8.91%",
    left: "8.91%",
    bottom: "0%",
    position: "absolute",
  },
  headerContainer: {
    height: 400,
    width: '100%',
    left: 0,
    position: "relative",
  },
  familyContainer: {
    marginTop: 15,
  },
  headerPosition: {
    width: '100%',
    backgroundColor: "#e42f58",
    padding: 20
  },
  header: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
  },
  headerText: {
    color: '#fff',
    
  },
  headerIcon: {
    maxHeight: "100%",
    width: 30,
    height: 30,
    marginEnd: 20
  }
});

export default Beneficios;
