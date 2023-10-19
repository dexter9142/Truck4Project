import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StylePrimaryStateDefault from "./StylePrimaryStateDefault";
import styles from "../pages/RegistrationInitialPage.module.css";

import "./SideAndNavbarDriver.css";

type Property1AlreadyHaveAccounType = {
  /** Style props */
  property1AlreadyHaveAccouPosition?: CSSProperties["position"];
  property1AlreadyHaveAccouTop?: CSSProperties["top"];
  property1AlreadyHaveAccouLeft?: CSSProperties["left"];

  /** Action props */
  onTheLogoMakerBuiltFor1000Click?: () => void;
};

const Property1AlreadyHaveAccoun: FunctionComponent<
  Property1AlreadyHaveAccounType
> = ({
  property1AlreadyHaveAccouPosition,
  property1AlreadyHaveAccouTop,
  property1AlreadyHaveAccouLeft,
  onTheLogoMakerBuiltFor1000Click,
}) => {
  const property1AlreadyHaveAccounStyle: CSSProperties = useMemo(() => {
    return {
      position: property1AlreadyHaveAccouPosition,
      top: property1AlreadyHaveAccouTop,
      left: property1AlreadyHaveAccouLeft,
    };
  }, [
    property1AlreadyHaveAccouPosition,
    property1AlreadyHaveAccouTop,
    property1AlreadyHaveAccouLeft,
  ]);

  return (
    <>
  <div className={styles.RegistrationInitialPage}>
      <div className={styles.celesClubPVidiGruzovikhMaParent}>
        <img
          className={styles.celesClubPVidiGruzovikhMaIcon}
          alt=""
          src="/1654887482-34celesclubpvidigruzovikhmashinmashinikrasivofoto41removebgpreview@2x.png"
        />
        <img
          className={styles.stockPhotoBigRigGrayBonneIcon}
          alt=""
          src="/stockphotobigriggraybonnetsemitruckwithhighcabandlongrefrigeratorsemitrailertransporting2263359175removebgpreview@2x.png"
        />
        <div className={styles.inputTextParent}>
          <div className={styles.inputText}>
            Hire internationally with complete confidence
          </div>
          <div className={styles.inputText1}>
            We'll handle your worldwide compliance, payroll, and benefits, so
            you can fast-track your international expansion.
          </div>
        </div>
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

      <div className={styles.RegistrationInitialPageChild} />
      </div>
    </>
  );
};

export default Property1AlreadyHaveAccoun;
