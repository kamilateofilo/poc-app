import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";

export type FrameComponentType = {
  prop?: string;
  qtdDeMembrosDaFamilia?: string;
  atualizarDados?: string;
  textHeight?: number | string;
  textMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FrameComponent = ({
  prop,
  qtdDeMembrosDaFamilia,
  atualizarDados,
  textHeight,
  textMarginLeft,
}: FrameComponentType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", textHeight),
      ...getStyleValue("marginLeft", textMarginLeft),
    };
  }, [textHeight, textMarginLeft]);

  return (
    <View style={[styles.container, styles.flexBox, frameViewStyle]}>
      <View style={styles.flexBox}>
        <View style={[styles.valueWrapper, styles.valueBackground]}>
          <Text style={[styles.valueText, styles.textStyle]}>{prop}</Text>
        </View>
        <Text style={[styles.description, styles.textStyle]}>
          {qtdDeMembrosDaFamilia}
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.flexBox}>
          <Text style={[styles.updateButton, styles.textStyle]}>
            {atualizarDados}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  valueBackground: {
    backgroundColor: "#0db23d",
    borderRadius: 5,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "700",
  },
  valueText: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
  },
  valueWrapper: {
    padding: 5,
    alignItems: "center",
    backgroundColor: "#0db23d",
    borderRadius: 7,
  },
  description: {
    fontSize: 12,
    color: "#0db23d",
    display: "flex",
    width: 180,
    marginTop: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  updateButton: {
    fontSize: 9,
    color: "#FFF",
    textAlign: "center",
    backgroundColor: "#0db23d",
    width: "113%",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingEnd: 7,
    paddingStart: 7,
  },
  buttonWrapper: {
    width: 140,
    paddingVertical: 6,
    marginTop: 10,
  },
  container: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#0db23d",
    borderWidth: 1,
    width: "47%",
    height: 130,
    padding: 10,
  },
});

export default FrameComponent;
