import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(1.5px)",
    borderRadius: 10,
    border: "1px solid rgba(255, 255, 255, 0.18)",
    display: "flex",
    minHeight: 385,
    maxWidth: 900,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  rootTabs: {
    display: "flex",
  },
  scroller: {
    flexShrink: 0,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography style={{ maxWidth: 500 }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

const Resume = () => {
  const classes = useStyles();
  const width = useWidth();
  // const size = useWindowSize();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let condTabOrientation;
  if (width === "xs") {
    condTabOrientation = "horizontal";
  } else {
    condTabOrientation = "vertical";
  }

  console.log(width);

  return (
    <div className="resume">
      <p>
        Software developer with a passion for combining technology and design.
        Experience in JavaScript, React and Redux, a basic understanding of Ruby
        and Python. I discovered web development through my desire to learn a
        skill that motivates me to excel and where I can create something
        impactful and visually appealing. I bring strong skills in project
        management, creativity, and design
      </p>

      <div className={classes.root}>
        <Tabs
          orientation={condTabOrientation}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          className={{
            root: classes.rootTabs,
            scroller: classes.scroller,
            tabs: classes.tabs,
          }}
          scrollButtons="on"
        >
          <Tab label="Blink Health" {...a11yProps(0)} />
          <Tab label="Banzai Phresh" {...a11yProps(1)} />
          <Tab label="The Vitamin Shoppe" {...a11yProps(2)} />
          <Tab label="HIES Inc." {...a11yProps(3)} />
          <Tab label="Kids Duo" {...a11yProps(4)} />
          <Tab label="Education" {...a11yProps(5)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <h3>Blink Health, New York, NY</h3>
          <p>Software Engineer, June 2019 - Present</p>
          <ul>
            <li>
              Applied Google Maps API to create a pharmacy locator based on the
              user’s current location
            </li>
            <li>
              Added Storybook and reusable components to the internal pharmacy
              application using React, SWR, and Formik
            </li>
            <li>
              Successfully launched the internal pharmacy’s Prior Authorization
              project to improve pharmacist productivity in regards to logging
              prior authorizations
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h3>Banzai Phresh, Honolulu, HI</h3>
          <p>Co-Owner, Jan 2018 - June 2018</p>
          <ul>
            <li>
              Managed and operated a 6-month pop-up restaurant in Ala Moana
              Mall, Hawaii.
            </li>
            <li>
              Created food menu, designed menu signs and outer decor of
              restaurant.
            </li>
            <li>
              Responsible for financials, bookkeeping, and logistical operation
              of the business.
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h3>The Vitamin Shoppe, New York, NY</h3>
          <p>Assistant Store Manager, June 2014 - Sept 2017</p>
          <ul>
            <li>
              Managed multiple teams in Brooklyn and Manhattan Vitamin Shoppe
              locations.
            </li>
            <li>
              Addressed employee complaints and communicated targets while
              maintaining employee satisfaction.
            </li>
            <li>
              Trained employees on vitamin knowledge and general store
              etiquette, including dress code and company policies.
            </li>
            <li>Designed and ran promotional in-store events.</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <h3>HIES Inc.</h3>
          <p>
            GIS, AutoCAD, Administrative Assistant, Summer Job 2008-2012, Mar
            2014 - May 2014
          </p>
          <ul>
            <li>
              Used Environmental Engineering, GIS and AutoCAD technology under
              the tech lead.
            </li>
            <li>
              Administrative assistant responsibilities, such as organizing,
              binding, scanning, and copying files and documents, making
              reservations for car rentals and flights, and other duties
              presented upon request.
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <h3>Kids Duo, Tokyo, Japan</h3>
          <p>ESL English Teacher, Feb 2013 - Feb 2014</p>
          <ul>
            <li>
              Created interactive activities for up to 15 preschool and
              kindergarten age students that taught them English while they had
              fun. Activities included dance, crafts, reading, writing, and
              social skills.
            </li>
            <li>
              Constructed educational activities and daily plans for students to
              follow from 9am to 6pm every weekday.
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <h4>Flatiron School - 2019</h4>
          <p>
            Full Stack Web Development, JavaScript, Ruby on Rails, SQL, and
            React
          </p>

          <h4>Hunter College - 2017</h4>
          <p>Health Sciences, Nutrition, Chemistry</p>

          <h4>Soka University of America - Aliso Viejo, CA - 2012</h4>
          <p>
            Bachelor of Arts: Social and Behavioral Sciences: 3.8 GPA, Magna Cum
            Laude
          </p>
        </TabPanel>
      </div>
    </div>
  );
};
export default Resume;
