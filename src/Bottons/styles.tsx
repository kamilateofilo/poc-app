import { StyleSheet } from "react-native";
import { FontFamily, Padding, FontSize, Color, Border } from "../../GlobalStyles";

export default StyleSheet.create({
  frameContainer: {
    bottom: 0,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xl,
    justifyContent: "space-between",
    flexDirection: "row",
    width: '100%',
    left: 0,
    backgroundColor: Color.e42F582Paints,
    position: "absolute",
  },
  instanceParent: {
    alignItems: "center",
  },
  mingcutedownFillIcon: {
    width: 24,
    height: 24,
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
});