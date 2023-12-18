import { StyleSheet, Platform } from "react-native";
import { scale, moderateScale, verticalScale } from "./ScalingStyles";

export const primary = "rgba(40, 126, 224, 1.0)",
  primaryshade = "rgba(12, 75, 148, 1.0)",
  secondary = "rgba(171, 199, 16, 1.0)",
  secondaryshade = "rgba(193, 224, 18, 1.0)",
  accent = "rgba(224, 76, 63, 1.0)",
  compound = "rgba(127, 75, 228, 1.0)",
  background = "rgba(238, 238, 238, 1.0)",
  backgroundshade = "rgba(161, 161, 161, 1.0)",
  dark = "rgb(0, 0, 0)",
  lite = "rgb(255, 255, 255)";

const UpfrontStyles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  viewcontainer: {
    margin: moderateScale(16),
  },
  p: {
    fontSize: moderateScale(16),
    fontWeight: "normal",
  },
  h1: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
  },
  h2: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
  },
  h3: {
    fontSize: moderateScale(19),
    fontWeight: "bold",
  },
  h4: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  h5: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
  },
  h6: {
    fontSize: moderateScale(11),
    fontWeight: "bold",
  },
  button: {
    // flexDirection: 'row',
    backgroundColor: primary,
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    alignItems: "center",
    borderRadius: 5,
    width: moderateScale(96),
  },
  icon: {
    marginRight: 5,
  },
  buttonText: {
    color: lite,
    fontWeight: "bold",
  },
  table: {
    borderWidth: 1,
    borderColor: backgroundshade,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: backgroundshade,
  },
  //   container: {
  //   flexDirection: "row",
  //   shadowColor: 'black',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowRadius: 4,
  //   shadowOpacity: 0.26,
  //   elevation: 4,
  //   backgroundColor: '#fff',
  //   padding: 16,
  //   marginBottom: 16,
  // },
  photo: {
    width: moderateScale(80),
    height: verticalScale(80),
    borderRadius: 80 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: primaryshade,
  },
  profileContainer: {
    flexDirection: "column",
    marginLeft: 16,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bornAtText: {
    fontSize: 18,
  },
  fab: {
    backgroundColor: "blue",
    width: 56,
    height: 56,
    borderRadius: 16,
    position: Platform.OS === "web" ? "absolute" : "absolute",
    bottom: 16,
    right: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    zIndex: 1,
  },
  fabText: {
    fontSize: 24,
    color: "white",
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UpfrontStyles;
