import React from "react";
import Grid from "@material-ui/core/Grid";
import OrangePageBreak from "./page_graphic_arc_orange.png";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";


const useStyles = makeStyles({
  divImage: {
    width: "100%",
    height: "100%",
  },
});


export default function OrangeArc() {

    const classes = useStyles();


    return (
      <div>
        <Grid container>
          <Grid item xs={12} className="pageBreakTop">
            <img
              className={classes.divImage}
              src={OrangePageBreak}
              alt="page graphic"
            ></img>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} className="pageBreakBottom">
            <img
              className={classes.divImage}
              src={OrangePageBreak}
              alt="page graphic"
            ></img>
          </Grid>
        </Grid>
      </div>
    );
}
