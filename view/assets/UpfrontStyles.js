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
  rightButton: {
    justifyContent: 'flex-end',
    backgroundColor: primary,
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    alignItems: 'center',
    borderRadius: 5,
    width: moderateScale(96),
    alignSelf: 'flex-end', // Align the button to the right
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


  
    safeArea: {
    flex: 1,
  },
  cardWrapper: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  card: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingBottom: 16,
    minHeight: 500,
  },
  cardImage: {
    // borderRadius: 8,
    width: '100%',
    aspectRatio: 4 / 3,
    objectFit: 'cover',
    mixBlendMode: 'overlay',
    // height: 200,
  },
  cardContent: {
    top: "0%",
    margin: 16,
    maxWidth: '100%',
  },
  headWrapper: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 4 / 3,
    maxHeight: 320,
    backgroundImage: 'linear-gradient( #FFFFFF00, #FFF 30vh )',
  },
  spacebetween: {
    justifyContent: 'space-between',
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listflexcontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightbutton: {
    justifyContent: 'flex-end',
    backgroundColor: primary,
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    alignItems: "center",
    borderRadius: 5,
    width: moderateScale(96),
  },
});

export default UpfrontStyles;
