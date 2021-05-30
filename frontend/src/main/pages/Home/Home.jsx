import React from 'react';
import ContributeBanner from './Components/ContributeBanner/ContributeBanner';
import GetHelpSearch from './Components/AskForHelpSearch/AskForHelpSearch';
import HelpUs from './Components/HelpUs/HelpUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Grid from '@material-ui/core/Grid';


const Home = ({ getHelpPosts, setSearchQuery }) => {

  return (
    <Grid container justify='center' alignItems='center' >
      <Grid item xs={12} md={11} >
        <ContributeBanner />
        <GetHelpSearch setSearchQuery={setSearchQuery} />
        <HelpUs getHelpPosts={getHelpPosts} />
        <ContactUs />
      </Grid>
    </Grid>

  );
};

export default Home;
