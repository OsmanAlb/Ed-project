import React from "react";
import {  useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import {useForm} from 'react-hook-form'

import styles from "./Login.module.scss";
import { fetchRegister, fetchAuth, selectorIsAuth } from "../../redux/slices/auth";

export const Registration = () => {
  const isAuth = useSelector(selectorIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "Mayuri",
      email: "Mayu@gmail.com",
      password: "1234",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

   if(!data.payload) {
     return alert("Register in not valid");
   }

    if ('token' in data.payload) {
     window.localStorage.setItem('token', data.payload.token)
    } else {
     alert('Invalid')
    }
 };

 if(isAuth){
   return <Navigate to="/" />
 }

 return (
   <Paper classes={{ root: styles.root }}>
     <Typography classes={{ root: styles.title }} variant="h5">
       Создание аккаунта
     </Typography>
     <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100}}/>
     </div>
     <form onSubmit = {handleSubmit(onSubmit)}>
     <TextField
         className={styles.field}
         label="Full name"
         error={Boolean(errors.fullName?.message)}
         helperText={errors.fullName?.message}
         {...register('fullName', { required: "Write your name here"})}
         fullWidth
       />
       <TextField
         className={styles.field}
         label="E-Mail"
         type="email"
         error={Boolean(errors.email?.message)}
         helperText={errors.email?.message}
         {...register('email', { required: "Write your email"})}
         fullWidth
       />
       <TextField className={styles.field} 
       label="Пароль" 
       error={Boolean(errors.password?.message)}
       helperText={errors.password?.message}
         {...register('password', { required: "Write your password"})}
       fullWidth />
       <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
         Войти
       </Button>
     </form>
   </Paper>
 );
};
