import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Button from "../atoms/Button";
import ProfileCard from "../organisms/ProfileCard";
export default function HomePage() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center min-h-screen max-w-full">
        <div>
          <ProfileCard />
          <div className="flex flex-row self-start pt-8 gap-3">
            <Button onClick={() => window.open("https://www.github.com/linusjohansson-se/", "_blank")}>
              <FaGithub className="w-5 h-5 shrink-0" />
              <h1>Github</h1>
            </Button>
            <Button onClick={() => window.open("https://www.linkedin.com/in/linus-j/", "_blank")}>
              <FaLinkedin className="w-5 h-5 shrink-0" />
              <h1>LinkedIn</h1>
            </Button>
            <Button>
              <HiOutlineEnvelope className="w-5 h-5 shrink-0" />
              <h1>Email</h1>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
