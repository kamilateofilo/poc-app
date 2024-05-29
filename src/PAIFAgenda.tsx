import React from 'react';
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from 'expo-image';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";
import { RootStackParamList } from '../app/types';

type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'PAIFAgenda'>;

const PAIFAgenda: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.paifAgenda}>
      <View style={styles.botoParent}>
        <View style={styles.boto}>
          <Text style={styles.botoPrimario}>Agendar atendimento</Text>
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.instanceParent}>
            <View style={styles.frameParent}>
              <View style={styles.agendaWrapper}>
                <Text style={styles.agenda}>Agendados</Text>
              </View>
              <View style={styles.historicoWrapper}>
                <Text style={styles.historico}>Histórico</Text>
              </View>
            </View>
            <View style={styles.paifAgenda1}>
              <View style={styles.paifAgendaInner}>
                <View style={styles.frameGroup}>
                  <View style={styles.botoFlexBox}>
                    <Text style={styles.dataDoAtendimentoContainer}>
                      <Text style={styles.historico}>Data do atendimento: </Text>
                      <Text style={styles.text}>10/10/2023</Text>
                    </Text>
                  </View>
                  <Image
                    style={styles.mingcutedownFillIcon}
                    contentFit="cover"
                    source={require("../assets/images/mingcutedownfill1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameContainer}>
        <Pressable style={styles.instanceParent} onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.mingcutedownFillIcon}
            contentFit="cover"
            source={require("../assets/images/icons6.png")}
          />
          <Text style={styles.home}>Home</Text>
        </Pressable>
        <Pressable style={styles.instanceParent} onPress={() => navigation.navigate("PesquisarUnidades")}>
          <Image
            style={styles.mingcutedownFillIcon}
            contentFit="cover"
            source={require("../assets/images/mappin1.png")}
          />
          <Text style={styles.home}>Cras/Creas</Text>
        </Pressable>
        <View style={styles.instanceParent}>
          <Image
            style={styles.mingcutedownFillIcon}
            contentFit="cover"
            source={require("../assets/images/icons7.png")}
          />
          <Text style={styles.home}>Configurações</Text>
        </View>
        <View style={styles.instanceParent}>
          <Image
            style={styles.icons2}
            contentFit="cover"
            source={require("../assets/images/icons8.png")}
          />
          <Text style={styles.home}>Notificações</Text>
        </View>
      </View>
      <View style={styles.header}>
        <Pressable style={styles.headerContent} onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.icons3}
            contentFit="cover"
            source={require("../assets/images/icons5.png")}
          />
          <View style={styles.texto}>
            <Text style={styles.credito}>PAIF</Text>
          </View>
          <View style={styles.iconsWrapper}>
            <Image
              style={styles.icons4}
              contentFit="cover"
              source={require("../assets/images/icons4.png")}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.groupParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/images/group2..png")}
        />
        <View style={styles.groupGroup}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/images/group1.png")}
          />
          <Text style={styles.prevenoProteoEContainer}>
            <Text style={styles.prevenoProteoEContainer1}>
              <Text style={styles.prevenoProteoE}>
                Prevenção, proteção e proatividade no cuidado com as pessoas e no atendimento das suas necessidades.
                Nessa opção você encontrará o resumo do 
              </Text>
              <Text style={styles.historico}>histórico</Text>
              <Text style={styles.prevenoProteoE}> e </Text>
              <Text style={styles.historico}>agenda</Text>
              <Text style={styles.prevenoProteoE}> no seu contato com o </Text>
              <Text style={styles.historico}>CRAS</Text>
              <Text style={styles.prevenoProteoE}> e </Text>
              <Text style={styles.historico}>CREAS</Text>
              <Text style={styles.prevenoProteoE}>.</Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paifAgenda: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.background,
  },
  botoParent: {
    marginLeft: -174,
    top: 425,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  boto: {
    borderRadius: Border.br_5xs,
    padding: Padding.p_base,
    width: 328,
    backgroundColor: Color.e42F582Paints,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  botoPrimario: {
    color: Color.d9D9D93,
    textAlign: "center",
    fontSize: FontSize.head2_size,
    fontFamily: FontFamily.head2,
    fontWeight: "700",
  },
  frameWrapper: {
    paddingVertical: Padding.p_13xl,
  },
  instanceParent: {
    alignItems: "center",
  },
  frameParent: {
    width: 212,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: Color.d9D9D91,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  agendaWrapper: {
    borderColor: Color.black,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    borderBottomWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  agenda: {
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.head2_size,
    fontFamily: FontFamily.head2,
    fontWeight: "700",
  },
  historicoWrapper: {
    marginLeft: 24,
    borderColor: Color.d9D9D91,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    borderBottomWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  historico: {
    color: Color.d9D9D91,
    textAlign: "center",
    fontSize: FontSize.head2_size,
    fontFamily: FontFamily.head2,
    fontWeight: "700",
  },
  paifAgenda1: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_xs,
    padding: Padding.p_3xs,
    marginTop: 24,
    backgroundColor: Color.background,
  },
  paifAgendaInner: {
    justifyContent: "flex-end",
    width: 328,
    alignItems: "center",
  },
  frameGroup: {
    flexWrap: "wrap",
    width: 328,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  botoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  dataDoAtendimentoContainer: {
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.head2_size,
    fontFamily: FontFamily.robotoRegular,
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
  },
  mingcutedownFillIcon: {
    width: 24,
    height: 24,
  },
  frameContainer: {
    bottom: 0,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 376,
    left: 0,
    backgroundColor: Color.e42F582Paints,
    position: "absolute",
  },
  home: {
    color: Color.background,
    marginTop: 8,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
  },
  icons2: {
    width: 20,
    height: 24,
  },
  header: {
    top: 0,
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: 0,
    width: 376,
    left: 0,
    backgroundColor: Color.e42F582Paints,
    position: "absolute",
  },
  headerContent: {
    width: 352,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  icons3: {
    height: 24,
  },
  texto: {
    width: 80,
    height: 18,
    marginLeft: 24,
  },
  credito: {
    top: "5.56%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray_100,
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  iconsWrapper: {
    width: 208,
    paddingHorizontal: Padding.p_mid,
    height: 24,
    justifyContent: "flex-end",
    marginLeft: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  icons4: {
    display: "none",
    height: 24,
    overflow: "hidden",
  },
  groupParent: {
    top: 88,
    left: 18,
    width: 340,
    height: 296,
    position: "absolute",
  },
  groupChild: {
    top: 160,
    width: 136,
    height: 136,
    left: 0,
    position: "absolute",
  },
  groupGroup: {
    height: "56.48%",
    width: "78.91%",
    bottom: "43.52%",
    left: "21.09%",
  },
  groupIcon: {
    height: "100%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    overflow: "hidden",
    width: "100%",
  },
  prevenoProteoEContainer: {
    top: 34,
    left: 10,
    lineHeight: 16,
    display: "flex",
    width: 246,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
  },
  prevenoProteoEContainer1: {
    width: "100%",
  },
  prevenoProteoE: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.black,
  },
  historico1: {
    color: Color.colorGray_200,
  },
});

export default PAIFAgenda;
