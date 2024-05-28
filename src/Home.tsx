import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/core';

import { RootStackParamList } from '../app/types';

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
 
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, 
    });
  }, [navigation]);

  const data = [
    { label: 'Identificação da família', route: 'IdentificacaoFamilia', image: require("../assets/images/familysvgrepocom-1.png") },
    { label: 'Benefícios', route: 'Beneficios', image: require("../assets/images/familysvgrepocom-11.png") },
    { label: 'PAIF', route: 'PAIFAgenda', image: require("../assets/images/familysvgrepocom-12.png") },
    { label: 'Pesquisar unidades', route: 'PesquisarUnidades', image: require("../assets/images/familysvgrepocom-13.png") },
    { label: 'Sobre a Proteção Social', route: 'Sobre', image: require("../assets/images/familysvgrepocom-14.png") },
    { label: 'Cadastro Único', route: 'Cadastro', image: require("../assets/images/familysvgrepocom-15.png") },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <View style={[styles.frameWrapper, styles.frameLayout]}>
      <Pressable onPress={() => navigation.navigate(item.route)}>
        <View style={[styles.frameContainer, styles.header1FlexBox]}>
          <View style={styles.familySvgrepoCom1Parent}>
            <Image style={styles.familySvgrepoCom1Icon} source={item.image} />
            <Text style={[styles.crdito, styles.crasTypo]}>
              {item.label}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.homeChild}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.header1, styles.header1FlexBox]}>
          <Image style={styles.icons3} source={require("../assets/images/icons3.png")} />
          <View style={styles.texto}>
            <Text style={[styles.crdito6, styles.crdito6FlexBox]}>
              Olá, Liliane
            </Text>
          </View>
          <View style={[styles.iconsWrapper, styles.header1FlexBox]}>
            <Image style={styles.familySvgrepoCom1Icon} source={require("../assets/images/icons4.png")} />
          </View>
        </View>
      </View>

      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>

        <View style={styles.groupContainer}>
          <View style={[styles.groupGroup, styles.groupPosition]}>
            <Image style={[styles.groupIcon, styles.groupPosition]} source={require("../assets/images/group.png")} />
            <Text style={[styles.olLilianeSejaContainer, styles.crdito6FlexBox]}>
              <Text style={styles.olLilianeSejaContainer1}>
                <Text style={styles.olLilianeSeja}>
                  Olá, Liliane, seja bem-vinda ao pedacinho do{' '}
                </Text>
                <Text style={[styles.cras, styles.crasTypo]}>CRAS</Text>
                <Text style={styles.olLilianeSeja}>{' e '}</Text>
                <Text style={[styles.cras, styles.crasTypo]}>CREAS</Text>
                <Text style={styles.olLilianeSeja}>{' sempre ao seu lado. Eu sou a dona '}</Text>
                <Text style={[styles.cras, styles.crasTypo]}>Cida</Text>
                <Text style={styles.olLilianeSeja}>
                  {' e estou aqui para te acolher e aproximar dos serviços de assistência social.'}
                </Text>
              </Text>
            </Text>
          </View>
          <Image style={styles.image4Icon} source={require("../assets/images/cida-recort.png")} />
        </View>
      </View>

      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: "90%",
    marginLeft: "8%",
    
  },
  frameLayout: {
    height: 76,
    backgroundColor: '#FECE17',
    borderRadius: 5,
    justifyContent: "center",
    width: 328,
  },
  header1FlexBox: {
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  crasTypo: {
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  familyIconLayout: {
    width: 24,
    height: 24,
  },
  headerPosition: {
    width: '100%',
    backgroundColor: "#e42f58",
    left: 0,
    position: "absolute",
    
  },
  crdito6FlexBox: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  groupLayout: {
    height: 273,
    width: 376,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  familySvgrepoCom1Icon: {
    height: 24,
    width: 24,
  },
  crdito: {
    fontSize: 18,
    marginLeft: 16,
    textAlign: "center",
    color: "#000",
  },
  familySvgrepoCom1Parent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainer: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 41,
    borderBottomRightRadius: 41,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 20,
    width: 328,
    paddingVertical: 0,
  },
  frameWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  familySvgrepoCom1Group: {
    flexDirection: "row",
    alignItems: "center",
  },
  framePressable: {
    marginTop: 8,
    justifyContent: "center",
  },
  familySvgrepoCom1Icon4: {
    height: 24,
  },
  familySvgrepoCom1Icon5: {
    height: 24,
  },
  instanceParent: {
    marginLeft: -163.9,
    top: 362,
    left: "50%",
    height: 613,
    position: "absolute",
  },
  home1: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 10,
    marginTop: 8,
    textAlign: "center",
  },
  iconsParent: {
    alignItems: "center",
  },
  mapPinParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  icons2: {
    width: 20,
    height: 24,
  },
  frameParent: {
    bottom: 0,
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  icons3: {
    alignSelf: "stretch",
    maxHeight: "100%",
    width: 24,
  },
  crdito6: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#ccc",
    left: "0%",
    height: "100%",
    width: "100%",
    top: "0%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  texto: {
    width: 80,
    height: 18,
    marginLeft: 8,
  },
  iconsWrapper: {
    width: 208,
    justifyContent: "flex-end",
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  header1: {
    width: 352,
    paddingHorizontal: 20,
  },
  header: {
    paddingHorizontal: 5,
    paddingVertical: 20,
    top: 0,
  },
  groupChild: {
    top: 0,
    backgroundColor: "#fff",
  },
  rectangleWrapper: {
    top: 0,
  },
  groupIcon: {
    maxWidth: "100%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    right: "0%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  olLilianeSeja: {
    fontFamily: "Roboto",
    color: "#000",
  },
  cras: {
    color: "#ccc",
  },
  olLilianeSejaContainer1: {
    width: "100%",
  },
  olLilianeSejaContainer: {
    top: 21,
    left: 22,
    lineHeight: 16,
    textAlign: "left",
    width: 193,
    height: 59,
    fontSize: 10,
  },
  groupGroup: {
    height: "54.27%",
    width: "71.46%",
    bottom: "45.73%",
  },
  image4Icon: {
    top: 70,
    width: 111,
    height: 187,
    left: 0,
    position: "absolute",
  },
  groupContainer: {
    height: "93.78%",
    width: "82.18%",
    top: "6.22%",
    right: "8.91%",
    left: "8.91%",
    bottom: "0%",
    position: "absolute",
  },
  groupParent: {
    top: 73,
  },
  homeChild: {
    height: 'auto',
    width: 'auto',
  },
});

export default Home;
