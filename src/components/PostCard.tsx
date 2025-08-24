import { HeartIcon, MessageCircleIcon, Share2Icon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { useState } from "react";


type Props = {
  img: string;
  username: string;
  caption: string;
  likes: number;
  profile: string;
};

function PostCard({ img, username, caption, likes, profile }: Props) {

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <Card className="max-w-3xl">
        <CardHeader className="flex gap-2 items-center">
          <img src={profile} alt={username} className="rounded-full size-14" />
          <div className="flex items-center gap-2">
            <p className="font-semibold text-xl">{username}</p>
            <span>·</span>
            <p className="text-neutral-400 text-xl">52 mins ago</p>
          </div>
        </CardHeader>
        <CardContent>
          <img src={img} alt={caption} className="rounded-lg"/>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <div className="space-y-3">
            <div className="flex gap-4 items-center">
              <span onClick={() => setIsLiked(!isLiked)}>
              {
                isLiked ? 
                <img src="/heart.png" className="size-7"/>
                : <HeartIcon className="size-7"/> 
              }
              </span>
              <MessageCircleIcon className="size-7"/>
              <Share2Icon className="size-7"/>
            </div>
            <p className="font-semibold">{likes} likes</p>
          </div>
          <p className="text-xl">
            <span className="font-semibold">{username} </span>
            <span> {caption}</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PostCard;
