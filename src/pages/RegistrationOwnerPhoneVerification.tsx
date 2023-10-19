import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../css/RegistrationOwnerPhoneVerification.module.css";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
};

const RegistrationOwnerPhoneVerification: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
}) => {
  const [time, setTime] = useState({ minutes: 1, seconds: 20 });

  useEffect(() => {
    let intervalId: any;

    const countDown = () => {
      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(intervalId);
        return;
      }

      if (time.seconds === 0) {
        setTime({ minutes: time.minutes - 1, seconds: 59 });
      } else {
        setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
      }
    };

    intervalId = setInterval(countDown, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const formatTime = (value: any) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  return (
    <div className={styles.vehicleOwner05}>
      <div className={styles.unsplashx60ygfg5soyParent}>
        <img
          className={styles.unsplashx60ygfg5soyIcon}
          alt=""
          src="/unsplashx60ygfg5soy@2x.png"
        />
        <div className={styles.inputTextParent}>
          <div className={styles.inputText}>One place to manage everything</div>
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

      <div className={styles.vehicleOwner05Child} />
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
                We well send you a security code by SMS. Choose the number
              </div>
              <div className={styles.radiobuttonParent}>
                <div className={styles.radiobutton}>
                  <img
                    className={styles.radiobuttonIcon}
                    alt=""
                    src="/selectedyes-disabledno-textno.svg"
                  />
                  <div className={styles.textDescription}>
                    Company number +7-1111-44-44
                  </div>
                </div>
                <div className={styles.radiobutton}>
                  <div className={styles.radiobutton2} />
                  <div className={styles.textDescription}>
                    Personal number +7-1222-33-46
                  </div>
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.text}>Send code confirmation</div>
              </div>
              <div className={styles.button2}>
                <div className={styles.text}>
                  Resend code confirmation{" "}
                  {`${formatTime(time.minutes)}:${formatTime(time.seconds)}`}
                </div>
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.inputWithLabelParent}>
              <div className={styles.inputWithLabel}>
                <div className={styles.reefer}>Verification code</div>
                <div className={styles.basicInput}>
                  <div className={styles.inputText6}>0-0-0-0-0</div>
                </div>
              </div>
              <div className={styles.button3}>
                <div
                  className={styles.text}
                  id={"nextButtons"}
                  onClick={onNextButtonClick}
                >
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
          <div className={styles.textButtonGroup}>
            <div className={styles.textButton1}>
              <img className={styles.icon} alt="" src="/icon2.svg" />
              <div className={styles.reefer}>{`Back `}</div>
            </div>
            <div className={styles.iconGroup}>
              <img className={styles.icon} alt="" src="/icon3.svg" />
              <div className={styles.userName}>Verification e-mail</div>
            </div>
            <div className={styles.button4} id={"nextButtons"}>
              <div className={styles.text} onClick={onNextButtonClick}>
                Next
              </div>
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

export default RegistrationOwnerPhoneVerification;
