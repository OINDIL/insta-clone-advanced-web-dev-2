import { posts } from "@/assets/data";
import Stories from "./Stories";
import PostCard from "./PostCard";

function Homepage() {
  return (
    <div className="">
      <Stories />
      <section>
        {posts.map((post, index) => (
          <div key={index}>
            <PostCard
              img={post.img}
              username={post.username}
              caption={post.caption}
              likes={post.likes}
              profile={post.profile}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Homepage;
