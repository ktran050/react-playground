import React from "react";

class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  state = {
    currentSectionIndex: 0,
    display: false,
  };
  handleShowContent(index) {
    this.setState({ currentSectionIndex: index, display: true });
  }
  renderContent(content) {
    return <p>content</p>;
  }
  renderList() {
    return this.props.sections.map((section, index) => {
      return (
        <li key={index}>
          <button
            onClick={() => {
              this.handleShowContent(index);
            }}
          >
            {section.title}
          </button>
          {this.state.display && this.state.currentSectionIndex === index && (
            <p>{section.content}</p>
          )}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default Accordion;
