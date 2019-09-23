import React from "react";

export class Status extends React.Component {
  render() {
    const dataStatus = this.props.dataStatus;
    return (
      <section className="status">
        <div className="status__text">{dataStatus.status.text}</div>
        <div className="status__img">
          <img src={dataStatus.status.images} alt="pictures"></img>
        </div>
      </section>
    );
  }
}
