import React from 'react';
import { Grid, CircularProgress, Typography, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import PartData from '../dataRows/partsDataRow.js';
import '@fontsource/roboto/300.css';




const useStyles = makeStyles((theme) => ({
}
));

const PartsDataChart = ({ setCurrentId }) => {
    const classes = useStyles();
    const part = useSelector((state) => state.part);

    return(
        <Container>
            <Box sx={{bgcolor: '#28c6c6', pl: 5}}>
            <Grid container direction='row' sm={12}>
                <Grid item sm={2}>
                    <Typography variant="h5" gutterBottom>Part Number</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h5">Nomenclature</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h5">NSN</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h5">QTY</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h5">Price</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h5">Supplier</Typography>
                </Grid>
                </Grid>
                </Box>
            {part.map((part) => (
                <Box sx={{bgcolor: "#92E1E1", pl: 6}}>
                <Grid item key={part._id} item xs={12}>
                    <PartData part={part} setCurrentId={setCurrentId} />
                </Grid>
                </Box>
            ))}
        
        
        </Container>
    );
};

export default PartsDataChart;