import SectionHeader from "../atoms/SectionHeader";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center min-h-screen max-w-full">
        <SectionHeader
          headline="About Me"
          subheadline="Loading information about me..."
        />
      </div>
    </>
  );
}
