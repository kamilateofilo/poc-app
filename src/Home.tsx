import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/core';
 
import { RootStackParamList } from '../app/types';
 
 
const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
 
 
  return (
    <View style={styles.homeChild}>
      <View style={styles.instanceParent}>
        <Pressable
          style={[styles.frameWrapper, styles.frameLayout]}
          onPress={() => navigation.navigate("IdentificacaoFamilia")}
        >
          <View style={[styles.frameContainer, styles.header1FlexBox]}>
            <View style={styles.familySvgrepoCom1Parent}>
              <Image
                style={styles.familySvgrepoCom1Icon}
                source={require("../assets/images/familysvgrepocom-1.png")}
              />
              <Text style={[styles.crdito, styles.crasTypo]}>
                Identificação da família
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("Beneficios")}
        >
          <View style={[styles.frameContainer, styles.header1FlexBox]}>
            <View style={styles.familySvgrepoCom1Group}>
              <Image
                style={styles.familySvgrepoCom1Icon}
                source={require("../assets/images/familysvgrepocom-11.png")}
              />
              <Text style={[styles.crdito, styles.crasTypo]}>Benefícios</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("PAIFAgenda")}
        >
          <View style={[styles.frameContainer, styles.header1FlexBox]}>
            <View style={styles.familySvgrepoCom1Group}>
              <Image
                style={styles.familySvgrepoCom1Icon}
                source={require("../assets/images/familysvgrepocom-12.png")}
              />
              <Text style={[styles.crdito, styles.crasTypo]}>PAIF</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("PesquisarUnidades")}
        >
          <View style={[styles.frameContainer, styles.header1FlexBox]}>
            <View style={styles.familySvgrepoCom1Group}>
              <Image
                style={styles.familySvgrepoCom1Icon}
                source={require("../assets/images/familysvgrepocom-13.png")}
              />
              <Text style={[styles.crdito, styles.crasTypo]}>
                Pesquisar unidades
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("Sobre")}
        >
          <View style={[styles.frameContainer, styles.header1FlexBox]}>
            <View style={styles.familySvgrepoCom1Group}>
              <Image
                style={[styles.familySvgrepoCom1Icon4, styles.familyIconLayout]}
                source={require("../assets/images/familysvgrepocom-14.png")}
              />
              <Text style={[styles.crdito, styles.crasTypo]}>
                Sobre a Proteção Social
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.frameLayout]}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <View style={[styles.frameContainer, styles.header1FlexBox]}>
            <View style={styles.familySvgrepoCom1Group}>
              <Image
                style={[styles.familySvgrepoCom1Icon5, styles.familyIconLayout]}
                source={require("../assets/images/familysvgrepocom-15.png")}
              />
              <Text style={[styles.crdito, styles.crasTypo]}>
                Cadastro Único
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.frameParent, styles.headerPosition]}>
        <View style={styles.iconsParent}>
          <Image
            style={styles.familySvgrepoCom1Icon}
            source={require("../assets/images/icons.png")}
          />
          <Text style={styles.home1}>Home</Text>
        </View>
        <Pressable
          style={styles.mapPinParent}
          onPress={() => navigation.navigate("PesquisarUnidades")}
        >
          <Image
            style={styles.familySvgrepoCom1Icon}
            source={require("../assets/images/mappin.png")}
          />
          <Text style={styles.home1}>Cras/Creas</Text>
        </Pressable>
        <View style={styles.iconsParent}>
          <Image
            style={styles.familySvgrepoCom1Icon}
            source={require("../assets/images/icons1.png")}
          />
          <Text style={styles.home1}>Configurações</Text>
        </View>
        <View style={styles.iconsParent}>
          <Image
            style={styles.icons2}
            source={require("../assets/images/icons2.png")}
          />
          <Text style={styles.home1}>Notificações</Text>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.header1, styles.header1FlexBox]}>
          <Image
            style={styles.icons3}
            source={require("../assets/images/icons3.png")}
          />
          <View style={styles.texto}>
            <Text style={[styles.crdito6, styles.crdito6FlexBox]}>
              Olá, Liliane
            </Text>
          </View>
          <View style={[styles.iconsWrapper, styles.header1FlexBox]}>
            <Image
              style={styles.familySvgrepoCom1Icon}
              source={require("../assets/images/icons4.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={styles.groupContainer}>
          <View style={[styles.groupGroup, styles.groupPosition]}>
            <Image
              style={[styles.groupIcon, styles.groupPosition]}
              source={require("../assets/images/group.png")}
            />
            <Text
              style={[styles.olLilianeSejaContainer, styles.crdito6FlexBox]}
            >
              <Text style={styles.olLilianeSejaContainer1}>
                <Text
                  style={styles.olLilianeSeja}
                >{`Olá, Liliane, seja bem-vinda ao pedacinho do `}</Text>
                <Text style={[styles.cras, styles.crasTypo]}>CRAS</Text>
                <Text style={styles.olLilianeSeja}>{` e `}</Text>
                <Text style={[styles.cras, styles.crasTypo]}>CREAS</Text>
                <Text style={styles.olLilianeSeja}>{` sempre ao seu lado.
Eu sou a dona `}</Text>
                <Text style={[styles.cras, styles.crasTypo]}>Cida</Text>
                <Text style={styles.olLilianeSeja}>
                  {" "}
                  e estou aqui para te acolher e aproximar dos serviços de
                  assistência social.
                </Text>
              </Text>
            </Text>
          </View>
          <Image
            style={styles.image4Icon}
            source={require("../assets/images/cida-recort.png")}
          />
        </View>
      </View>
      <View style={styles.homeChild} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  frameLayout: {
    height: 76,
    backgroundColor: '#d9d9d9',
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
    width: 376,
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
    overflow: "hidden",
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
    paddingHorizontal: 0,
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
    left: "28.54%",
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
    top: 343,
    left: 21,
  },
});
 
export default Home;