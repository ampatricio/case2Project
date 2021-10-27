import React from 'react';
import { Card, Grid, Button, Typography, Container} from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { DataGridPro } from '@mui/x-data-grid-pro';
import '@fontsource/roboto/300.css';


const useStyles = makeStyles((theme) => ({
}
));

const PartData = ({ part, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();



    return (
            <Grid container direction='row' sm={12}>
                <Grid item sm={2}>
                    <Typography variant="h6">{part.partNumber}</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h6">{part.nomen}</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h6">{part.NSN}</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h6">{part.qty}</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h6">{part.price}</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography variant="h6">{part.supplier}</Typography>
                </Grid>
            </Grid>
    );
};

export default PartData;