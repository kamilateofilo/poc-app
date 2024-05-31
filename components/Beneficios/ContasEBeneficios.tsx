import React, { useState, useMemo } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";

export type FamiliaType = {
  title?: string;
  mingcutedownFill?: ImageSourcePropType;
  propMarginTop?: number | string;
  detailsBenefits?: Array<{
    tipo: string;
    dataConcessão: string;
    status: string;
  }>;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Familia = ({ title, mingcutedownFill, propMarginTop, detailsBenefits }: FamiliaType) => {
  const [expanded, setExpanded] = useState(false);

  const familiaStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const renderDetalheItem = (label: string, value: string) => {
    const isStatus = label === "Status";
    return (
      <View style={[styles.detalheItemContainer, isStatus && styles.statusContainer]} key={label}>
        <Text style={[styles.detalheItem, isStatus && styles.statusText]}>
          <Text style={styles.bold}>{label}:</Text> {value}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.boxFamilia, familiaStyle]}>
      <View style={styles.familiaInner}>
        <TouchableOpacity 
          style={[styles.frameParent, styles.frameParentFlexBox]} 
          onPress={() => setExpanded(!expanded)}
        >
          <Text style={styles.title}>{title}</Text>
          <Image
            style={styles.mingcutedownFillIcon}
            contentFit="cover"
            source={mingcutedownFill}
          />
        </TouchableOpacity>
        
        {expanded && detailsBenefits && (
          <View style={styles.details}>
            {detailsBenefits.map((integrante, index) => (
              <View style={styles.boxInfo} key={index}>
                <View style={styles.greenBar}/>
                <View style={styles.integranteContainer}>
                  {renderDetalheItem("Tipo", integrante.tipo)}
                  {renderDetalheItem("Data de concessão", integrante.dataConcessão)}
                  {renderDetalheItem("Status", integrante.status)}
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxFamilia: {
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
  familiaInner: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 328,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
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
    width: 340,
    flexDirection: "row",
  },
  details: {
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
  bold: {
    fontWeight: "700",
  },
  statusContainer: {
    backgroundColor: "#0db23d",
    borderRadius: 15,
    padding: 5,
    marginLeft: 5,
    alignSelf: "flex-start",
  },
  statusText: {
    color: '#FFF'
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
