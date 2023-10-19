import { FunctionComponent, useCallback } from "react";
import FrameComponent2 from "./FrameComponent2";
import SizeMediumIconNo from "./TripleButton_FirstPage";
import FrameComponent1 from "./FrameComponent1";
import GroupIcon from "./GroupIcon";
import "./FormContainer.css";

const FormContainer: FunctionComponent = () => {
  const handleClick = useCallback(() => {}, []);

  return (
    <div className="component-parent">
      <FrameComponent2 />
      <SizeMediumIconNo
        text="I'm looking to rent"
        text1="I'm a vehicle owner"
        text2="I'm a vehicle owner"
        text3="I'm an Employee"
        showRadioGroupItem={false}
        radioGroupItemCursor="pointer"
        handleClick={handleClick}
      />
      <div className="component-group">
        <FrameComponent1 />
        <GroupIcon />
      </div>
      <div className="lowerBlock">
        <div className="input-text9">
          <span className="input-text-txt-container">
            <span>{`Got questions? `}</span>
            <a href="#">
              <span className="let-us-know">Let us know!</span>
            </a>
          </span>
        </div>
        <div className="input-text10">
          <span className="input-text-txt-container">
            <span className="prefer-to-call-get-in-touch-w">
              <b className="prefer-to-call">Prefer to call?</b>
              <span> Get in touch with our team at</span>
            </span>
            <span>
              <span>{` `}</span>
            </span>
            <span>
              <span>
                <a href="#">
                  <span className="span">777-747-5352</span>
                </a>
                .
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
