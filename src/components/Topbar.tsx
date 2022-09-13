import React, { useRef } from 'react';
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
          <div className={styles.wrapper}>
            <button>
              <BiSearchAlt2 className={styles.icon}/>
            </button>
            <input type="text" ref={inputRef} placeholder='Search your cocktail' className={styles.inputField}/>
          </div>
        </form>
        <h1 onClick={goHomeHandler}>MISTER COCKTAIL</h1>
      </div>
      <Outlet />
    </>
  )
}

export default Topbar