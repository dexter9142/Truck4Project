import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ButtonsGroup.css";

type ButtonsGroupType = {
  label?: string;
  ButtonsGroupBorderRadius?: CSSProperties["borderRadius"];
  ButtonsGroupBackgroundColor?: CSSProperties["backgroundColor"];
  ButtonsGroupBorderTop?: CSSProperties["borderTop"];
  ButtonsGroupBorderRight?: CSSProperties["borderRight"];
  ButtonsGroupBorderBottom?: CSSProperties["borderBottom"];
  ButtonsGroupBorderLeft?: CSSProperties["borderLeft"];
  ButtonsGroupZIndex?: CSSProperties["zIndex"];
  ButtonsGroupCursor?: CSSProperties["cursor"];
  textColor?: CSSProperties["color"];
  disabled?: boolean;

  /** Action props */
  handleClick?: () => void;
};

const ButtonsGroup: FunctionComponent<ButtonsGroupType> = ({
  label = "Item",
  ButtonsGroupBorderRadius,
  ButtonsGroupBackgroundColor,
  ButtonsGroupBorderTop,
  ButtonsGroupBorderRight,
  ButtonsGroupBorderBottom,
  ButtonsGroupBorderLeft,
  ButtonsGroupZIndex,
  ButtonsGroupCursor,
  textColor,
  disabled,
  handleClick,
}) => {
  const ButtonsGroupStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: ButtonsGroupBorderRadius,
      backgroundColor: ButtonsGroupBackgroundColor,
      borderTop: ButtonsGroupBorderTop,
      borderRight: ButtonsGroupBorderRight,
      borderBottom: ButtonsGroupBorderBottom,
      borderLeft: ButtonsGroupBorderLeft,
      zIndex: ButtonsGroupZIndex,
      cursor: ButtonsGroupCursor,
    };
  }, [
    ButtonsGroupBorderRadius,
    ButtonsGroupBackgroundColor,
    ButtonsGroupBorderTop,
    ButtonsGroupBorderRight,
    ButtonsGroupBorderBottom,
    ButtonsGroupBorderLeft,
    ButtonsGroupZIndex,
    ButtonsGroupCursor,
  ]);

  const handleButtonClick = () => {
    console.log("Button clicked!");

    if (handleClick) {
      handleClick();
    }
  };

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <button
      id={"nextButtons"}
      className="statenot-selected-sizemediu"
      style={ButtonsGroupStyle}
      onClick={handleButtonClick}
    >
      <div className="text1" style={text1Style}>
        {label}
      </div>
    </button>
  );
};

export default ButtonsGroup;
