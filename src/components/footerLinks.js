import React, { Component } from "react";
import ColumnFooter from "./ColumnFooter";
import footerDataSection from "./data/footerData";
class footerLinks extends Component {
  render() {
    return (
      <div className="footer-links-wrapper row">
        {footerDataSection.map((section, i) => {
          return (
            <div className={`links-wrapper-${i + 1} col-sm-12 col-md`} key={i}>
              <ColumnFooter data={section} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default footerLinks;
