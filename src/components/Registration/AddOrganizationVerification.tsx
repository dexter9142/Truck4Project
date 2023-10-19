import React, { useCallback, useEffect, useState } from "react";
import styles from "../../css/AddOrganizationVerification.module.css";

import Select from "react-select";
import { InputActionMeta } from "react-select";
import { Form } from "react-bootstrap";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
};

const AddOrganizationDetails2: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
}) => {
  const onInputWithLabelClick = useCallback(() => {}, []);

  const [time, setTime] = useState(80);
  const [expired, setExpired] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [buttonStyle, setButtonStyle] = useState(styles.button3);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timer);
        setExpired(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formatTime = (value: number) => (value < 10 ? `0${value}` : value);

  const handleReset = () => {
    setTime(80);
    setExpired(false);
  };

  const handleInputChange = (e: any) => {
    const sanitizedValue = e.target.value.replace(/[^0-9-]/g, "");

    let formattedValue = "";
    let digitCount = 0;

    for (let i = 0; i < sanitizedValue.length; i++) {
      if (digitCount === 5) {
        break;
      }

      if (sanitizedValue[i] === "-") {
        continue;
      }

      if (digitCount > 0) {
        formattedValue += "-";
      }

      formattedValue += sanitizedValue[i];
      digitCount++;
    }

    setInputValue(formattedValue);

    if (/^\d-\d-\d-\d-\d$/.test(formattedValue)) {
      setButtonStyle(styles.button1);
    } else {
      setButtonStyle(styles.button3);
    }
  };

  const handleNextClick = () => {
    onNextButtonClick();
  };

  return (
    <div className={styles.lookingForRent06}>
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

      <div className={styles.lookingForRent06Child} />
      <div className={styles.textButtonParent}>
        <div className={styles.textButton}>
          <img className={styles.icon} alt="" src="/icon5.svg" />
          <div className={styles.reefer}>Back</div>
        </div>
        <div className={styles.stepcircleWithTextParent}>
          <div className={styles.stepcircleWithText}>
            <div className={styles.stepcircle}>
              <img className={styles.icon} alt="" src="/check1.svg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Sing Up</div>
            </div>
          </div>
          <div className={styles.instanceChild} />
          <div className={styles.stepcircleWithText}>
            <div className={styles.stepcircle}>
              <img className={styles.icon} alt="" src="/check1.svg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Company details</div>
            </div>
          </div>
          <div className={styles.instanceChild} />
          <div className={styles.stepcircleWithText2}>
            <div className={styles.stepcircle2}>
              <img className={styles.icon} alt="" src="/check.svg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Verification</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.textButtonGroup}>
            <div className={styles.textButton1}>
              <img className={styles.icon} alt="" src="/icon2.svg" />
              <div className={styles.reefer}>{`Back `}</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.iconParent}>
                <img className={styles.icon} alt="" src="/icon3.svg" />
                <div className={styles.userName}>Verification phone number</div>
              </div>
              <div className={styles.inputText3}>
                Thank you for registering on our website! We're excited to have
                you join our community. Before you can fully access your account
                and enjoy all the features, we kindly ask you to verify your
                phone number and e-mail address.
              </div>
              <img
                className={styles.groupChild}
                alt=""
                src="/group-24561.svg"
              />
            </div>
            <div className={styles.frameChild} />
            <div className={styles.inputTextContainer}>
              <div className={styles.inputText1}>
                <span>{`We well send you a security code by SMS to `}</span>
                <span className={styles.span}>+7-1111-44-44</span>
              </div>
              <div className={styles.button1} id={"nextButtons"}>
                <div className={styles.text}>Send code confirmation</div>
              </div>
              <div
                className={expired ? styles.button1 : styles.button2}
                id={"nextButtons"}
                style={expired ? {} : { pointerEvents: "none" }}
              >
                <div className={styles.text} onClick={handleReset}>
                  Resend code confirmation
                  {expired
                    ? " 0:00"
                    : ` ${formatTime(minutes)}:${formatTime(seconds)}`}
                </div>
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.inputWithLabelParent}>
              <div className={styles.inputWithLabel}>
                <div className={styles.reefer}>Verification code</div>
                <div className={styles.basicInput}>
                  <input
                    type="text"
                    className={styles.inputText6}
                    placeholder="0-0-0-0-0"
                    style={{ border: "none" }}
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className={buttonStyle} id="nextButtons">
                <div className={styles.text} onClick={onNextButtonClick}>
                  Apply
                </div>
              </div>
            </div>
            <div className={styles.button4} id={"nextButtons"}>
              <div className={styles.text}>Next</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.inputText7}>Length</div>
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
              <div className={styles.inputText7}>Lift Gate</div>
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
        <div className={styles.frameContainer}>
          <div className={styles.textButtonGroup} id={"nextButtons"}>
            <div className={styles.textButton1}>
              <img className={styles.icon} alt="" src="/icon2.svg" />
              <div className={styles.reefer}>{`Back `}</div>
            </div>
            <div className={styles.iconGroup}>
              <img className={styles.icon} alt="" src="/icon3.svg" />
              <div className={styles.userName}>Verification e-mail</div>
            </div>
            <div className={styles.button4} id={"nextButtons"}>
              <div className={styles.text}>Next</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.inputText7}>Length</div>
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
              <div className={styles.inputText7}>Lift Gate</div>
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
      </div>
    </div>
  );
};

export default AddOrganizationDetails2;
