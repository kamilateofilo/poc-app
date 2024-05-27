import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

export type FrameComponentType = {
  prop?: string;
  quantidadeDeMembrosDaFaml?: string;
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
  quantidadeDeMembrosDaFaml,
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
    <View style={[styles.boxInfo, styles.frameFlexBox, frameViewStyle]}>
      <View style={styles.frameFlexBox}>
        <View style={[styles.wrapper, styles.wrapperBg]}>
          <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
        </View>
        <Text style={[styles.quantidadeDeMembros, styles.textTypo]}>
          {quantidadeDeMembrosDaFaml}
        </Text>
      </View>
      <View style={[styles.frameWrapper]}>
        <View
          style={[styles.frameFlexBox]}
        >
          <Text style={[styles.btnAtualizar, styles.textTypo]}>
            {atualizarDados}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperBg: {
    backgroundColor: "#0db23d",
    borderRadius: 5,
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  text: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
  },
  wrapper: {
    padding: Padding.p_9xs,
    alignItems: "center",
    backgroundColor: "#0db23d",
    borderRadius: Border.br_9xs,
  },
  quantidadeDeMembros: {
    fontSize: 12,
    color: "#0db23d",
    display: "flex",
    width: 180,
    marginTop: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  btnAtualizar: {
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

  frameWrapper: {
    width: 140,
    paddingVertical: Padding.p_7xs,
    marginTop: 10,
  },
  boxInfo: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#0db23d",
    borderWidth: 1,
    width: "47%",
    height: 130,
    padding: Padding.p_3xs,
  },
});

export default FrameComponent;
