import React from 'react';

export default class SetInfo extends React.Component {
  componentDidMount() {
    const { set, loadSet,  } = this.props;
    if (!set || set.status === 'initial') {
      loadSet();
    }
  }
  render() {
    const { set } = this.props;
    if (!set || set.status === 'initial' || set.status === 'loading') {
      return <p>Loading set....</p>;
    }
    if (set.status === 'error') {
      return <p>Ånej! Gick inte ladda :(</p>;
    }
    if (!set.data) {
      return <p>Okänt setnummer!</p>;
    }
    return (
      <React.Fragment>
        <h4>Set {set.data.set_num.split('-')[0]} {set.data.name}</h4>
        <img src={set.data.set_img_url} />
      </React.Fragment>
    );
  }
}
