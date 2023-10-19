import { FunctionComponent } from "react";
import StylePrimaryStateDefault from "./StylePrimaryStateDefault";
import "./FrameComponent1.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="infoDescriptionParent">
      <div className="text-button">
        <img className="icon" alt="" src="/icon.svg" />
        <div className="reefer">{`Back `}</div>
      </div>
      <div className="headingFirst1">Sign up as an driver to</div>
      <div className="frame-parent">
        <div className="iconsolidcheck-circle-parent">
          <img className="icon" alt="" src="/iconsolidcheckcircle.svg" />
          <div className="input-text4">Please select an option below.</div>
        </div>
        <div className="iconsolidcheck-circle-parent">
          <img className="icon" alt="" src="/iconsolidcheckcircle.svg" />
          <div className="input-text4">Please select an option below.</div>
        </div>
        <div className="iconsolidcheck-circle-parent">
          <img className="icon" alt="" src="/iconsolidcheckcircle.svg" />
          <div className="input-text4">Please select an option below.</div>
        </div>
      </div>
      <StylePrimaryStateDefault
        text="Next"
        stylePrimaryStateDefaultAlignSelf="stretch"
        stylePrimaryStateDefaultFlexShrink="0"
        stylePrimaryStateDefaultBackgroundColor="#fa6f32"
        textColor="#fff"
      />
      <div className="input-text-group">
        <div className="input-text7">Length</div>
        <div className="tag-parent">
          <div className="tag">
            <img
              className="earn-revenue-from-your-idle-fl"
              alt=""
              src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
            />
            <div className="reefer">Small</div>
          </div>
          <div className="tag">
            <img
              className="earn-revenue-from-your-idle-fl"
              alt=""
              src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
            />
            <div className="reefer">Large</div>
          </div>
        </div>
      </div>
      <div className="input-text-group">
        <div className="input-text7">Lift Gate</div>
        <div className="tag-parent">
          <div className="tag">
            <img
              className="earn-revenue-from-your-idle-fl"
              alt=""
              src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
            />
            <div className="reefer">Rail Gate</div>
          </div>
          <div className="tag">
            <img
              className="earn-revenue-from-your-idle-fl"
              alt=""
              src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
            />
            <div className="reefer">Tuck Under</div>
          </div>
          <div className="tag">
            <img
              className="earn-revenue-from-your-idle-fl"
              alt=""
              src="/earn-revenue-from-your-idle-fleet--list-your-truck-on-coop-1@2x.png"
            />
            <div className="reefer">No Lift Gate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
