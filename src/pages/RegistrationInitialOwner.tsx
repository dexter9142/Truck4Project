import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddOrganizationList from "../components/Registration/AddOrganizationList";
import AddOrganizationVerification2 from "../components/Registration/AddOrganizationVerification2";
import VechicleToRent from "../components/Registration/VechicleToRent";
import styles from "./RegistrationInitialOwner.module.css";
import RegistrationOwnerDetails from "./RegistrationOwnerDetails";
import RegistrationOwnerDetails2 from "./RegistrationOwnerDetails2";
import RegistrationOwnerFinal from "./RegistrationOwnerFinal";
import RegistrationOwnerFinalFiles from "./RegistrationOwnerFinalFiles";
import RegistrationOwnerFirst from "./RegistrationOwnerFirst";
import RegistrationOwnerPhoneVerification from "./RegistrationOwnerPhoneVerification";
import RegistrationOwnerShare from "./RegistrationOwnerShare";

type VechicleOwnerProps = {
  onNextButtonClick: () => void;
  onBackButtonClick: () => void;
};

const ResitrationInitialOwner: FunctionComponent<VechicleOwnerProps> = ({
  onNextButtonClick,
  onBackButtonClick,
}) => {
  const [showVechicleToRent, setShowVechicleToRent] = useState(true);

  const onTheLogoMakerBuiltFor1000Click = useCallback(() => {}, []);

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextButtonClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackButtonClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <RegistrationOwnerFirst onNextButtonClick={handleNextButtonClick} />
        );
      case 2:
        return (
          <RegistrationOwnerShare
            onNextButtonClick={handleNextButtonClick}
            onBackButtonClick={handleBackButtonClick}
          />
        );
      case 3:
        return (
          <RegistrationOwnerDetails
            onNextButtonClick={handleNextButtonClick}
            onBackButtonClick={handleBackButtonClick}
          />
        );
      case 4:
        return (
          <AddOrganizationList
            onNextButtonClick={handleNextButtonClick}
            onBackButtonClick={handleBackButtonClick}
          />
        );
      case 5:
        return (
          <RegistrationOwnerDetails2
            onNextButtonClick={handleNextButtonClick}
          />
        );
      case 6:
        return (
          <RegistrationOwnerPhoneVerification
            onNextButtonClick={handleNextButtonClick}
          />
        );
      case 7:
        return (
          <AddOrganizationVerification2
            onNextButtonClick={handleNextButtonClick}
          />
        );
      case 8:
        return (
          <RegistrationOwnerFinal onNextButtonClick={handleNextButtonClick} />
        );
      case 9:
        return (
          <RegistrationOwnerFinalFiles
            onNextButtonClick={handleNextButtonClick}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.ResitrationInitialOwner}>
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
      <div className={styles.alreadyHaveAccount}>
        <img
          className={styles.theLogoMakerBuiltFor1000}
          alt=""
          src="/the-logo-maker-built-for-1000-industries-and-20m-users@2x.png"
          onClick={onTheLogoMakerBuiltFor1000Click}
        />
        <div className={styles.inputTextGroup}>
          <div className={styles.inputText2}>Already have account?</div>
          <div className={styles.button}>
            <div className={styles.text}>Log In</div>
          </div>
        </div>
      </div>
      <div className={styles.ResitrationInitialOwnerChild} />

      {renderCurrentStep()}
    </div>
  );
};

export default ResitrationInitialOwner;
