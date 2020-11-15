import { container, title } from "assets/jss/nextjs-material-kit.js";

const indexPageStyle = {
  container,
  title,
  menuLink: {
    fontWeight: "bold",
    textDecoration: "underline",
    flexGrow: "1",
    display: "flex"
  },
  menuHeader: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px"
  },
  cardRight: {
    //borderRadius: "6px !important"
    alignSelf: "right"
  }
};

export default indexPageStyle;
