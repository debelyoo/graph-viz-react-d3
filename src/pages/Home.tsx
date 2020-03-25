import * as React from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Graph } from "react-d3-graph";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
  },
  graphPanel: {
    marginTop: theme.spacing(),
  },
}));

const Home: React.FC<{}> = () => {
  const classes = useStyles();

  const fakeData = {
    nodes: [
      { id: "node1" },
      { id: "node2" },
      { id: "node3" },
      { id: "node4" },
      { id: "node5" },
      { id: "node6" },
      { id: "node7" },
      { id: "node8" },
    ],
    links: [
      { source: "node1", target: "node2" },
      { source: "node1", target: "node3" },
    ],
  };

  const fakeDataCoord = {
    nodes: [
      { id: "node1", x: 10, y: 10 },
      { id: "node2", x: 20, y: 50 },
      { id: "node3", x: 30, y: 100 },
      { id: "node4", x: 300, y: 200 },
      { id: "node5", x: 100, y: 30 },
      { id: "node6", x: 120, y: 70 },
      { id: "node7", x: 250, y: 180 },
      { id: "node8", x: 140, y: 220 },
    ],
    // links: [],
    links: [
      { source: "node1", target: "node2" },
      { source: "node1", target: "node3" },
      { source: "node6", target: "node8" },
    ],
  };

  const myConfig = {
    width: "100%",
    // nodeHighlightBehavior: true,
    // staticGraphWithDragAndDrop: true,
    node: {
      color: "lightblue",
      size: 350,
      fontSize: 16,
      highlightFontSize: 16,
      highlightStrokeColor: "blue",
      labelProperty: "label",
    },
    link: {
      highlightColor: "blue",
    },
    d3: {
      alphaTarget: 0.05,
      gravity: -400,
      linkLength: 300,
      linkStrength: 1,
      disableLinkForce: false,
    },
  };

  // graph event callbacks
  const onClickGraph = function() {
    console.log(`Clicked the graph background`);
  };

  const onClickNode = function(nodeId: any) {
    console.log(`Clicked node ${nodeId}`);
  };

  const onDoubleClickNode = function(nodeId: any) {
    console.log(`Double clicked node ${nodeId}`);
  };

  const onRightClickNode = function(event: any, nodeId: any) {
    console.log(`Right clicked node ${nodeId}`);
  };

  const onMouseOverNode = function(nodeId: any) {
    console.log(`Mouse over node ${nodeId}`);
  };

  const onMouseOutNode = function(nodeId: any) {
    console.log(`Mouse out node ${nodeId}`);
  };

  const onClickLink = function(source: any, target: any) {
    console.log(`Clicked link between ${source} and ${target}`);
  };

  const onRightClickLink = function(event: any, source: any, target: any) {
    console.log(`Right clicked link between ${source} and ${target}`);
  };

  const onMouseOverLink = function(source: any, target: any) {
    console.log(`Mouse over in link between ${source} and ${target}`);
  };

  const onMouseOutLink = function(source: any, target: any) {
    console.log(`Mouse out link between ${source} and ${target}`);
  };

  const onNodePositionChange = function(nodeId: any, x: any, y: any) {
    console.log(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
  };

  return (
    <>
      <Paper className={classes.container}>
        <h2>Hello Graph!</h2>
        <span role="img" aria-label="wave">
          👋
        </span>
      </Paper>
      <Paper className={classes.graphPanel}>
        <Graph
          id="cti-graph" // id is mandatory, if no id is defined rd3g will throw an error
          data={fakeDataCoord}
          config={myConfig}
          onClickNode={onClickNode}
          onDoubleClickNode={onDoubleClickNode}
          onRightClickNode={onRightClickNode}
          onClickGraph={onClickGraph}
          onClickLink={onClickLink}
          onRightClickLink={onRightClickLink}
          onMouseOverNode={onMouseOverNode}
          onMouseOutNode={onMouseOutNode}
          onMouseOverLink={onMouseOverLink}
          onMouseOutLink={onMouseOutLink}
          onNodePositionChange={onNodePositionChange}
        />
      </Paper>
    </>
  );
};

export default Home;
