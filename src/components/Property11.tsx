import { FunctionComponent, useMemo, type CSSProperties } from "react";
import FrameComponent from "./FrameComponent";
import "./Property11.css";

type Property11Type = {
  /** Style props */
  property11Position?: CSSProperties["position"];
  property11Top?: CSSProperties["top"];
  property11Left?: CSSProperties["left"];
  stockPhotoBigRigGrayBonneHeight?: CSSProperties["height"];
};

const Property11: FunctionComponent<Property11Type> = ({
  property11Position,
  property11Top,
  property11Left,
  stockPhotoBigRigGrayBonneHeight,
}) => {
  const property11Style: CSSProperties = useMemo(() => {
    return {
      position: property11Position,
      top: property11Top,
      left: property11Left,
    };
  }, [property11Position, property11Top, property11Left]);

  const stockPhotoBigRigGrayBonneIconStyle: CSSProperties = useMemo(() => {
    return {
      height: stockPhotoBigRigGrayBonneHeight,
    };
  }, [stockPhotoBigRigGrayBonneHeight]);

  return (
    <div className="property-11" style={property11Style}>
      <img
        className="celes-club-p-vidi-gruzovikh-ma-icon"
        alt=""
        src="/1654887482-34celesclubpvidigruzovikhmashinmashinikrasivofoto41removebgpreview@2x.png"
      />
      <img
        className="stock-photo-big-rig-gray-bonne-icon"
        alt=""
        src="/stockphotobigriggraybonnetsemitruckwithhighcabandlongrefrigeratorsemitrailertransporting2263359175removebgpreview@2x.png"
        style={stockPhotoBigRigGrayBonneIconStyle}
      />
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="201px"
        frameDivLeft="88px"
      />
    </div>
  );
};

export default Property11;
