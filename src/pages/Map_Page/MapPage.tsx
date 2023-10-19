import { FunctionComponent, useState, useCallback } from "react";
import DropdownMenuMultiSelect from "../../components/Map_Page/DropdownMenuMultiSelect";
import PortalPopup from "../../components/Map_Page/PortalPopup";
import styles from "./MapPage.module.css";

const MapPage: FunctionComponent = () => {
  const [isDropdownMenuMultiSelectOpen, setDropdownMenuMultiSelectOpen] =
    useState(false);

  const openDropdownMenuMultiSelect = useCallback(() => {
    setDropdownMenuMultiSelectOpen(true);
  }, []);

  const closeDropdownMenuMultiSelect = useCallback(() => {
    setDropdownMenuMultiSelectOpen(false);
  }, []);

  const onTheLogoMakerBuiltFor1000Click = useCallback(() => {}, []);

  const onResultsFoundTextClick = useCallback(() => {}, []);

  const onVecicleCardContainerClick = useCallback(() => {}, []);

  const onVecicleCardContainer1Click = useCallback(() => {}, []);

  return (
    <>
      <div className={styles.mapPage}>
        <div className={styles.alreadyHaveAccount}>
          <div className={styles.frameParent}>
            <div className={styles.basicInputParent}>
              <div className={styles.basicInput}>
                <div className={styles.inputText}>Location, state, city</div>
              </div>
              <div className={styles.basicInput1}>
                <div className={styles.inputLeftContent}>
                  <img
                    className={styles.iconoutlinesearch}
                    alt=""
                    src="/iconoutlinesearch1.svg"
                  />
                  <div className={styles.tandemTractor}>Search by ads</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonParent}>
              <div className={styles.button}>
                <div className={styles.text}>To rent out</div>
              </div>
              <div className={styles.button1}>
                <img
                  className={styles.iconoutlinebell}
                  alt=""
                  src="/iconoutlinebell.svg"
                />
              </div>
              <div
                className={styles.buttonGroup}
                onClick={openDropdownMenuMultiSelect}
              >
                <div className={styles.button2}>
                  <div className={styles.photo}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                    <div className={styles.vt}>VT</div>
                  </div>
                  <div className={styles.text1}>Profile</div>
                </div>
                <div className={styles.button3}>
                  <img
                    className={styles.iconoutlinebell}
                    alt=""
                    src="/iconsolidmenu.svg"
                  />
                </div>
              </div>
              <div className={styles.frameChild} />
            </div>
            <img
              className={styles.theLogoMakerBuiltFor1000}
              alt=""
              src="/the-logo-maker-built-for-1000-industries-and-20m-users@2x.png"
              onClick={onTheLogoMakerBuiltFor1000Click}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button4}>
            <img
              className={styles.iconsolidchevronLeft}
              alt=""
              src="/iconsolidchevronleft.svg"
            />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.button5}>
              <img
                className={styles.iconsolidchevronLeft}
                alt=""
                src="/iconoutlineplus.svg"
              />
            </div>
            <div className={styles.button6}>
              <img
                className={styles.iconsolidchevronLeft}
                alt=""
                src="/iconsolidminus.svg"
              />
            </div>
          </div>
          <img className={styles.image76Icon} alt="" src="/image-76@2x.png" />
          <div className={styles.component13}>
            <div className={styles.text}>120$</div>
          </div>
          <div className={styles.component14}>
            <div className={styles.text}>130$</div>
          </div>
          <div className={styles.component15}>
            <div className={styles.text}>80$</div>
          </div>
          <div className={styles.component16}>
            <div className={styles.text}>115$</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameDiv}>
            <div className={styles.button7}>
              <img
                className={styles.iconoutlinesearch}
                alt=""
                src="/iconoutlinebell1.svg"
              />
              <div className={styles.headline}>Follow the filter</div>
            </div>
            <div className={styles.button7}>
              <div className={styles.headline}>Sort by</div>
              <img
                className={styles.iconoutlinesearch}
                alt=""
                src="/iconsolidchevrondown.svg"
              />
            </div>
          </div>
          <div
            className={styles.resultsFound}
            onClick={onResultsFoundTextClick}
          >
            20 results found
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.vecicleCardParent}>
            <div
              className={styles.vecicleCard}
              onClick={onVecicleCardContainerClick}
            >
              <div className={styles.frameParent1}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                </div>
                <img
                  className={styles.mdicardsHeartOutlineIcon}
                  alt=""
                  src="/mdicardsheartoutline.svg"
                />
                <div className={styles.badgesOnCard}>
                  <img
                    className={styles.iconoutlinesearch}
                    alt=""
                    src="/rivipcrownline.svg"
                  />
                  <div className={styles.premium}>Premium</div>
                </div>
              </div>
              <div className={styles.component31}>
                <div className={styles.peterbilt579Parent}>
                  <div className={styles.text}>2017 Peterbilt 579</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.tandemTractor}>Tandem Tractor</div>
                </div>
                <div className={styles.toledoOhio43612Parent}>
                  <div className={styles.milesAway}>Toledo, Ohio 43612</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.materialSymbolsstarParent}>
                      <img
                        className={styles.materialSymbolsstarIcon}
                        alt=""
                        src="/materialsymbolsstar.svg"
                      />
                      <div className={styles.milesAway}>5.0 (12)</div>
                    </div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.iconoutlinetruckParent}>
                    <img
                      className={styles.iconoutlinetruck}
                      alt=""
                      src="/iconoutlinetruck.svg"
                    />
                    <div className={styles.k}>{`512k `}</div>
                    <div className={styles.mileage}>Mileage</div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.materialSymbolsstarParent}>
                    <img
                      className={styles.pointMapIcon}
                      alt=""
                      src="/point-map.svg"
                    />
                    <div className={styles.milesAway}>52 miles away</div>
                  </div>
                </div>
                <div className={styles.component31Inner}>
                  <div className={styles.dayWrapper}>
                    <div className={styles.milesAway}>
                      <span className={styles.span}>$122</span>
                      <b>{` / `}</b>
                      <span className={styles.span}>day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.vecicleCard}
              onClick={onVecicleCardContainer1Click}
            >
              <div className={styles.frameParent1}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                </div>
                <img
                  className={styles.mdicardsHeartOutlineIcon}
                  alt=""
                  src="/mdicardsheartoutline.svg"
                />
                <div className={styles.badgesOnCard}>
                  <img
                    className={styles.iconoutlinesearch}
                    alt=""
                    src="/rivipcrownline.svg"
                  />
                  <div className={styles.premium}>Premium</div>
                </div>
              </div>
              <div className={styles.component31}>
                <div className={styles.peterbilt579Parent}>
                  <div className={styles.text}>2017 Peterbilt 579</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.tandemTractor}>Tandem Tractor</div>
                </div>
                <div className={styles.toledoOhio43612Parent}>
                  <div className={styles.milesAway}>Toledo, Ohio 43612</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.materialSymbolsstarParent}>
                      <img
                        className={styles.materialSymbolsstarIcon}
                        alt=""
                        src="/materialsymbolsstar.svg"
                      />
                      <div className={styles.milesAway}>5.0 (12)</div>
                    </div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.iconoutlinetruckParent}>
                    <img
                      className={styles.iconoutlinetruck}
                      alt=""
                      src="/iconoutlinetruck.svg"
                    />
                    <div className={styles.k}>{`512k `}</div>
                    <div className={styles.mileage}>Mileage</div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.materialSymbolsstarParent}>
                    <img
                      className={styles.pointMapIcon}
                      alt=""
                      src="/point-map.svg"
                    />
                    <div className={styles.milesAway}>52 miles away</div>
                  </div>
                </div>
                <div className={styles.component31Inner}>
                  <div className={styles.dayWrapper}>
                    <div className={styles.milesAway}>
                      <span className={styles.span}>$122</span>
                      <b>{` / `}</b>
                      <span className={styles.span}>day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.vecicleCardGroup}>
            <div className={styles.vecicleCard2}>
              <div className={styles.frameParent3}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameChild7} />
                  <div className={styles.frameChild7} />
                  <div className={styles.frameChild7} />
                </div>
                <img
                  className={styles.mdicardsHeartOutlineIcon}
                  alt=""
                  src="/mdicardsheartoutline.svg"
                />
                <div className={styles.badgesOnCardParent}>
                  <div className={styles.badgesOnCard2}>
                    <img
                      className={styles.iconoutlinesearch}
                      alt=""
                      src="/iconoutlineroybam2.svg"
                    />
                  </div>
                  <div className={styles.badgesOnCard3}>
                    <img
                      className={styles.iconoutlinesearch}
                      alt=""
                      src="/rivipcrownline1.svg"
                    />
                  </div>
                  <div className={styles.badgesOnCard4}>
                    <img
                      className={styles.iconoutlinesearch}
                      alt=""
                      src="/iconoutlinechevrondoubleup1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.component32}>
                <div className={styles.peterbilt579Parent}>
                  <div className={styles.text}>2017 Peterbilt 579</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.tandemTractor}>Tandem Tractor</div>
                </div>
                <div className={styles.toledoOhio43612Parent}>
                  <div className={styles.milesAway}>Toledo, Ohio 43612</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.materialSymbolsstarParent}>
                      <img
                        className={styles.materialSymbolsstarIcon}
                        alt=""
                        src="/materialsymbolsstar.svg"
                      />
                      <div className={styles.milesAway}>5.0 (12)</div>
                    </div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.iconoutlinetruckParent}>
                    <img
                      className={styles.iconoutlinetruck}
                      alt=""
                      src="/iconoutlinetruck.svg"
                    />
                    <div className={styles.k}>{`512k `}</div>
                    <div className={styles.mileage}>Mileage</div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.materialSymbolsstarParent}>
                    <img
                      className={styles.pointMapIcon}
                      alt=""
                      src="/point-map.svg"
                    />
                    <div className={styles.milesAway}>52 miles away</div>
                  </div>
                </div>
                <div className={styles.component31Inner}>
                  <div className={styles.dayWrapper}>
                    <div className={styles.milesAway}>
                      <span className={styles.span}>$122</span>
                      <b>{` / `}</b>
                      <span className={styles.span}>day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.vecicleCard2}>
              <div className={styles.frameParent3}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameChild7} />
                  <div className={styles.frameChild7} />
                  <div className={styles.frameChild7} />
                </div>
                <img
                  className={styles.mdicardsHeartOutlineIcon}
                  alt=""
                  src="/mdicardsheartoutline.svg"
                />
                <div className={styles.badgesOnCardParent}>
                  <div className={styles.badgesOnCard2}>
                    <img
                      className={styles.iconoutlinesearch}
                      alt=""
                      src="/iconoutlineroybam2.svg"
                    />
                  </div>
                  <div className={styles.badgesOnCard3}>
                    <img
                      className={styles.iconoutlinesearch}
                      alt=""
                      src="/rivipcrownline1.svg"
                    />
                  </div>
                  <div className={styles.badgesOnCard4}>
                    <img
                      className={styles.iconoutlinesearch}
                      alt=""
                      src="/iconoutlinechevrondoubleup1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.component32}>
                <div className={styles.peterbilt579Parent}>
                  <div className={styles.text}>2017 Peterbilt 579</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.tandemTractor}>Tandem Tractor</div>
                </div>
                <div className={styles.toledoOhio43612Parent}>
                  <div className={styles.milesAway}>Toledo, Ohio 43612</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.materialSymbolsstarParent}>
                      <img
                        className={styles.materialSymbolsstarIcon}
                        alt=""
                        src="/materialsymbolsstar.svg"
                      />
                      <div className={styles.milesAway}>5.0 (12)</div>
                    </div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.iconoutlinetruckParent}>
                    <img
                      className={styles.iconoutlinetruck}
                      alt=""
                      src="/iconoutlinetruck.svg"
                    />
                    <div className={styles.k}>{`512k `}</div>
                    <div className={styles.mileage}>Mileage</div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.materialSymbolsstarParent}>
                    <img
                      className={styles.pointMapIcon}
                      alt=""
                      src="/point-map.svg"
                    />
                    <div className={styles.milesAway}>52 miles away</div>
                  </div>
                </div>
                <div className={styles.component31Inner}>
                  <div className={styles.dayWrapper}>
                    <div className={styles.milesAway}>
                      <span className={styles.span}>$122</span>
                      <b>{` / `}</b>
                      <span className={styles.span}>day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild14} />
          <div className={styles.toast}>
            <div className={styles.iconoutlinetruckParent2}>
              <img
                className={styles.iconoutlinebell}
                alt=""
                src="/iconoutlinetruck2.svg"
              />
              <div className={styles.moreDistantButNoLessImpoParent}>
                <div className={styles.tandemTractor}>
                  More distant, but no less important
                </div>
                <div className={styles.clearTheFilter}>
                  Clear the filter to view 458 transport options
                </div>
              </div>
            </div>
            <div className={styles.button9}>
              <div className={styles.text4}>
                <p className={styles.clearFilters}>Clear filters</p>
                <p className={styles.more458Transport}>
                  More 458 transport options
                </p>
              </div>
            </div>
            <div className={styles.button10}>
              <div className={styles.headline}>Clear filters</div>
            </div>
          </div>
          <div className={styles.vecicleCardParent}>
            <div className={styles.vecicleCard2}>
              <div className={styles.frameParent5}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                </div>
                <img
                  className={styles.mdicardsHeartOutlineIcon}
                  alt=""
                  src="/mdicardsheartoutline.svg"
                />
                <div className={styles.badgesOnCard}>
                  <img
                    className={styles.iconoutlinesearch}
                    alt=""
                    src="/rivipcrownline1.svg"
                  />
                  <div className={styles.premium}>Premium</div>
                </div>
              </div>
              <div className={styles.component31}>
                <div className={styles.peterbilt579Parent}>
                  <div className={styles.text}>2017 Peterbilt 579</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.tandemTractor}>Tandem Tractor</div>
                </div>
                <div className={styles.toledoOhio43612Parent}>
                  <div className={styles.milesAway}>Toledo, Ohio 43612</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.materialSymbolsstarParent}>
                      <img
                        className={styles.materialSymbolsstarIcon}
                        alt=""
                        src="/materialsymbolsstar.svg"
                      />
                      <div className={styles.milesAway}>5.0 (12)</div>
                    </div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.iconoutlinetruckParent}>
                    <img
                      className={styles.iconoutlinetruck}
                      alt=""
                      src="/iconoutlinetruck.svg"
                    />
                    <div className={styles.k}>{`512k `}</div>
                    <div className={styles.mileage}>Mileage</div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.materialSymbolsstarParent}>
                    <img
                      className={styles.pointMapIcon}
                      alt=""
                      src="/point-map.svg"
                    />
                    <div className={styles.milesAway}>52 miles away</div>
                  </div>
                </div>
                <div className={styles.component31Inner}>
                  <div className={styles.dayWrapper}>
                    <div className={styles.milesAway}>
                      <span className={styles.span}>$122</span>
                      <b>{` / `}</b>
                      <span className={styles.span}>day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.vecicleCard2}>
              <div className={styles.frameParent6}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                  <div className={styles.frameInner} />
                </div>
                <img
                  className={styles.mdicardsHeartOutlineIcon}
                  alt=""
                  src="/mdicardsheartoutline.svg"
                />
                <div className={styles.badgesOnCard}>
                  <img
                    className={styles.iconoutlinesearch}
                    alt=""
                    src="/rivipcrownline1.svg"
                  />
                  <div className={styles.premium}>Premium</div>
                </div>
              </div>
              <div className={styles.component31}>
                <div className={styles.peterbilt579Parent}>
                  <div className={styles.text}>2017 Peterbilt 579</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.tandemTractor}>Tandem Tractor</div>
                </div>
                <div className={styles.toledoOhio43612Parent}>
                  <div className={styles.milesAway}>Toledo, Ohio 43612</div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.materialSymbolsstarParent}>
                      <img
                        className={styles.materialSymbolsstarIcon}
                        alt=""
                        src="/materialsymbolsstar.svg"
                      />
                      <div className={styles.milesAway}>5.0 (12)</div>
                    </div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.iconoutlinetruckParent}>
                    <img
                      className={styles.iconoutlinetruck}
                      alt=""
                      src="/iconoutlinetruck.svg"
                    />
                    <div className={styles.k}>{`512k `}</div>
                    <div className={styles.mileage}>Mileage</div>
                  </div>
                  <div className={styles.vecicleCardrectangle1271}>
                    <div className={styles.vecicleCardrectangle1271Child} />
                  </div>
                  <div className={styles.materialSymbolsstarParent}>
                    <img
                      className={styles.pointMapIcon}
                      alt=""
                      src="/point-map.svg"
                    />
                    <div className={styles.milesAway}>52 miles away</div>
                  </div>
                </div>
                <div className={styles.component31Inner}>
                  <div className={styles.dayWrapper}>
                    <div className={styles.milesAway}>
                      <span className={styles.span}>$122</span>
                      <b>{` / `}</b>
                      <span className={styles.span}>day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resultsFound1}>20 results found</div>
          <div className={styles.centeredPageNumbersdesktop}>
            <div className={styles.topBorder} />
            <div className={styles.links}>
              <div className={styles.moreDistantButNoLessImpoParent}>
                <div className={styles.topBorder1} />
                <div className={styles.content}>
                  <img
                    className={styles.iconoutlinesearch}
                    alt=""
                    src="/arrow-narrow-left1.svg"
                  />
                  <div className={styles.previous}>Previous</div>
                </div>
              </div>
              <div className={styles.numberLinks}>
                <div className={styles.moreDistantButNoLessImpoParent}>
                  <div className={styles.topBorder1} />
                  <div className={styles.content1}>
                    <div className={styles.previous}>1</div>
                  </div>
                </div>
                <div className={styles.paginationnumberLink1}>
                  <div className={styles.topBorder3} />
                  <div className={styles.content1}>
                    <div className={styles.previous}>2</div>
                  </div>
                </div>
                <div className={styles.moreDistantButNoLessImpoParent}>
                  <div className={styles.topBorder1} />
                  <div className={styles.content1}>
                    <div className={styles.previous}>3</div>
                  </div>
                </div>
                <div className={styles.moreDistantButNoLessImpoParent}>
                  <div className={styles.topBorder1} />
                  <div className={styles.content1}>
                    <div className={styles.previous}>...</div>
                  </div>
                </div>
                <div className={styles.moreDistantButNoLessImpoParent}>
                  <div className={styles.topBorder1} />
                  <div className={styles.content1}>
                    <div className={styles.previous}>8</div>
                  </div>
                </div>
                <div className={styles.moreDistantButNoLessImpoParent}>
                  <div className={styles.topBorder1} />
                  <div className={styles.content1}>
                    <div className={styles.previous}>9</div>
                  </div>
                </div>
                <div className={styles.moreDistantButNoLessImpoParent}>
                  <div className={styles.topBorder1} />
                  <div className={styles.content1}>
                    <div className={styles.previous}>10</div>
                  </div>
                </div>
              </div>
              <div className={styles.moreDistantButNoLessImpoParent}>
                <div className={styles.topBorder1} />
                <div className={styles.content8}>
                  <div className={styles.previous}>Next</div>
                  <img
                    className={styles.iconoutlinesearch}
                    alt=""
                    src="/arrow-narrow-right1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild23} />
          <div className={styles.frameParent7}>
            <div className={styles.choiceParent}>
              <div className={styles.choice}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon}
                      alt=""
                      src="/image-751@2x.png"
                    />
                    <div className={styles.headline}>Truck</div>
                  </div>
                  <img
                    className={styles.iconoutlinesearch}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.choiceChild} />
              </div>
              <div className={styles.frameChild24} />
              <div className={styles.frameParent9}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-75@2x.png"
                    />
                    <div className={styles.headline}>Others</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.frameChild25} />
              <div className={styles.frameParent9}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-752@2x.png"
                    />
                    <div className={styles.headline}>Sleeper Truck</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.choice}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-75@2x.png"
                    />
                    <div className={styles.headline}>Day Cab Truck</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-75@2x.png"
                    />
                    <div className={styles.headline}>Dump Truck</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-752@2x.png"
                    />
                    <div className={styles.headline}>Box Truck</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-75@2x.png"
                    />
                    <div className={styles.headline}>Tow Truck</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-752@2x.png"
                    />
                    <div
                      className={styles.headline}
                    >{`Cab & Chassis Truck`}</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-752@2x.png"
                    />
                    <div
                      className={styles.headline}
                    >{`Cab & Chassis Truck`}</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-75@2x.png"
                    />
                    <div className={styles.headline}>Truck</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.frameParent8}>
                  <div className={styles.image75Parent}>
                    <img
                      className={styles.image75Icon1}
                      alt=""
                      src="/image-75@2x.png"
                    />
                    <div className={styles.headline}>Truck</div>
                  </div>
                  <img
                    className={styles.iconsolidchevronDown2}
                    alt=""
                    src="/iconsolidchevrondown.svg"
                  />
                </div>
                <div className={styles.instanceChild} />
              </div>
            </div>
            <div className={styles.button11}>
              <img
                className={styles.iconoutlinesearch}
                alt=""
                src="/iconoutlinefilter.svg"
              />
              <div className={styles.headline}>Filter (3)</div>
            </div>
            <div className={styles.frameChild26} />
          </div>
          <div className={styles.frameChild23} />
        </div>
      </div>
      {isDropdownMenuMultiSelectOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropdownMenuMultiSelect}
        >
          <DropdownMenuMultiSelect onClose={closeDropdownMenuMultiSelect} />
        </PortalPopup>
      )}
    </>
  );
};

export default MapPage;
