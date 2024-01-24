import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { logout, selectorIsAuth } from '../../redux/slices/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectorIsAuth)

  const onClickLogout = () => {
    if(window.confirm('Are you sure you want to logout?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>ED-_-Platform</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Добавить урок</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
