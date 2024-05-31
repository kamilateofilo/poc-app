import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import FrameComponent from "../components/IdentificaçãoDaFamilia/InfoFamilia";
import Endereco from "../components/IdentificaçãoDaFamilia/EnderecoEFamilia";
import BottomTabNavigator from './Bottons/BottomTab';

const IdentificacaoFamilia: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const enderecoDetalhes = {
    rua: "Rua Exemplo",
    numero: "123",
    localidade: "Bairro Exemplo",
    municipio: "Cidade Exemplo",
    uf: "UF",
    cep: "12345-678",
    complementoNumero: "Apt 456",
    complementoAdicional: "Bloco B",
    referenciaLocalizacao: "Perto do Mercado X"
  };

  const integrantesDetalhes = [
    {
      nome: "João da Silva",
      parentesco: "Pai",
      dataNascimento: "01/01/1980",
      sexo: "Masculino"
    },
    {
      nome: "Maria da Silva",
      parentesco: "Mãe",
      dataNascimento: "02/02/1982",
      sexo: "Feminino"
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
            Identificação da família
          </Text>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.backgroundWrapper}>
          <View style={styles.background} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/images/group.png")}
            />
            <Text style={styles.descriptionContainer}>
              <Text style={styles.descriptionWrapper}>
                <Text style={styles.descriptionText}>
                  {`Aqui você encontra os dados cadastrais da sua família registrados na unidade do `}
                </Text>
                <Text style={styles.highlightText}>CRAS</Text>
                <Text style={styles.descriptionText}>{` e `}</Text>
                <Text style={styles.highlightText}>CREAS</Text>
                <Text style={styles.descriptionText}>
                  {` É muito importante manter as informações atualizadas para que a `}
                </Text>
                <Text style={styles.highlightText}>assistência social</Text>
                <Text style={styles.descriptionText}>{` possa apoiar você e sua família no acesso aos benefícios de direito. `}
                </Text>
              </Text>
            </Text>
          </View>
          <Image
            style={styles.image}
            source={require("../assets/images/cida.png")}
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View>
          <View style={styles.frameContainer}>
            <FrameComponent
              prop="05"
              qtdDeMembrosDaFamilia="Quantidade de membros da família"
              atualizarDados="Adicionar pessoa à família"
              textHeight="unset"
            />
            <FrameComponent
              prop="R$ 1.000"
              qtdDeMembrosDaFamilia={`Renda 
Familiar`}
              atualizarDados="Atualizar renda familiar"
              textHeight="unset"
              textMarginLeft={16}
            />
          </View>
          <View style={styles.familyContainer}>
            <Endereco
              title="Endereço"
              mingcutedownFill={require("../assets/images/mingcutedownfill4.png")}
              details={enderecoDetalhes}
            />
            <Endereco
              title="Integrantes da Família"
              mingcutedownFill={require("../assets/images/mingcutedownfill4.png")}
              detailsMembers={integrantesDetalhes}
              propMarginTop={16}
            />
          </View>
        </View>
      </ScrollView>
      <BottomTabNavigator/>
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
  frameLayout: {
    height: 76,
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
    justifyContent: "center",
    width: 328,
  },
  headerFlexBox: {
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  highlightText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#e42f58",
  },
  iconSize: {
    width: 24,
    height: 24,
  },
  headerStyle: {
    width: '100%',
    backgroundColor: "#e42f58",
    left: 0,
    position: "absolute",
  },
  creditBox: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  fullHeightWidth: {
    height: 380,
    width: '100%',
    top: 0,
    left: 0,
    position: "absolute",
  },
  positionAbsolute: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  overflowHidden: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  centerText: {
    fontSize: 18,
    marginLeft: 16,
    textAlign: "center",
    color: "#000",
  },
  centerContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 41,
    borderBottomRightRadius: 41,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 20,
    width: 328,
    paddingVertical: 0,
  },
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexRowAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  marginTop8: {
    marginTop: 8,
    justifyContent: "center",
  },
  absoluteCenter: {
    marginLeft: -163.9,
    top: 362,
    left: "50%",
    height: 613,
    position: "absolute",
  },
  smallText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 10,
    marginTop: 8,
    textAlign: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  smallIcon: {
    width: 20,
    height: 24,
  },
  bottomContainer: {
    bottom: 0,
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  fullStretch: {
    alignSelf: "stretch",
    maxHeight: "100%",
    width: 24,
  },
  lightGrayText: {
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
  width80: {
    width: 80,
    height: 18,
    marginLeft: 8,
  },
  iconWrapper: {
    width: 208,
    justifyContent: "flex-end",
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  headerContent: {
    width: 352,
    paddingHorizontal: 20,
  },
  headerPadding: {
    paddingHorizontal: 0,
    paddingVertical: 20,
    top: 0,
  },
  background: {
    top: 0,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  backgroundWrapper: {
    top: 0,
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
  descriptionText: {
    fontFamily: "Roboto",
    color: "#000",
  },
  descriptionWrapper: {
    width: "100%",
  },
  descriptionContainer: {
    top: -10,
    left: -25,
    lineHeight: 12.5,
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
  homeBackground: {
    top: 343,
    left: 21,
  },
  whiteBackground: {
    left: 0,
    position: "absolute",
    top: 380,
    backgroundColor: "#fff",
    borderWidth: 0,
    borderColor: 'red', 
    borderStyle: 'solid', 
  },
  flexRow: {
    flexDirection: "row",
  },
  frameContainer: {
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    flexDirection: "row",
    marginTop: 30,
  },
  familyContainer: {
    marginTop: 24,
  },
  infoBox: {
    paddingHorizontal: 10,
    flexDirection: "column",
    flex: 1,
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

export default IdentificacaoFamilia;