import React, { Component } from "react";
import { Card, UpdateMobile } from "components";
import { getLocaleLabels, getQueryArg } from "egov-ui-framework/ui-utils/commons";
import Label from "egov-ui-kit/utils/translationNode";
import "./index.css";
import OldValueLabelContainer from "../../../../../common/common/OldValueLabelContainer";
class PropertyInfoCard extends Component {
  render() {
    const { ownerInfo, header, editIcon, backgroundColor = "rgb(242, 242, 242)",items2 = [], items = [], subSection = [], hideSubsectionLabel = false, additionalKey = {} ,showEditNumber=false} = this.props;
    const isModify = getQueryArg(window.location.href, "mode") == 'WORKFLOWEDIT';
    return (
      <div>
        {items && (
          <Card
            style={{ backgroundColor, boxShadow: "none" }}
            className={ownerInfo ? 'pt-info-card-style' : ""}
            textChildren={
              <div>
                <div >
                {!ownerInfo && <div className="rainmaker-displayInline" style={{ alignItems: "center", marginLeft: "13px", marginTop: 20 }}>
                    {header && (
                      <Label
                        labelStyle={{ letterSpacing: "0.67px", color: "rgb(0, 0, 0)", fontWeight: "400", lineHeight: "0px" }}
                        label={header}
                        fontSize="16px"
                      />
                    )}
                    {{ editIcon } && <span style={{ position: "absolute", right: "25px" }}>{editIcon}</span>}
                  </div>}
                  {items.map((item) => {
                    if (item) {
                      return (
                        <div>
                          <div className="col-sm-3 col-xs-12" style={{ marginBottom: 0.2, marginTop: 0.2 }}>
                            <div className="col-sm-12 col-xs-12" style={{ padding: "5px 0px 0px 0px" }}>
                              <Label
                                labelStyle={{ letterSpacing: "0.67px", color: "rgb(0, 0, 0)", fontWeight: "400", lineHeight: "0em" }}
                                label={item.key ? item.key : "NA"}
                                fontSize="13px"
                              />
                            </div>
                            <div className="col-sm-12 col-xs-12" style={{ padding: "5px 0px 0px 0px" }}>
                              <Label
                                labelStyle={{ letterSpacing: "0.67px", color: "rgb(0, 0, 0)", fontWeight: "400", lineHeight: "0px" }}
                                label={item.value ? item.value : "NA"}
                                fontSize="13px"
                              />
                            </div>
                            {isModify && <div className="col-sm-12 col-xs-12" style={{ padding: "5px 0px 0px 0px" }}>	
                              <OldValueLabelContainer value={item.value} jsonPath={item.jsonPath} oldValue={item.oldValue} />	
                            </div>}
                            {showEditNumber&&additionalKey && additionalKey.key && additionalKey.key == item.key && <div className="col-sm-12 col-xs-12" style={{ padding: "5px 0px 0px 0px" }}>
                              <UpdateMobile
                                number={item.value}
                                type={"UPDATE"} 
                                {...additionalKey}
                                >
                              </UpdateMobile>
                            </div>}
                          </div>
                        </div>
                      );
                    }
                  })}
                  {items2 && items2.map((item) => {
                    if (item) {
                      return (
                        <div>
                          <div className="col-sm-3 col-xs-12" style={{ marginBottom: 0.2, marginTop: 0.2 }}>
                            <div className="col-sm-12 col-xs-12" style={{ padding: "5px 0px 0px 0px" }}>
                              <Label
                                labelStyle={{ letterSpacing: "0.67px", color: "rgb(0, 0, 0)", fontWeight: "400", lineHeight: "0em" }}
                                label={item.key ? item.key : "NA"}
                                fontSize="13px"
                              />
                            </div>
                            <div className="col-sm-12 col-xs-12" style={{ padding: "5px 0px 0px 0px" }}>
                              <Label
                                labelStyle={{ letterSpacing: "0.67px", color: "rgb(0, 0, 0)", fontWeight: "400", lineHeight: "0px" }}
                                label={item.value ? item.value : "NA"}
                                fontSize="14px"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                {subSection && (
                  <div>
                    {subSection && Array.isArray(subSection) && subSection.length > 0 && Object.values(subSection).map((units, unitIndex) => {
                      return (
                        <div className="col-sm-12 col-xs-12" style={{ alignItems: "center" }}>
                          {!hideSubsectionLabel && (
                            <Label
                              labelStyle={{
                                letterSpacing: "0.5px",
                                marginTop: 0,
                                marginBottom:0,
                                color: "rgb(0, 0, 0)",
                                fontWeight: "400",
                                lineHeight: "1px",
                              }}
                              label={"PROPERTYTAX_FLOOR_" + Object.keys(subSection)[unitIndex]}
                              fontSize="15px"
                            />
                          )}
                          {units.map((unit, index) => {
                            const subUnitHeader = hideSubsectionLabel ? undefined : `${getLocaleLabels('PT_UNIT', 'PT_UNIT')} -` + (index + 1);
                            return <PropertyInfoCard backgroundColor="white" items={unit} header={subUnitHeader}></PropertyInfoCard>;
                          })}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            }
          />
        )}
      </div>
    );
  }
}
export default PropertyInfoCard;
