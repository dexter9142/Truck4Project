import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pages/RegistrationInitialOwner.module.css";



const SideAndNavbarOwner: FunctionComponent = () => {

    const navigate = useNavigate();

    const onTheLogoMakerBuiltFor1000Click = useCallback(() => {
      
    }, []);
  
    const onRadioGroupItemClick = useCallback(() => {
      navigate("/");
    }, [navigate]);
  
    const handleClick = useCallback(() => {
      
    }, []);


  return (
    <>
      <div className={styles.unsplashx60ygfg5soyParent}>
        <img
          className={styles.unsplashx60ygfg5soyIcon}
          alt=""
          src="/unsplashx60ygfg5soy@2x.png"
        />
        <div className={styles.inputTextParent}>
          <div className={styles.inputText}>One place to manage everything</div>
          <div className={styles.inputText1}>
            We'll handle your worldwide compliance, payroll, and benefits, so
            you can fast-track your international expansion.
          </div>
        </div>
        <img
          className={styles.celesClubPVidiGruzovikhMaIcon}
          alt=""
          src="/1654887482-34celesclubpvidigruzovikhmashinmashinikrasivofoto41removebgpreview@2x.png"
        />
      </div>
      <div className={styles.alreadyHaveAccount}>
        <img
          className={styles.theLogoMakerBuiltFor1000}
          alt=""
          src="/the-logo-maker-built-for-1000-industries-and-20m-users@2x.png"
          onClick={onTheLogoMakerBuiltFor1000Click}
        />
        <div className={styles.inputTextGroup}>
          <div className={styles.inputText2}>Already have account?</div>
          <div className={styles.button}>
            <div className={styles.text}>Log In</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideAndNavbarOwner
