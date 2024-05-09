// import { useSession } from "next-auth/react";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  // const { data: session } = useSession();
  // console.log(session?.user.id);

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient text-capitalize">{name} profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
