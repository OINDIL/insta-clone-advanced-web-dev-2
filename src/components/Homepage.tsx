import { posts } from "@/assets/data";
import Stories from "./Stories";
import PostCard from "./PostCard";
import BottomBar from "./BottomBar";

function Homepage() {
  return (
    <div className="space-y-10 pb-20 relative max-w-2xl mx-auto">
      <div className="overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Stories />
      </div>
      <section className="flex md:gap-10 flex-col items-center justify-center">
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
      <div className="md:block lg:hidden">
        <BottomBar />
      </div>
    </div>
  );
}

export default Homepage;
