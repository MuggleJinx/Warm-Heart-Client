import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// function Copyright() {
//   return (
//     <Typography variant="body1" color="#FFFFFF">
//       {"Copyright © "}
//       Warm Heart {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    // <footer className={classes.footer}>
    //   <Container maxWidth="sm">
    //     <Typography variant="h5">Our Address</Typography>
    //     <Typography variant="body1">
    //       <address>
    //         Wenzhou-Kean University
    //         <br />
    //         Daxue Road 88, Ouhai District
    //         <br />
    //         Wenzhou, Zhejiang, China
    //         <br />
    //       </address>
    //     </Typography>
    //     <br />
    //     <Typography variant="body1">Contact Us: warmheart@kean.edu </Typography>
    //     <br />
    //     <Copyright />
    //   </Container>
    // </footer>
    <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
            {"Copyright © "}
            Warm Heart {new Date().getFullYear()}
            {"."}
          </Typography>
    </footer>
  );
}
