import React from "react";

function DownloadLink() {
  return (
    <a href={this.props.src} download>
      {this.props.children}
    </a>
  );
}

export default DownloadLink

// import React from "react";

// class DownloadLink extends React.Component {
//     render() {
//         return (
//             <a href={this.props.src} download>{this.props.children}</a>
//         )
//     }
// }