import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam
      dolores sint fugiat iure et ratione id dignissimos harum enim magni
      voluptatibus animi ut ea, rem velit deleniti ad accusantium.
    </p>
  </Layout>
);

export default withRouter(Post);
