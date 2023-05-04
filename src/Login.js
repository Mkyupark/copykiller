import { Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";
import { signin } from "./service/ApiService";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
    signin({ email: email, password: password }).then((response) => {
      window.location.href = "/copykiller";
    });
  };

  return (
    <Container component='main' maxWidth='xs' style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Typography component='h1' variant='h5' id='login'>
          CopyKiller
        </Typography>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {/* submit 버튼을 클릭하면 handleSubmit 이 실행됨}*/}{" "}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='이메일 주소'
              name='email'
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='password'
              label='패스워드'
              name='password'
              autoComplete='password'
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Button type='submit' fullWidth variant='contained' color='primary'>
              로그인
            </Button> */}
            <button className='login-button' type='submit'>
              로그인
            </button>
          </Grid>
          <Link to='/signup2' variant='body2'>
            <Grid item id='no-id'>
              계정이 없습니까? 여기서 가입하세요.{" "}
            </Grid>
          </Link>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
