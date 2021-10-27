import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import { useDispatch } from 'react-redux';
import { createPart } from '../actions/users';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
}
));

export default function Component(props) {
  const classes = useStyles();

  const [partNumber, setPartNumber] = useState("");
  const [NSN, setNSN] = useState("");
  const [nomen, setNomen] = useState("");
  const [qty, setQTY] = useState("");
  const [price, setPrice] = useState("");
  const [supplier, setSupplier] = useState("");
  const [desc, setDesc] = useState("");
  const [validData, setValidData] = useState(false);
  const [cancelButton, setCancelButton] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {

    //const intPartNumber = parseInt({partNumber});
    //const intNSN = parseInt({NSN});
    //const intQTY = parseInt({qty})
    //const intPrice = parseInt({price});
    
    const partData = {partNumber: partNumber, NSN: NSN, nomen: nomen, qty: qty, price: price, supplier: supplier, desc: desc}
    dispatch(createPart(partData));
    setValidData(true)
  };

  return (
    <><div className="Styled-my-8"></div><Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField className="myTextbox" variant="outlined" required fullWidth name="partNumber" id="partNumber" label="Part Number" 
                value={partNumber}
                onChange={(e) => setPartNumber(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="nsn" id="nsn" label="NSN"
                 value={NSN}
                 onChange={(e) => setNSN(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="nomenclature" id="nomenclature" label="Nomenclature"
                value={nomen}
                onChange={(e) => setNomen(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="qty" id="qty" label="QTY in Stock"
                 value={qty}
                 onChange={(e) => setQTY(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="price" id="price" label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" required fullWidth name="supplier" id="supplier" label="Supplier"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)} />
              </Grid>
            </Grid>
            <div className="Styled-my-4"></div>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField variant="outlined" multiline rows="21" fullWidth name="desc" id="desc" label="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)} />
        </Grid>
      </Grid>
      <div className="Styled-my-4"></div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography align="center">
            <Button type="cancel" size="large" variant="contained" color="primary">
              Cancel
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="center">
            <Button type="submit" size="large" variant="contained" color="primary" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <div className="Styled-my-4"></div>
      { validData ? <Redirect to="/control"/> : <div></div> }
    </Container></>
  );
}