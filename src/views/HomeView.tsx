import React from 'react';

// components and helpers
import NavBar from '../components/NavBar/NavBar';

// mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const HomeView: React.FC = ({}) => {
    return (
        <Grid container justify={'center'}>
            <Grid item xs={12}>
                <NavBar />
            </Grid>
            <Grid item>
                <Typography></Typography>
            </Grid>
        </Grid>
    );
};

export default HomeView;
