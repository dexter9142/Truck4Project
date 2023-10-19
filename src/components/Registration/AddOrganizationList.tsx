import React, { useCallback, useState } from "react";
import styles from "../../css/AddOrganizationList.module.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type VechicleToRentProps = {
  onNextButtonClick: () => void;
  onBackButtonClick: () => void;
};

const AddOrganizationList: React.FC<VechicleToRentProps> = ({
  onNextButtonClick,
  onBackButtonClick,
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

  const onTheLogoMakerBuiltFor1000Click = useCallback(() => {}, []);

  const onAccordionContainerClick = useCallback(() => {}, []);

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextButtonClick = () => {
    onNextButtonClick();
  };

  const handleBackButtonClick = () => {
    onBackButtonClick();
  };

  return (
    <>
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
          <div className={styles.inputWithLabelParent}>
            <div className={styles.inputWithLabel}>
              <div className={styles.reefer}>Company's State Head</div>
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
                      {filteredOptions.map((option: string, index: number) => (
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
            <div className={styles.inputWithLabel}>
              <div className={styles.reefer}>{`Company name `}</div>
              <div className={styles.basicInput}>
                <input
                  type="text"
                  className={styles.inputField}
                  placeholder="Company name"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
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
          <div className={styles.resultsFoundParent}>
            <div className={styles.resultsFound}>20 results found</div>
            <div className={styles.companyNotOnTheListParent}>
              <div className={styles.resultsFound}>
                Company not on the list?
              </div>
              <div className={styles.addIt}>+Add it</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.accordionParent} id={"listItems"}>
              <div
                className={styles.accordion}
                onClick={onAccordionContainerClick}
              >
                <div className={styles.headlineParent}>
                  <div className={styles.headline}>
                    ABC Polymer industries, LLC
                  </div>
                  <img
                    className={styles.iconsolidcheveronUp}
                    alt=""
                    src="/iconsolidcheveronup.svg"
                  />
                </div>
                <div className={styles.inputText1}>
                  123 Main Street, Anytown, CA 12345, United States
                </div>
              </div>
              <div className={styles.accordion1}>
                <div className={styles.headlineGroup}>
                  <div className={styles.headline}>
                    ABC Polymer industries, LLC
                  </div>
                  <img
                    className={styles.iconsolidcheveronUp}
                    alt=""
                    src="/iconsolidcheveronup.svg"
                  />
                </div>
                <div className={styles.headline3}>
                  123 Main Street, Anytown, CA 12345, United States
                </div>
                <div className={styles.headline4}>
                  why my company is disabled?
                </div>
              </div>
              <div className={styles.accordion2}>
                <div className={styles.headlineParent}>
                  <div className={styles.headline}>
                    ABC Polymer industries, LLC
                  </div>
                  <img
                    className={styles.iconsolidcheveronUp}
                    alt=""
                    src="/iconsolidcheveronup.svg"
                  />
                </div>
                <div className={styles.inputText1}>
                  123 Main Street, Anytown, CA 12345, United States
                </div>
              </div>
              <div className={styles.accordion2}>
                <div className={styles.headlineParent}>
                  <div className={styles.headline}>
                    ABC Polymer industries, LLC
                  </div>
                  <img
                    className={styles.iconsolidcheveronUp}
                    alt=""
                    src="/iconsolidcheveronup.svg"
                  />
                </div>
                <div className={styles.inputText1}>
                  123 Main Street, Anytown, CA 12345, United States
                </div>
              </div>
              <div className={styles.accordion2}>
                <div className={styles.headlineParent}>
                  <div className={styles.headline}>
                    ABC Polymer industries, LLC
                  </div>
                  <img
                    className={styles.iconsolidcheveronUp}
                    alt=""
                    src="/iconsolidcheveronup.svg"
                  />
                </div>
                <div className={styles.inputText1}>
                  123 Main Street, Anytown, CA 12345, United States
                </div>
              </div>
              <div className={styles.accordion2}>
                <div className={styles.headlineParent}>
                  <div className={styles.headline}>
                    ABC Polymer industries, LLC
                  </div>
                  <img
                    className={styles.iconsolidcheveronUp}
                    alt=""
                    src="/iconsolidcheveronup.svg"
                  />
                </div>
                <div className={styles.inputText1}>
                  123 Main Street, Anytown, CA 12345, United States
                </div>
              </div>
              <div className={styles.accordion2}>
                <div className={styles.headlineParent}>
                  <div className={styles.headline}>
                    ABC Polymer industries, LLC
                  </div>
                  <img
                    className={styles.iconsolidcheveronUp}
                    alt=""
                    src="/iconsolidcheveronup.svg"
                  />
                </div>
                <div className={styles.inputText1}>
                  123 Main Street, Anytown, CA 12345, United States
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button2} id={"nextButtons"}>
            <div className={styles.reefer}>
              <span>{`Company not on the list? `}</span>
              <span className={styles.addIt1} onClick={onNextButtonClick}>
                +Add it
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOrganizationList;

const StyledButton = styled.button`
  position: absolute;
  border: 0;
  right: 0;
  background-color: transparent;
`;
