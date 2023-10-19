import React, { useCallback, useState } from "react";

import styles from "../../css/AddOrganizationDetails.module.css";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
  onBackButtonClick: () => void;
};

const AddOrganizationDetails: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
  onBackButtonClick,
}) => {
  const onInputWithLabelClick = useCallback(() => {}, []);

  const handleNextClick = () => {
    onNextButtonClick();
  };

  return (
    <div className={styles.lookingForRent04}>
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

      <div className={styles.lookingForRent04Child} />
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
          <div className={styles.componentChild} />
          <div className={styles.stepcircleWithText1}>
            <div className={styles.stepcircle1}>
              <img className={styles.icon} alt="" src="/check.svg" />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>Company details</div>
            </div>
          </div>
          <div className={styles.componentChild} />
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
          <div className={styles.frameWrapper}>
            <div className={styles.inputWithLabelParent}>
              <div className={styles.inputWithLabel}>
                <div className={styles.reefer}>{`Company's State Head `}</div>
                <div className={styles.dropdown}>
                  <div className={styles.inputField}>
                    Company's State Headquarters
                  </div>
                </div>
              </div>
              <div className={styles.inputWithLabel1}>
                <div className={styles.reefer}>{`Company name `}</div>
                <div className={styles.dropdown}>
                  <div className={styles.inputField}>{`Company name `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.checkbox}>
            <div className={styles.checkbox1} />
            <div className={styles.textDescription}>I don't have DOT</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.text}>Search company</div>
          </div>
          <div className={styles.inputTextContainer}>
            <div className={styles.inputText8}>Length</div>
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
            <div className={styles.inputText8}>Lift Gate</div>
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
        <div className={styles.textButtonGroup}>
          <div className={styles.textButton1}>
            <img className={styles.icon} alt="" src="/icon6.svg" />
            <div className={styles.reefer}>{`Back `}</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.inputWithLabelParent}>
              <div className={styles.inputWithLabel}>
                <div className={styles.reefer}>{`Company's State Head `}</div>
                <div className={styles.dropdown}>
                  <div className={styles.inputField}>
                    Company's State Headquarters
                  </div>
                  <img
                    className={styles.iconsolidcheveronDown}
                    alt=""
                    src="/iconsolidcheverondown.svg"
                  />
                </div>
              </div>
              <div className={styles.inputWithLabel1}>
                <div className={styles.reefer}>{`Company name `}</div>
                <div className={styles.basicInput1}>
                  <div className={styles.inputText13}>{`Company name `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.checkbox}>
            <div className={styles.textDescription1}>I don't have DOT</div>
          </div>
          <div className={styles.button2}>
            <div className={styles.text} onClick={onNextButtonClick}>
              Next
            </div>
          </div>
          <div className={styles.inputTextContainer}>
            <div className={styles.inputText8}>Length</div>
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
            <div className={styles.inputText8}>Lift Gate</div>
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
  );
};

export default AddOrganizationDetails;
