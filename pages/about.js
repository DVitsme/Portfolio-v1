import Layout from '../components/Layout';
import { Component } from 'react';

// There is no fetch on the sever
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
  static async getInitialProps() {
    const username = await fetch('https://api.github.com/users/DVitsme');
    const data = await username.json();

    return { user: data };
  }
  render() {
    const { user } = this.props;

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <p>I am a full-stack MERN developer</p>
        <div className="logos">
          <img
            src="/static/JavaScript_logo.png"
            alt="Javascript Logo"
            height="200px"
            className="picture"
          />
          <img
            src={user.avatar_url}
            alt="Pic of me"
            height="200px"
            className="picture"
          />
        </div>
        <style jsx>{`
          .logos {
            display: flex;
          }
          .picture:not(:first-of-type) {
            padding-left: 15px;
          }
        `}</style>
      </Layout>
    );
  }
}
