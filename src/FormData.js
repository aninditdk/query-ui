import Container from '@material-ui/core/Container';
import {useForm, Controller} from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {useMutation} from 'react-query'

const useStyles = makeStyles((theme) => ({
 
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '100px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

function FormData() {
  const classes = useStyles();
  const {handleSubmit, control} = useForm();

  const onSubmit = (values) => {
    console.log(values);
    mutation.mutate({
      name: values.name,
      email: values.email,
      address: values.address,
      phone: values.phone,
    });

  };

  const mutation = useMutation((item) =>
  axios.post("https://jsonplaceholder.typicode.com/posts", item)
  );
  // if (mutation.isSuccess) console.log(mutation.data.data);

  const Mutate = (props) => {
    return (
      Object.entries(props.data).map(([key, value]) => {
        return (<h3 key = {key}> {key.toUpperCase()} : {value} </h3>)
      })
    )
  }
  return (
      <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form align = "center" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller 
          render={({field: {value, onChange}}) => <TextField value={value} onChange={onChange} 
          label="Name" 
          fullWidth
          required
          variant="outlined"
          autoFocus
          margin="normal"
          />} 
          control = {control}
          defaultValue = ""
          id="name"
          name="name"
          />

<Controller 
          render={({field: {value, onChange}}) => <TextField value={value} onChange={onChange} 
          label="Phone Number" 
          fullWidth
          required
          variant="outlined"
          margin="normal"
          />} 
          control = {control}
          defaultValue = ""
          id="phone"
          name="phone"
          />

<Controller 
          render={({field: {value, onChange}}) => <TextField value={value} onChange={onChange} 
          label="Email" 
          fullWidth
          required
          variant="outlined"
          margin="normal"
          />} 
          control = {control}
          defaultValue = ""
          id="email"
          name="email"
          />

<Controller 
          render={({field: {value, onChange}}) => <TextField value={value} onChange={onChange} 
          label="Address" 
          fullWidth
          required
          margin="normal"
          />} 
          control = {control}
          defaultValue = ""
          id="address"
          name="address"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
        {mutation.isLoading && <p>Loading Form data</p>}
        {mutation.isSuccess && <Mutate data={mutation.data.data}/>}
      </ Container>
     </>
  );
}

export default FormData;
 