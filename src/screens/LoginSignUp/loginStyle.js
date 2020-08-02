import { container } from "../../assets/mainCss";
const loginStyles = (theme) => ({
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    margin: "-40px 20px 20px 20px",
    paddingBottom: "200px",
    paddingTop: "25vh",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    padding: "20px 0",
    margin: "20px 20px 15px 20px",
    color: "white",
    background: "lightblue",
    boxShadow:
      "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  form: {
    margin: "20px 0",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardContent: {
    padding: "0.9375rem 1.875rem",
  },
  button: {
    margin: "10px 0 10px 0",
    boxShadow:
      "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    background: "lightblue",
  },
  buttonRegister: {
    margin: "10px 0 10px 0",
    background: "transparent",
  },
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
    marginTop: "20px",
  },
  gridItem: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
  },
});

export default loginStyles;
