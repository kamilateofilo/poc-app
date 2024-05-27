import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import FrameComponent from "../components/FrameComponent";
import Familia from "../components/Familia";

const IdentificacaoFamilia: React.FC = () => {
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
    // Adicione mais integrantes conforme necessário
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleWrapper}>
          <View style={styles.groupChild} />
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.groupGroup}>
            <Image
              style={styles.groupIcon}
              source={require("../assets/images/group.png")}
            />
            <Text style={styles.olLilianeSejaContainer}>
              <Text style={styles.olLilianeSejaContainer1}>
                <Text style={styles.olLilianeSeja}>
                  {`Aqui você encontra os dados cadastrais da sua familia registrados na unidade do `}
                </Text>
                <Text style={styles.cras}>CRAS</Text>
                <Text style={styles.olLilianeSeja}>{` e `}</Text>
                <Text style={styles.cras}>CREAS</Text>
                <Text style={styles.olLilianeSeja}>
                  {` É muito importante manter as informações atualizadas para que a `}
                </Text>
                <Text style={styles.cras}>assistência social</Text>
                <Text style={styles.olLilianeSeja}>{` possa apoiar você e sua família no acesso aos benefícios de direito. `}
                </Text>
              </Text>
            </Text>
          </View>
          <Image
            style={styles.image4Icon}
            source={require("../assets/images/group2..png")}
          />
        </View>
      </View>

      <ScrollView style={styles.scrollableView} contentContainerStyle={styles.scrollContent}>
        <View>
          <View style={styles.frameGroup}>
            <FrameComponent
              prop="05"
              quantidadeDeMembrosDaFaml="Quantidade de membros da família"
              atualizarDados="Adicionar pessoa à família"
              textHeight="unset"
            />
            <FrameComponent
              prop="R$ 1.000"
              quantidadeDeMembrosDaFaml={`Renda 
Familiar`}
              atualizarDados="Atualizar renda familiar"
              textHeight="unset"
              textMarginLeft={16}
            />
          </View>
          <View style={styles.familiaParent}>
            <Familia
              endereo="Endereço"
              mingcutedownFill={require("../assets/images/mingcutedownfill4.png")}
              detalhes={enderecoDetalhes}
            />
            <Familia
              endereo="Integrantes da Família"
              mingcutedownFill={require("../assets/images/mingcutedownfill4.png")}
              detalhesIntegrantes={integrantesDetalhes}
              propMarginTop={16}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  scrollableView: {
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
    height: 380,
    width: '100%',
    top: 0,
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
    height: "100%",
    width: "100%",
  },
  rectangleWrapper: {
    top: 0,
    height: "100%",
    width: "100%",
  },
  groupIcon: {
    bottom: -160,
    height: "100%",
    left: -35,
    width: "125%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  olLilianeSeja: {
    fontFamily: "Roboto",
    color: "#000",
  },
  cras: {
    color: "#e42f58",
  },
  olLilianeSejaContainer1: {
    width: "100%",
  },
  olLilianeSejaContainer: {
    top: -10,
    left: -25,
    lineHeight: 12.5,
    textAlign: "left",
    width: "120%",
    height: "50%",
    fontSize: 9,
  },
  groupGroup: {
    height: "54.27%",
    width: "71.46%",
    bottom: "45.73%",
    left: "28.54%",
  },
  image4Icon: {
    top: 186,
    width: 170,
    height: 170,
    right: 180,
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
    height: 400,
    width: '100%',
    left: 0,
    position: "relative",
  },
  homeChild: {
    top: 343,
    left: 21,
  },

  groupItemPosition: {
    left: 0,
    position: "absolute",
    top: 380,
    backgroundColor: "#fff",
    borderWidth: 0,
    borderColor: 'red', 
    borderStyle: 'solid', 
  },
  frameSpaceBlock: {
    flexDirection: "row",
  },

  frameGroup: {
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    flexDirection: "row",
    marginTop: 30,
  },
  familiaParent: {
    marginTop: 24,
  },

  boxInfo: {
    paddingHorizontal: 10,
    flexDirection: "column",
    flex: 1,
  },
});

export default IdentificacaoFamilia;
