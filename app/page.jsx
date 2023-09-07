import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptVerse is a revolutionary AI tool empowering creativity by
        generating, sharing, and exploring endless prompts for limitless
        inspiration.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
