import React, { useCallback, useState } from "react";

import styles from "../../css/AddOrganization.module.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
};

const AddOrganization: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setInputValue(option);
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);
    setIsDropdownOpen(true);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [hasDot, setHasDot] = useState(false);

  const handleRadioButtonChange = (event: any) => {
    setHasDot(event.target.checked);
  };

  const handleNextClick = () => {
    onNextButtonClick();
  };

  const onInputWithLabel1Click = useCallback(() => {}, []);

  const onInputWithLabel3Click = useCallback(() => {}, []);

  const onTextDescription1Click = useCallback(() => {}, []);

  return (
    <div className={styles.textButtonParent}>
      <div className={styles.textButton}>
        <img className={styles.icon} alt="" src="/icon2.svg" />
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
          <img className={styles.icon} alt="" src="/icon3.svg" />
          <div className={styles.reefer}>{`Back `}</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.inputWithLabelParent}>
            <div className={styles.inputWithLabel}>
              <div className={styles.reefer}>{`Company's State Head`}</div>
              <div className={styles.dropdown}>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    placeholder="Select an option"
                    value={inputValue}
                    onChange={handleInputChange}
                  />

                  <StyledButton
                    className={styles.dropdownButton}
                    onClick={toggleDropdown}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </StyledButton>
                  {isDropdownOpen && (
                    <div
                      className={styles.dropdownMenu}
                      style={{ background: "#F1F5F9" }}
                    >
                      {filteredOptions.map((option, index) => (
                        <div
                          style={{ border: "1px solid gray" }}
                          key={index}
                          className={styles.dropdownMenuItem}
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={styles.inputWithLabel1}
              onClick={onInputWithLabel1Click}
            >
              <div className={styles.reefer}>Company name</div>
              <div className={styles.dropdown}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Company name"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.checkbox}>
          {/* <div className={styles.checkbox1} /> */}
          <div>
            <label className={styles.textDescription}>
              <input
                style={{
                  height: "19px",
                  width: "19px",
                }}
                type="checkbox"
                name="dotRadioButton"
                checked={hasDot}
                onChange={handleRadioButtonChange}
              />
              I dont' have DOT
            </label>
          </div>
        </div>
        <div className={styles.button1} id={"nextButtons"}>
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
          <img className={styles.icon} alt="" src="/icon3.svg" />
          <div className={styles.reefer}>{`Back `}</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.inputWithLabelParent}>
            <div className={styles.inputWithLabel}>
              <div className={styles.reefer}>{`Company's State Head `}</div>
              <div className={styles.dropdown}>
                <div className={styles.inputField}>
                  <input
                    type="text"
                    placeholder="Select an option"
                    value={inputValue}
                    onChange={handleInputChange}
                  />

                  <StyledButton
                    className={styles.dropdownButton}
                    onClick={toggleDropdown}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </StyledButton>
                  {isDropdownOpen && (
                    <div
                      className={styles.dropdownMenu}
                      style={{ background: "#F1F5F9" }}
                    >
                      {filteredOptions.map((option, index) => (
                        <div
                          style={{ border: "1px solid gray" }}
                          key={index}
                          className={styles.dropdownMenuItem}
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={styles.inputWithLabel1}
              onClick={onInputWithLabel3Click}
            >
              <div className={styles.reefer}>{`Company name `}</div>
              <div className={styles.basicInput1}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Company Name"
                  style={{ border: "none" }}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.checkbox}>
          <div>
            <label className={styles.textDescription}>
              <input
                style={{
                  height: "19px",
                  width: "19px",
                }}
                type="checkbox"
                name="dotRadioButton"
                checked={hasDot}
                onChange={handleRadioButtonChange}
              />
              I dont' have DOT
            </label>
          </div>
        </div>
        <div
          className={styles.button2}
          id={"nextButtons"}
          onClick={handleNextClick}
        >
          <div className={styles.text}>Next</div>
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
  );
};

export default AddOrganization;

const StyledButton = styled.button`
  position: absolute;
  border: 0;
  right: 0;
  background-color: transparent;
`;
