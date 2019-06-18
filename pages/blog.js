import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const BlogPostTitle = [
  { title: 'React', slug: 'react-is-great' },
  { title: 'Angular', slug: 'angular-is-great' },
  { title: 'BackBone', slug: 'backbone-is-great' },
  { title: 'VueJs', slug: 'vuejs-is-great' }
];

export default () => (
  <Layout title="My Blog">
    <ul>
      {BlogPostTitle.map(BlogPost => {
        return <PostLink slug={BlogPost.slug} title={BlogPost.title} />;
      })}
    </ul>
  </Layout>
);
