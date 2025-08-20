import { HeartIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type Props = {
  img: string;
  username: string;
  caption: string;
  likes: number;
  profile: string;
};

function PostCard({ img, username, caption, likes, profile }: Props) {
  return (
    <div>
      <Card>
        <CardHeader>
          <img src={profile} alt={username} />

          <p>{username}</p>
        </CardHeader>
        <CardContent>
          <img src={img} alt={caption} />
        </CardContent>
        <CardFooter>
          <HeartIcon />
          <p>{likes}</p>
          <p>{caption}</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PostCard;
