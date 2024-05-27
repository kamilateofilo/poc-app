import React, { useState, useMemo } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";

export type FamiliaType = {
  endereo?: string;
  mingcutedownFill?: ImageSourcePropType;
  propMarginTop?: number | string;
  detalhes?: {
    rua: string;
    numero: string;
    localidade: string;
    municipio: string;
    uf: string;
    cep: string;
    complementoNumero?: string;
    complementoAdicional?: string;
    referenciaLocalizacao?: string;
  };
  detalhesIntegrantes?: Array<{
    nome: string;
    parentesco: string;
    dataNascimento: string;
    sexo: string;
  }>;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Familia = ({ endereo, mingcutedownFill, propMarginTop, detalhes, detalhesIntegrantes }: FamiliaType) => {
  const [expanded, setExpanded] = useState(false);

  const familiaStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const renderDetalheItem = (label: string, value: string) => (
    <View style={styles.detalheItemContainer} key={label}>
      <Text style={styles.detalheItem}>{label}: {value}</Text>
    </View>
  );

  return (
    <View style={[styles.familia, familiaStyle]}>
      <View style={styles.familiaInner}>
        <TouchableOpacity 
          style={[styles.frameParent, styles.frameParentFlexBox]} 
          onPress={() => setExpanded(!expanded)}
        >
          <Text style={styles.endereo}>{endereo}</Text>
          <Image
            style={styles.mingcutedownFillIcon}
            contentFit="cover"
            source={mingcutedownFill}
          />
        </TouchableOpacity>
        {expanded && detalhes && (
          <View style={styles.boxInfo}>
            <View style={styles.greenBar}/>
            <View style={styles.detalhes}>
              {renderDetalheItem("Rua", detalhes.rua)}
              {renderDetalheItem("Número", detalhes.numero)}
              {renderDetalheItem("Localidade", detalhes.localidade)}
              {renderDetalheItem("Município", detalhes.municipio)}
              {renderDetalheItem("UF", detalhes.uf)}
              {renderDetalheItem("CEP", detalhes.cep)}
              {detalhes.complementoNumero && renderDetalheItem("Complemento do número", detalhes.complementoNumero)}
              {detalhes.complementoAdicional && renderDetalheItem("Complemento adicional", detalhes.complementoAdicional)}
              {detalhes.referenciaLocalizacao && renderDetalheItem("Referência de localização", detalhes.referenciaLocalizacao)}
            </View>
            <TouchableOpacity>
              <Image
                style={styles.editIcon}
                contentFit="cover"
                source={require("../assets/images/edit.png")}
              />
            </TouchableOpacity>
          </View>
        )}
        {expanded && detalhesIntegrantes && (
          <View style={styles.detalhes}>
            {detalhesIntegrantes.map((integrante, index) => (
              <View style={styles.boxInfo} key={index}>
                <View style={styles.greenBar}/>
                <View style={styles.integranteContainer}>
                  {renderDetalheItem("Nome", integrante.nome)}
                  {renderDetalheItem("Parentesco", integrante.parentesco)}
                  {renderDetalheItem("Data de nascimento", integrante.dataNascimento)}
                  {renderDetalheItem("Sexo", integrante.sexo)}
                </View>
                <TouchableOpacity>
                  <Image
                    style={styles.editIcon}
                    contentFit="cover"
                    source={require("../assets/images/edit.png")}
                  />
            </TouchableOpacity>
              </View>
            ))}
            
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  endereo: {
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  mingcutedownFillIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameParent: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: 328,
    flexDirection: "row",
  },
  familiaInner: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 328,
  },
  familia: {
    shadowColor: "rgba(0, 0, 0, 0.85)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 15,
  },
  detalhes: {
    marginTop: 10,
  },
  detalheItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  detalheItem: {
    fontSize: 14,
  },
  editIcon: {
    width: 40,
    height: 40,
  },
  integranteContainer: {
    marginTop: 10,
  },
  boxInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 5,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 20,
  },
  greenBar: {
    backgroundColor: "#0db23d",
    height: '95%',
    padding: 3,
    marginEnd: 10,
    marginLeft: 20,
  }
});

export default Familia;
