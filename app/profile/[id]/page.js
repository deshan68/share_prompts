"use client";
import Profile from "@components/Profile";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const profileName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };
    if (params.id) fetchPost();
  }, [params.id]);
  return (
    <Profile
      name={profileName}
      desc={`Welcome to ${profileName}'s personalized profile page. Explore ${profileName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
