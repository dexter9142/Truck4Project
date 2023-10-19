import React, { FunctionComponent } from "react";
import SideAndNavbarOwner from "../components/SideAndNavbarOwner";
import styles from "../css/RegistrationOwnerDetails2.module.css";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
};

const RegistrationOwnerDetails2: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
}) => {
  const handleNextClick = () => {
    onNextButtonClick();
  };

  return (
    <>
      <SideAndNavbarOwner />
      <div className={styles.vehicleOwner08}>
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

        <div className={styles.vehicleOwner08Child} />
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
            <div className={styles.stepcircleWithText1}>
              <div className={styles.stepcircle1}>
                <img className={styles.icon} alt="" src="/check.svg" />
              </div>
              <div className={styles.content}>
                <div className={styles.title}>Company details</div>
              </div>
            </div>
            <div className={styles.instanceChild} />
            <div className={styles.stepcircleWithText2}>
              <div className={styles.stepcircle2}>
                <div className={styles.dot} />
              </div>
              <div className={styles.content}>
                <div className={styles.title}>Verification</div>
              </div>
            </div>
          </div>
          <div className={styles.userNameParent}>
            <div className={styles.userName}>Your organization details</div>
            <div
              className={styles.inputText3}
            >{`Please provide your Organization information accurately, it will be used in all your communications on the platform. `}</div>
          </div>
          <div className={styles.textButtonGroup}>
            <div className={styles.textButton1}>
              <img className={styles.icon} alt="" src="/icon6.svg" />
              <div className={styles.reefer}>{`Back `}</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.inputWithLabelParent}>
                <div className={styles.inputWithLabel}>
                  <div className={styles.reefer}>{`Company name `}</div>
                  <div className={styles.basicInput}>
                    <div className={styles.inputField}>
                      ABC Polymer industries, LLC
                    </div>
                  </div>
                </div>
                <div className={styles.inputWithLabel}>
                  <div className={styles.reefer}>Address</div>
                  <div className={styles.basicInput}>
                    <div className={styles.inputText7}>
                      123 Main Street, Anytown, CA...
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inputWithLabelGroup}>
                <div className={styles.inputWithLabel}>
                  <div className={styles.reefer}>Your company e-mail</div>
                  <div className={styles.basicInput2}>
                    <div className={styles.inputText9}>Your company e-mail</div>
                  </div>
                </div>
                <div className={styles.inputWithLabel3}>
                  <div className={styles.inputTextWrapper}>
                    <div className={styles.reefer}>DOT number</div>
                  </div>
                  <div className={styles.basicInput2}>
                    <div className={styles.inputText9}>000-000-00-0</div>
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
              <div className={styles.inputText12}>Length</div>
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
              <div className={styles.inputText12}>Lift Gate</div>
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
    </>
  );
};

export default RegistrationOwnerDetails2;
