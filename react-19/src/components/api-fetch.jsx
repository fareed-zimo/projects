import { use } from "react";

function Posts() {
  //   const [posts, setPosts] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setPosts(data);
  //         setLoading(false);
  //       });
  //   }, []);

  const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );

  const posts = use(fetchPosts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
