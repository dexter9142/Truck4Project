import React, { useCallback, useState } from "react";
import styles from "../css/RegistrationOwnerFinal.module.css";

import Select from "react-select";
import { InputActionMeta } from "react-select";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
};

const RegistrationOwnerFinal: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
}) => {
  const onInputWithLabelClick = useCallback(() => {}, []);

  const handleNextClick = () => {
    onNextButtonClick();
  };

  return (
    <div className={styles.vehicleOwner07}>
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

      <div className={styles.vehicleOwner07Child} />
      <div className={styles.modal}>
        <div className={styles.textButton}>
          <img className={styles.icon} alt="" src="/icon2.svg" />
          <div className={styles.reefer}>{`Back `}</div>
        </div>
        <div className={styles.iconParent}>
          <img className={styles.icon1} alt="" src="/icon1.svg" />
          <div className={styles.userName}>
            Thank you for successfully registering on our website! One more step
          </div>
        </div>
        <div className={styles.inputTextContainer}>
          <div className={styles.inputText3}>
            To verify and publish the truck, you need to fill out a few more
            forms.
          </div>
          <div className={styles.inputText4}>Redirecting in 10 sec</div>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button1}>
            <Link to="/main">
              <div className={styles.text}>I'll do it later</div>
            </Link>
          </div>
          <div className={styles.button2}>
            <div className={styles.text} onClick={onNextButtonClick}>
              Continue Verification
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.inputField}>Length</div>
          <div className={styles.tagParent}>
            <div className={styles.tag}>
              <img
                className={styles.earnRevenueFromYourIdleFl}
                alt=""
                src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
              />
              <div className={styles.reefer}>Small</div>
            </div>
            <div className={styles.tag}>
              <img
                className={styles.earnRevenueFromYourIdleFl}
                alt=""
                src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
              />
              <div className={styles.reefer}>Large</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.inputField}>Lift Gate</div>
          <div className={styles.tagParent}>
            <div className={styles.tag}>
              <img
                className={styles.earnRevenueFromYourIdleFl}
                alt=""
                src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
              />
              <div className={styles.reefer}>Rail Gate</div>
            </div>
            <div className={styles.tag}>
              <img
                className={styles.earnRevenueFromYourIdleFl}
                alt=""
                src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
              />
              <div className={styles.reefer}>Tuck Under</div>
            </div>
            <div className={styles.tag}>
              <img
                className={styles.earnRevenueFromYourIdleFl}
                alt=""
                src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
              />
              <div className={styles.reefer}>No Lift Gate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationOwnerFinal;
