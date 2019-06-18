import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="PANIC!!! WE ARE LOST">
    {statusCode ? (
      `could not find your data status code: ${statusCode}`
    ) : (
      <p>we could not find this page mabye go back?</p>
    )}
  </Layout>
);
