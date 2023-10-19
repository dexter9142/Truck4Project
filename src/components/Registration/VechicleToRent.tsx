import React, { useCallback, useState } from "react";

import styles from "../../pages/RegistrationInitialPage.module.css";
import Select from "react-select";
import { InputActionMeta } from "react-select";
import { Form } from "react-bootstrap";

const countryOptions = [
  { value: "+1", label: "United States (US)" },

  { value: "+373", label: "Moldova (MD)" },
];

type VechicleToRentProps = {
  onNextButtonClick: () => void;
};

const VechicleToRent: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  const handleCountryChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
  };

  const handleCodeChange = (event: any) => {
    setSelectedCountry({
      value: event.target.value,
      label: event.target.value,
    });
  };

  const onInputWithLabelClick = useCallback(() => {}, []);

  const handleNextClick = () => {
    onNextButtonClick();
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <div className={styles.textButtonParent}>
        <div className={styles.textButton}>
          <img className={styles.icon} alt="" src="/icon2.svg" />
          <div className={styles.reefer}>Back</div>
        </div>
        <div className={styles.textButton}>
          <div className={styles.stepcircleWithText}>
            <div className={styles.stepcircle}>
              <img className={styles.icon} alt="" src="/check.svg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Sing Up</div>
            </div>
          </div>
          <div className={styles.instanceChild} />
          <div className={styles.stepcircleWithText1}>
            <div className={styles.stepcircle1}>
              <div className={styles.dot} />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Company details</div>
            </div>
          </div>
          <div className={styles.instanceChild} />
          <div className={styles.stepcircleWithText1}>
            <div className={styles.stepcircle1}>
              <div className={styles.dot} />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Verification</div>
            </div>
          </div>
        </div>
        <div className={styles.userNameParent}>
          <div className={styles.userName}>Apply to rent vehicle on Roybam</div>
          <div className={styles.inputText3}>
            Sign up with your work Google account or use the form.
          </div>
        </div>
        <div className={styles.textButtonGroup}>
          <div className={styles.textButton1}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.reefer}>{`Back `}</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.inputWithLabelParent}>
              <div
                className={styles.inputWithLabel}
                onClick={onInputWithLabelClick}
              >
                <div className={styles.reefer}>{`First name `}</div>
                <div className={styles.basicInput}>
                  <input
                    type="text"
                    className={styles.inputField}
                    value={firstName}
                    placeholder="First name"
                    style={{ border: "none", width: "90%" }}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.inputWithLabel1}>
                <div className={styles.reefer}>{`Last name `}</div>
                <div className={styles.basicInput}>
                  <input
                    className={styles.inputField}
                    value={lastName}
                    type="text"
                    placeholder="Last name"
                    style={{ border: "none", width: "90%" }}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.inputWithLabelWrapper}>
                  <div className={styles.inputWithLabel1}>
                    <div className={styles.reefer}>Password</div>
                    <div className={styles.basicInput}>
                      <input
                        className={styles.inputText9}
                        type="password"
                        placeholder="Password"
                        style={{ border: "none" }}
                      />
                      <img
                        className={styles.iconoutlineeye}
                        alt=""
                        src="/iconoutlineeye1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.inputWithLabelWrapper}>
                  <div className={styles.inputWithLabel1}>
                    <div className={styles.reefer}>Phone number</div>
                    <div className={styles.phoneNumberInput}>
                      {/* <img
                        className={styles.dropdownIcon}
                        alt=""
                        src="/dropdown1.svg"
                      /> */}
                      <Select
                        className={styles.countryCodeSelect}
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={handleCountryChange}
                      />

                      <div className={styles.basicInput3}>
                        <input
                          type="text"
                          className={styles.countryCodeInput}
                          value={selectedCountry.value}
                          onChange={handleCodeChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.body}>
                <div className={styles.title}>Your password must contain:</div>
                <div className={styles.frameDiv}>
                  <div className={styles.iconsolidcheckCircleParent}>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/iconsolidcheckcircle1.svg"
                    />
                    <div className={styles.inputText12}>
                      a minimum of 10 characters
                    </div>
                  </div>
                  <div className={styles.iconsolidcheckCircleParent}>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/iconsolidcheckcircle1.svg"
                    />
                    <div className={styles.inputText12}>
                      an uppercase character
                    </div>
                  </div>
                  <div className={styles.iconsolidcheckCircleParent}>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/iconsolidcheckcircle.svg"
                    />
                    <div className={styles.inputText12}>
                      a lowercase character
                    </div>
                  </div>
                  <div className={styles.iconsolidcheckCircleParent}>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/iconsolidcheckcircle.svg"
                    />
                    <div className={styles.inputText12}>a number</div>
                  </div>
                  <div className={styles.iconsolidcheckCircleParent}>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/iconsolidcheckcircle.svg"
                    />
                    <div
                      className={styles.inputText12}
                    >{`a special character `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div
            className={styles.button1}
            id={"nextButtons"}
            onClick={handleNextClick}
          >
            <div className={styles.text}>Next</div>
          </div>
          <div className={styles.inputTextContainer}>
            <div className={styles.inputText17}>Length</div>
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
            <div className={styles.inputText17}>Lift Gate</div>
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
        <div className={styles.inputText19}>
          <span className={styles.inputTextTxtContainer}>
            <span>{`By confirming your email, you agree to our `}</span>
            <a href="#">
              <span className={styles.termsOfService}>Terms of Service</span>
            </a>
            <span>{` and that you have read and understood our `}</span>
            <a href="#">
              <span className={styles.termsOfService}>Privacy Policy</span>
            </a>
            <span>.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VechicleToRent;
