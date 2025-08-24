import { posts } from "@/assets/data";
import Stories from "./Stories";
import PostCard from "./PostCard";

function Homepage() {
  return (
    <div className="space-y-10 pb-20">
      <div>
        <Stories />
      </div>
      <section className="flex gap-10 flex-col items-center justify-center">
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
