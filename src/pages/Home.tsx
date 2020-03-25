import * as React from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
  },
}));

const Home: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <h2>Hello Sqooba!</h2>
      <span role="img" aria-label="wave">
        👋
      </span>
    </Paper>
  );
};

export default Home;
