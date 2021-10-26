import React from "react";
import { useState } from 'react';
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box"
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@mui/material";
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
}
));

//export default function UpdateAircraftDialog(props) {
const UpdateAircraftDialog = ({ isOpen, onClose }) => {

    const [tailNumber, setTailNumber] = useState("");
    const [validTail, setValidTail] = useState(false)
    const handleSubmit = (event) => {
        setValidTail(true)
    };

    const handleCancel= (event) => {
        isOpen=false;
    };

    return (
        <Dialog open={isOpen}>
            <DialogTitle>Enter a Tail Number</DialogTitle>
            <br></br>
            <DialogContent>
                <TextField
                    label="Tail Number"
                    variant="outlined"
                    required
                    value={tailNumber}
                    onChange={(e) => setTailNumber(e.target.value)}
                ></TextField>
            </DialogContent>

            <DialogActions>
                <Box component="span" sx={{ m: 5}}>
                <Button variant="contained" color="primary" onClick={() => onClose()}>Cancel</Button>
                <Button variant="contained" type="submit" color="primary" onClick={() => handleSubmit()}>Submit</Button>
                </Box>
            </DialogActions>
            { validTail ? <Redirect to="/UpdateAircraft"></Redirect> : <div></div>}
        </Dialog>
    );
};

UpdateAircraftDialog.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
};

UpdateAircraftDialog.defaultProps = {
    isOpen: false,
    onClose: () => { }
};

export default UpdateAircraftDialog;