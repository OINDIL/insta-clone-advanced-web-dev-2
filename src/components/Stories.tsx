import { stories } from "@/assets/data";
import { cn } from "@/lib/utils";

function Stories() {
  return (
    <div className="mt-10 flex items-center gap-5 relative z-0 py-4">
      {stories.map((story, index) => (
        <span
          key={index}
          className={cn("relative flex-shrink-0 flex flex-col items-center w-24")}
        >
          <div className="absolute top-[-2.5px] inset-y-0 translate-x-0 size-[85px] rounded-full bg-gradient-to-t from-pink-600 via-red-400 to-yellow-500 z-0" />
          <img
            src={story.img}
            alt={story.title}
            className="relative z-10 w-20 h-20 rounded-full object-cover border-4 border-white"
          />
          <p className="text-center mt-2 text-sm text-neutral-800 truncate w-20">
            {story.title}
          </p>
        </span>
      ))}
    </div>
  );
}

export default Stories;
