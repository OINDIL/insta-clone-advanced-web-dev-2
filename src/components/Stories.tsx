import { stories } from "@/assets/data";

function Stories() {
  return (
    <div className="mt-10 flex gap-6 p-4">
      {stories.map((story, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 flex flex-col items-center w-24"
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
        </div>
      ))}
    </div>
  );
}

export default Stories;
