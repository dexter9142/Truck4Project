import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent.css";

type FrameComponentType = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return <></>;
};

export default FrameComponent;
