import { FunctionComponent, useCallback } from "react";
import Property11 from "../components/Property11";
import SideAndNavbarDriver from "../components/SideAndNavbarDriver";
import FormContainer from "../components/FormContainer";
import "./RegistrationPage01.css";

const RegistrationPage01: FunctionComponent = () => {
  const onTheLogoMakerBuiltFor1000Click = useCallback(() => {
    console.log("yest");
  }, []);

  const handleClick = useCallback(() => {}, []);

  return (
    <div className="looking-for-rent-01">
      <Property11
        property11Position="absolute"
        property11Top="0px"
        property11Left="0px"
        stockPhotoBigRigGrayBonneHeight="573px"
      />
      <SideAndNavbarDriver
        property1AlreadyHaveAccouPosition="relative"
        property1AlreadyHaveAccouTop="0px"
        property1AlreadyHaveAccouLeft="calc(50% - 612px)"
        onTheLogoMakerBuiltFor1000Click={onTheLogoMakerBuiltFor1000Click}
      />
      <div className="looking-for-rent-01-child" />
      <FormContainer />
    </div>
  );
};

export default RegistrationPage01;
