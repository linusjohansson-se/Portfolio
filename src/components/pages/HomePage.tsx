import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Button from "../atoms/Button";
import ProfileCard from "../organisms/ProfileCard";

export default function HomePage() {
  return (
    <>
      <div>
        <ProfileCard />
        <Button>
          <FaGithub className="w-5 h-5 shrink-0" />
          <h1>Github</h1>
        </Button>
        <Button>
          <FaLinkedin className="w-5 h-5 shrink-0" />
          <h1>LinkedIn</h1>
        </Button>
        <Button>
          <HiOutlineEnvelope className="w-5 h-5 shrink-0" />
          <h1>Email</h1>
        </Button>
      </div>
    </>
  );
}
