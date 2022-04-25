import React from 'react'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader';
import ShowError from '../../components/ShowError/ShowError';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link} from '@mui/material';
import {Grid} from '@mui/material';

const CatDetails = () => {
  const {id} = useParams();
  const url = `https://api.thecatapi.com/v1/breeds/${id}`;

  // State to control the list data fetched from server
  const [data, setData] = React.useState({
      loading:true,
      error:false,
      item:{

      }
  });

  React.useEffect(() => {
      setData({
          loading:true,
          error:false,
          item:{

          }
      })
      try {
          (
              async () => {
                  const response = await fetch(url);
                  const json_data = await response.json();

                  // setting new state of fetched server data on every new render
                  setData((state) => ({
                      ...state,
                      loading:false,
                      item:{
                        ...json_data
                      }
                  }))
              }
          )();
      } catch (error) {
          setData(async (state) => ({
              ...state,
              loading:false,
              error:true,
          }))
      }
  }, [url]);


  const {loading, error:networkError, item} = data;

  return (
    <React.Fragment>
      {
        networkError && <ShowError />
      }
      {
        loading && <Container><Loader /></Container>}
      {
        !loading
          && <React.Fragment>
              <Container sx={{paddingTop:"4rem"}}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6} >
                    <img
                      src={'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'}
                      alt="cat_image"
                      style={{maxWidth:"100%", maxHeight:"100%"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} >
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemText primary="Name" secondary={item.name} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="CFA url" secondary={<Link>{item.cfa_url}</Link>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Vetstreet url" secondary={<Link>{item.vetstreet_url}</Link>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Vcahospitals url" secondary={<Link>{item.vcahospitals_url}</Link>} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Temperament" secondary={item.temperament} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Origin" secondary={item.origin} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Country Codes" secondary={item.country_codes} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Country Code" secondary={item.country_code} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Description" secondary={item.description} />
                    </ListItem>
                  </List>
                  </Grid>
                </Grid>
              </Container>
            </React.Fragment>
      }
    </React.Fragment>
  )
}

export default CatDetails