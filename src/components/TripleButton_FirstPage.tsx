import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ButtonsGroup from "./ButtonsGroup";
import "./TripleButton_FirstPage.css";

type SizeMediumIconNoType = {
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  showRadioGroupItem?: boolean;

  /** Style props */
  radioGroupItemCursor?: CSSProperties["cursor"];

  /** Action props */
  handleClick?: () => void;
};

const SizeMediumIconNo: FunctionComponent<SizeMediumIconNoType> = ({
  text,
  text1,
  text2,
  text3,
  showRadioGroupItem,
  radioGroupItemCursor,
  handleClick,
}) => {
  const ButtonsGroupStyle: CSSProperties = useMemo(() => {
    return {
      cursor: "pointer",
    };
  }, [radioGroupItemCursor]);

  const handleButtonRent = () => {
    const url = "/registration_driver";
    window.location.href = url;
  };

  const handleButtonOwner = () => {
    const url = "/registration_owner";
    window.location.href = url;
  };

  const handleButtonEmployee = () => {
    const url = "/registration/sign_up_driver";
    window.location.href = url;
  };

  return (
    <div className="regButtonsSelect">
      <ButtonsGroup
        label="I'm looking to rent"
        ButtonsGroupBorderRadius="8px 0px 0px 8px"
        ButtonsGroupBackgroundColor="#feede5"
        ButtonsGroupBorderTop="1px solid #fb814c"
        ButtonsGroupBorderRight="unset"
        ButtonsGroupBorderBottom="1px solid #fb814c"
        ButtonsGroupBorderLeft="1px solid #fb814c"
        ButtonsGroupZIndex="6"
        ButtonsGroupCursor="unset"
        textColor="#fa6f32"
        handleClick={handleButtonRent}
      />
      <div className="devider" />

      <ButtonsGroup
        label="I'm a vechicle owner"
        ButtonsGroupBorderRadius="unset"
        ButtonsGroupBackgroundColor="#fff"
        ButtonsGroupBorderTop="1px solid #cbd5e1"
        ButtonsGroupBorderRight="unset"
        ButtonsGroupBorderBottom="1px solid #cbd5e1"
        ButtonsGroupBorderLeft="unset"
        ButtonsGroupZIndex="2"
        ButtonsGroupCursor="unset"
        textColor="#475569"
        handleClick={handleButtonOwner}
      />
      <div className="devider2" />
      <ButtonsGroup
        label="I'm an Employee"
        ButtonsGroupBorderRadius="0px 8px 8px 0px"
        ButtonsGroupBackgroundColor="#fff"
        ButtonsGroupBorderTop="1px solid #cbd5e1"
        ButtonsGroupBorderRight="1px solid #cbd5e1"
        ButtonsGroupBorderBottom="1px solid #cbd5e1"
        ButtonsGroupBorderLeft="unset"
        ButtonsGroupZIndex="0"
        ButtonsGroupCursor="unset"
        textColor="#475569"
        disabled={true}
      />
    </div>
  );
};

export default SizeMediumIconNo;
