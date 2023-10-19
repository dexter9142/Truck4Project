import React, { FunctionComponent, useCallback } from "react";
import styles from "./RegistrationOwnerShare.module.css";

type VechicleOwnerProps = {
  onNextButtonClick: () => void;
  onBackButtonClick: () => void;
};

const RegistrationOwnerShare: FunctionComponent<VechicleOwnerProps> = ({
  onNextButtonClick,
  onBackButtonClick,
}) => {
  const onTheLogoMakerBuiltFor1000Click = useCallback(() => {}, []);

  const onInputWithLabelClick = useCallback(() => {}, []);

  return (
    <>
      <div className={styles.vehicleOwner02}>
        <div className={styles.unsplashx60ygfg5soyParent}>
          <img
            className={styles.unsplashx60ygfg5soyIcon}
            alt=""
            src="/unsplashx60ygfg5soy@2x.png"
          />
          <div className={styles.inputTextParent}>
            <div className={styles.inputText}>
              One place to manage everything
            </div>
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
        </div>
        <div className={styles.vehicleOwner02Child} />
        <div className={styles.textButtonParent}>
          <div className={styles.textButton}>
            <img className={styles.icon} alt="" src="/icon5.svg" />
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
            <div className={styles.userName}>
              Sign up as an owner to share vehicle
            </div>
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
                    <div className={styles.inputField}>{`First name `}</div>
                  </div>
                </div>
                <div className={styles.inputWithLabel1}>
                  <div className={styles.reefer}>{`Last name `}</div>
                  <div className={styles.basicInput}>
                    <div className={styles.inputField}>{`Last name `}</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.inputWithLabelWrapper}>
                    <div className={styles.inputWithLabel1}>
                      <div className={styles.reefer}>Password</div>
                      <div className={styles.basicInput}>
                        <div className={styles.inputText9}>Password</div>
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
                        <img
                          className={styles.dropdownIcon}
                          alt=""
                          src="/dropdown1.svg"
                        />
                        <div className={styles.basicInput3}>
                          <div className={styles.inputField}>+1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.title}>
                    Your password must contain:
                  </div>
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
            <div className={styles.button1}>
              <div className={styles.text} onClick={onNextButtonClick}>
                Next
              </div>
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
              <span className={styles.termsOfService}>Terms of Service</span>
              <span>{` and that you have read and understood our `}</span>
              <span className={styles.termsOfService}>Privacy Policy</span>
              <span>.</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationOwnerShare;
