import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./RegistrationInitialOwner.module.css";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
};

const RegistrationOwnerShare: FunctionComponent<VechicleToRentProps> = ({
  onNextButtonClick,
}) => {
  const handleNextClick = () => {
    onNextButtonClick();
  };

  return (
    <>
      <div className={styles.instanceParent}>
        <div className={styles.userNameParent}>
          <div className={styles.userName}>How will you use Roybam?</div>
          <div className={styles.inputText3}>
            Please select an option below.
          </div>
        </div>
        <div className={styles.radioGroup}>
          <div className={styles.radioGroupItem} id={"nextButtons"}>
            <Link to="/registration_driver">
              <div className={styles.reefer}>I'm a driver</div>
            </Link>
          </div>
          <div className={styles.devider} />
          <div className={styles.radioGroupItem1} id={"nextButtons"}>
            <div className={styles.reefer}>I'm a vehicle owner</div>
          </div>
          <div className={styles.devider1} />
          <div className={styles.radioGroupItem2} id={"nextButtons"}>
            <div className={styles.reefer}>I'm a vehicle owner</div>
          </div>
          <div className={styles.devider2} />
          <div className={styles.radioGroupItem3} id={"nextButtons"}>
            <div className={styles.reefer}>I'm an Essmployee</div>
          </div>
        </div>

        <div className={styles.instanceGroup}>
          <div className={styles.textButtonParent}>
            <div className={styles.textButton}>
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.reefer}>{`Back `}</div>
            </div>
            <div className={styles.userName1}>
              Sign up as an organization to
            </div>
            <div className={styles.frameParent}>
              <div className={styles.iconsolidcheckCircleParent}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/iconsolidcheckcircle.svg"
                />
                <div className={styles.inputText4}>
                  Work compliantly from 150+ countries
                </div>
              </div>
              <div className={styles.iconsolidcheckCircleParent}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/iconsolidcheckcircle.svg"
                />
                <div className={styles.inputText4}>
                  Automate your invoicing for every client
                </div>
              </div>
              <div className={styles.iconsolidcheckCircleParent}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/iconsolidcheckcircle.svg"
                />
                <div className={styles.inputText4}>
                  Avoid transfer fees with 7+ payment options
                </div>
              </div>
            </div>
            <div className={styles.button1}>
              <div className={styles.text} onClick={onNextButtonClick}>
                Next
              </div>
            </div>
            <div className={styles.inputTextContainer}>
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
            <div className={styles.inputTextContainer}>
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
          <img className={styles.groupChild} alt="" src="/group-24561.svg" />
        </div>
        <div className={styles.inputText9}>
          <span className={styles.inputTextTxtContainer}>
            <span>{`Questions regarding? `}</span>
            <span className={styles.span}>дайте нам знать</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default RegistrationOwnerShare;
