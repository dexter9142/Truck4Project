import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StylePrimaryStateDefault.css";
import { useNavigate } from "react-router-dom";

type StylePrimaryStateDefaultType = {
  text?: string;

  /** Style props */
  stylePrimaryStateDefaultAlignSelf?: CSSProperties["alignSelf"];
  stylePrimaryStateDefaultFlexShrink?: CSSProperties["flexShrink"];
  stylePrimaryStateDefaultBackgroundColor?: CSSProperties["backgroundColor"];
  textColor?: CSSProperties["color"];
  cursor?: CSSProperties["cursor"];
};

const StylePrimaryStateDefault: FunctionComponent<
  StylePrimaryStateDefaultType
> = ({
  text = "Button",
  stylePrimaryStateDefaultAlignSelf,
  stylePrimaryStateDefaultFlexShrink,
  stylePrimaryStateDefaultBackgroundColor,
  cursor = "pointer",
  textColor,
}) => {
  const navigate = useNavigate();

  const stylePrimaryStateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: stylePrimaryStateDefaultAlignSelf,
      flexShrink: stylePrimaryStateDefaultFlexShrink,
      backgroundColor: stylePrimaryStateDefaultBackgroundColor,
      cursor: cursor,
    };
  }, [
    stylePrimaryStateDefaultAlignSelf,
    stylePrimaryStateDefaultFlexShrink,
    stylePrimaryStateDefaultBackgroundColor,
    cursor,
  ]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigate("/registration_driver/sign_up");
  };

  return (
    <div className="nextButtonRudimentary">
      <div
        style={stylePrimaryStateDefaultStyle}
        onClick={handleButtonClick}
        id={"nextButtons"}
      >
        <div className="text" style={textStyle}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default StylePrimaryStateDefault;
