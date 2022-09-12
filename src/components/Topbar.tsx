import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './topbar.module.css';
import { Outlet } from "react-router-dom";
import {BiSearchAlt2} from 'react-icons/bi';

const Topbar: React.FC = () => {
  let navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  



  const submitHandler = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if (inputRef.current) {
      navigate(`/search/${inputRef.current.value}`);
      inputRef.current.value = '';
    }
  }

  const goHomeHandler = () => {
    navigate('/')
  }

  return (
    <>
      <div className={styles.topbarContainer}>
        <form onSubmit={submitHandler} className={styles.formContainer}>
          <input type="text" ref={inputRef} placeholder='Search your cocktail' className={styles.inputField}/>
          <button className={styles.searchBtn}><BiSearchAlt2 size={15}/></button>
        </form>
        <h1 onClick={goHomeHandler}>My Bar</h1>
      </div>
      <Outlet />
    </>
  )
}

export default Topbar