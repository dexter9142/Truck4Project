import React, { useCallback, useState } from "react";
import styles from "../../css/AddOrganizationVerification2.module.css";

import Select from "react-select";
import { InputActionMeta } from "react-select";
import { Form } from "react-bootstrap";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
};

const AddOrganizationDetails2: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [buttonStyle, setButtonStyle] = useState(styles.button3);

  const onInputWithLabelClick = useCallback(() => {}, []);

  const handleOpenMailbox = () => {
    window.location.href = `mailto:`;
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
    <div className={styles.lookingForRent07}>
      <div className={styles.lookingForRent07Child} />
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
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.reefer}>{`Back `}</div>
            </div>
            <div className={styles.iconParent}>
              <img
                className={styles.icon}
                alt=""
                src="/iconsolidcheckcircle.svg"
              />
              <div className={styles.userName}>Verification phone number</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.text}>Next</div>
            </div>
            <div className={styles.inputTextContainer}>
              <div className={styles.inputText3}>Length</div>
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
            <div className={styles.inputTextContainer}>
              <div className={styles.inputText3}>Lift Gate</div>
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
        <div className={styles.frameParent}>
          <div className={styles.textButtonGroup}>
            <div className={styles.textButton2}>
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.reefer}>{`Back `}</div>
            </div>
            <div className={styles.iconGroup}>
              <img className={styles.icon} alt="" src="/icon1.svg" />
              <div className={styles.userName}>Verification e-mail</div>
            </div>
            <div className={styles.inputField}>
              <span className={styles.inputTextTxtContainer}>
                <span>{`To complete the registration process, please `}</span>
                <b>check your inbox</b>
                <span>{` for an email from us. Inside the email, you will find a verification link. `}</span>
              </span>
            </div>
            <div className={styles.inputField}>
              <span className={styles.inputTextTxtContainer}>
                <b>If you don't see the email in your inbox,</b>
                <span>
                  {" "}
                  please check your spam or junk folder as it may have been
                  filtered incorrectly. To ensure you receive future
                  communications from us, please add our email address to your
                  contacts or whitelist.
                </span>
              </span>
            </div>
            <div className={styles.inputTextWrapper}>
              <div className={styles.inputText7}>
                <span className={styles.inputTextTxtContainer}>
                  <p className={styles.weHaveSentAnEMailToK1g}>
                    <span>{`We have sent an e-mail to `}</span>
                    <span className={styles.k1gmailcom}>k1@gmail.com</span>
                  </p>
                  <p className={styles.copyAndPaste}>
                    Copy and paste the code from the email
                  </p>
                </span>
              </div>
            </div>
            <div className={styles.button2} id={"nextButtons"}>
              <div className={styles.text} onClick={handleOpenMailbox}>
                Open my mailbox
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.inputWithLabelParent}>
              <div className={styles.inputWithLabel}>
                <div className={styles.reefer}>Verification code</div>
                <div className={styles.basicInput}>
                  <div className={styles.inputText9}>
                    {" "}
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
              </div>
              <div className={styles.button3} id={"nextButtons"}>
                <div className={styles.text} onClick={onNextButtonClick}>
                  Apply
                </div>
              </div>
            </div>
            <div className={styles.button4} id={"nextButtons"}>
              <div className={styles.text}>Next</div>
            </div>
            <div className={styles.inputTextParent1}>
              <div className={styles.inputText3}>Length</div>
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
            <div className={styles.inputTextParent1}>
              <div className={styles.inputText3}>Lift Gate</div>
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
          <img className={styles.groupChild} alt="" src="/group-2456.svg" />
        </div>
      </div>
    </div>
  );
};

export default AddOrganizationDetails2;
