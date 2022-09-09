import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './topbar.module.css';
import { Outlet } from "react-router-dom";

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
        <form onSubmit={submitHandler}>
          <input type="text" ref={inputRef} />
          <button>Search</button>
        </form>
        <h4 onClick={goHomeHandler}>My bar</h4>
      </div>
      <Outlet />
    </>
  )
}

export default Topbar