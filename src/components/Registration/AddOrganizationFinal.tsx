import React, { useCallback, useState } from "react";
import styles from "../../css/LookingForRentFinal.module.css";

import Select from "react-select";
import { InputActionMeta } from "react-select";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddOrganizationFinal = () => {
  const onInputWithLabelClick = useCallback(() => {}, []);

  const handleNextClick = () => {
    console.log("Final, href to map page");
  };

  return (
    <>
      <div className={styles.lookingForRent08}>
        <div className={styles.lookingForRent08Child} />
        <div className={styles.modal}>
          <div className={styles.textButton}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.reefer}>{`Back `}</div>
          </div>
          <div className={styles.iconParent}>
            <img className={styles.icon1} alt="" src="/icon1.svg" />
            <div className={styles.userName}>
              Thank you for successfully registering on our website!
            </div>
          </div>
          <div className={styles.inputTextContainer}>
            <div className={styles.inputText3}>
              We are glad to welcome you to our community.
            </div>
            <div className={styles.inputText3}>Redirecting in 10 sec</div>
          </div>
          <div className={styles.button1} id={"nextButtons"}>
            <Link to="/main">
              <div className={styles.text}>Explore the site</div>
            </Link>
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
    </>
  );
};

export default AddOrganizationFinal;
