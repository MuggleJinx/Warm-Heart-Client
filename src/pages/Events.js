import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

//MUI
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";

import { connect } from "react-redux";
import { getProjects } from "../redux/actions/dataActions";

const styles = {
  icon: {
    marginRight: "spacing(2)",
  },
  heroContent: {
    backgroundColor: "palette.background.paper",
    padding: "spacing(8, 0, 6)",
  },
  heroButtons: {
    marginTop: "spacing(4)",
  },
  cardGrid: {
    paddingTop: "spacing(8)",
    paddingBottom: "spacing(8)",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "theme.palette.background.paper",
    padding: "spacing(6)",
  },
  title: {
    "font-weight": "bold"
  }
}

class Events extends Component {
  state = {
    projects: null,
  };

  componentDidMount() {
    this.props.getProjects();
  }

  render () {
  const { projects } = this.props.data;
  // console.log(projects)
  const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Warm Heart Projects
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Welcome to the Warm Heart. Here lists all the projects held by
                different ogranizations and departments. View the details if
                your are interested.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Apply for your project
                    </Button>
                  </Grid>
                  <Grid item>
                    <Link to="/">
                    <Button variant="outlined" color="primary">
                      Back to home
                    </Button>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>

          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item key={project.projectId} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={project.imageUrl}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography variant="body1"><span className={classes.title}>Organization: </span> {project.organization} </Typography>
                      <Typography><span className={classes.title}>Contact: </span> {project.contact} </Typography>
                      <Typography><span className={classes.title}>Due: </span> {project.dueDay} </Typography>
                      <Typography>
                        <span className={classes.title}>Description: </span> <br />
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Apply
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}

        {/* End footer */}
      </React.Fragment>
    );
  }

}

Events.propTypes = {
  getProjects: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

// export default withStyles(styles)(Events);
export default connect(mapStateToProps, { getProjects })(withStyles(styles)(Events));
