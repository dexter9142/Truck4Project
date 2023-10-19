import React, { useCallback, useRef, useState } from "react";
import styles from "../css/RegistrationOwnerFinalFiles.module.css";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
};

const RegistrationOwnerFinalFiles: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
}) => {
  const onInputWithLabelClick = useCallback(() => {}, []);

  const handleNextClick = () => {
    onNextButtonClick();
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <>
      <div className={styles.registerATruckOrEdit4P}>
        <div className={styles.alreadyHaveAccount}>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <div className={styles.text}>To rent out</div>
            </div>
            <div className={styles.button1}>
              <img
                className={styles.iconoutlinebell}
                alt=""
                src="/iconoutlinebell.svg"
              />
            </div>
            <div className={styles.buttonGroup}>
              <div className={styles.button2}>
                <div className={styles.photo}>
                  <div className={styles.avatarFace04} />
                  <div className={styles.vt}>VT</div>
                </div>
                <div className={styles.text1}>Profile</div>
              </div>
              <div className={styles.button3}>
                <img
                  className={styles.iconoutlinebell}
                  alt=""
                  src="/iconsolidmenu1.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.theLogoMakerBuiltFor1000}
            alt=""
            src="/the-logo-maker-built-for-1000-industries-and-20m-users@2x.png"
          />
        </div>
        <div className={styles.registerATruckOrEdit4PChild} />
        <div className={styles.frameParent}>
          <div className={styles.textButtonParent}>
            <div className={styles.textButton}>
              <img className={styles.icon} alt="" src="/icon5.svg" />
              <div className={styles.reefer}>Back</div>
            </div>
            <div className={styles.inputText}>1 of 6</div>
          </div>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.userNameParent}>
            <div className={styles.userName}>Additional documents</div>
            <div className={styles.inputText1}>bla bla bla</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.textButtonGroup}>
              <div className={styles.textButton1}>
                <img className={styles.icon} alt="" src="/icon4.svg" />
                <div className={styles.reefer}>{`Back `}</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.inputTextParent}>
                  <div className={styles.reefer}>Article of incorporation</div>
                  <div className={styles.addImage}>
                    <div
                      className={styles.iconoutlinedocumentParent}
                      onClick={handleDivClick}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                      <img
                        className={styles.iconoutlinebell}
                        alt=""
                        src="/iconoutlinedocument1.svg"
                      />
                      <div className={styles.addImageParent}>
                        <div className={styles.addImage1}>Add image</div>
                        <div className={styles.dragAndDrop}>
                          Drag and drop an image here, or click to select file
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputTextParent}>
                  <div className={styles.reefer}>W2 form (EIN-number)</div>
                  <div className={styles.addImage}>
                    <div className={styles.iconoutlinedocumentParent}>
                      <img
                        className={styles.iconoutlinebell}
                        alt=""
                        src="/iconoutlinedocument1.svg"
                      />
                      <div className={styles.addImageParent}>
                        <div className={styles.addImage1}>Add image</div>
                        <div className={styles.dragAndDrop}>
                          Drag and drop an image here, or click to select file
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inputTextContainer}>
                <div className={styles.inputText4}>Length</div>
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
                <div className={styles.inputText4}>Lift Gate</div>
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
            <div className={styles.buttonContainer}>
              <div className={styles.button4} id={"nextButtons"}>
                <div className={styles.text}>Save as a draft</div>
              </div>
              <div className={styles.buttonParent1}>
                <div className={styles.button4} id={"nextButtons"}>
                  <div className={styles.text}>Back</div>
                </div>
                <div className={styles.button6}>
                  <div className={styles.text}>Upload</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.unsplashx60ygfg5soyParent}>
          <img
            className={styles.unsplashx60ygfg5soyIcon}
            alt=""
            src="/unsplashx60ygfg5soy@2x.png"
          />
          <div className={styles.inputTextParent1}>
            <div className={styles.inputText6}>
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
      </div>
    </>
  );
};

export default RegistrationOwnerFinalFiles;
