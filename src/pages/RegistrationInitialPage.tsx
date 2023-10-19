import { FunctionComponent, useCallback, useState } from "react";
import styles from "./RegistrationInitialPage.module.css";
import VechicleToRent from "../components/Registration/VechicleToRent";
import AddOrganization from "../components/Registration/AddOrganization";
import AddOrganizationDetails from "../components/Registration/AddOrganizationDetails";
import AddOrganizationDetails2 from "../components/Registration/AddOrganizationDetails2";
import AddOrganizationList from "../components/Registration/AddOrganizationList";
import AddOrganizationVerification from "../components/Registration/AddOrganizationVerification";
import AddOrganizationVerification2 from "../components/Registration/AddOrganizationVerification2";
import AddOrganizationFinal from "../components/Registration/AddOrganizationFinal";

const RegistrationInitialPage: FunctionComponent = () => {
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
        return <VechicleToRent onNextButtonClick={handleNextButtonClick} />;
      case 2:
        return <AddOrganization onNextButtonClick={handleNextButtonClick} />;

      case 3:
        return (
          <AddOrganizationList
            onNextButtonClick={handleNextButtonClick}
            onBackButtonClick={handleBackButtonClick}
          />
        );
      case 4:
        return (
          <AddOrganizationDetails2 onNextButtonClick={handleNextButtonClick} />
        );
      case 5:
        return (
          <AddOrganizationVerification
            onNextButtonClick={handleNextButtonClick}
          />
        );
      case 6:
        return (
          <AddOrganizationVerification2
            onNextButtonClick={handleNextButtonClick}
          />
        );
      case 7:
        return <AddOrganizationFinal />;

      default:
        return null;
    }
  };

  return (
    <div className={styles.RegistrationInitialPage}>
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

      <div className={styles.RegistrationInitialPageChild} />

      {/* Component start */}
      {/* {showVechicleToRent ? (
        <VechicleToRent onNextButtonClick={handleNextButtonClick} />
      ) : (
        <AddOrganization />
      )}
      <AddOrganizationDetails onNextButtonClick={handleNextButtonClick} /> */}

      {renderCurrentStep()}
    </div>
  );
};

export default RegistrationInitialPage;
