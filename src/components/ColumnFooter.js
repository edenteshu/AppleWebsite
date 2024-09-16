import React, { Component } from "react";

class ColumnFooter extends Component {
  render() {
    // console.log(this.props.data);
    // let data = [];
    return (
      <>
        {/* let data = Array.from(this.props.data); */}
        {this.props.data.map(({ title, links }, i) => (
          <div key={i}>
            <h3>{title}</h3>
            <ul>
              {links.map(({ text, url }, i) => {
                return (
                  <li key={i}>
                    <a href={url}> {text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </>
    );
  }
}
export default ColumnFooter;
