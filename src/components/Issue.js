import React from 'react';

class Issue extends React.Component {
  constructor(props) {
    super(props);

    this.path = this.props.app.state.areas[this.props.areaIndex].issues[this.props.issueIndex];

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleConditionChange = this.handleConditionChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    event.preventDefault();
    this.props.app.setState(areas: {
      issues: {
        localPhotoURI: event.target.localPhotoURI, photoUploaded: true
      }
    });
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleConditionChange(event) {
    event.preventDefault();
    console.log(this.path);
    // let areaIndex = this.props.areaIndex;
    // let issueIndex = this.props.issueIndex;
    // if(this.path.conditionCurrent === 'pass') {
    //   console.log(this.props.app.state)
    //   this.props.app.setState(state => ({
    //     [state[areas[areaIndex]].issues[issueIndex].conditionCurrent]: 'fail'
    //
    //
    //   }))
    // }
    // else if(issue.conditionCurrent === 'fail')
    //   this.setState({ conditionCurrent: 'noted' });
    // else
    //   this.setState({ conditionCurrent: 'pass' });
  }

  componentDidUpdate() {
    console.log(this.props.app.state);
  }

  render() {
    return (
      <tr>
        <td>
          {this.path.issueName}
        </td>
        <td>
          {this.path.conditionDefault}
        </td>
        <td>
          <input
            type='button'
            name='changeCondition'
            value='Change Condition'
            className='changeCondition'
            onClick={this.handleConditionChange}
          />
        </td>
      </tr>

    );
  }
}

export default Issue;
