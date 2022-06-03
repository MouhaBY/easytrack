import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginAction } from "../store/authentication";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.scantech-group.com/">
          Scantech
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(username && password){
            if(username==="123"){
                const dataFromDb = {id:1, username:"123", contact:"user 123", profile:"admin"};
                dispatch(loginAction({ token:"123", userData:dataFromDb }))
            }
            else {
                setErrorMessage("Identifiants incorrects")
            }
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
                easyTrack
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Nom d&apos;utilisateur"
                    name="username"
                    value={username}
                    onChange={(evt)=>setUsername(evt.target.value)} 
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Mot de passe"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(evt)=>setPassword(evt.target.value)} 
                    autoComplete="current-password"
                />
                {   
                    errorMessage && 
                        <Alert severity="error">{errorMessage}</Alert>
                }
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!(username && password)}
                >
                    Se connecter
                </Button>
            </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}
