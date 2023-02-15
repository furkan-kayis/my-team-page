import Team from "./components/Team";

const App = () => (
  <>
    <main className="mx-auto mt-[4.4375rem] mb-[11.0625rem] max-w-fit md:mb-[13.75rem]">
      <div className="lg:mb-24 lg:flex lg:place-content-between">
        <h1 className="font-pt-serif text-4xl font-bold leading-[3rem] tracking-[-0.045rem] max-lg:mb-[2.375rem]">
          The creative crew
        </h1>
        <div>
          <h2 className="mb-[0.625rem] font-poppins text-lg font-semibold uppercase leading-[1.6875rem]">
            Who we are
          </h2>
          <p className="mb-[3.875rem] max-w-[18.75rem] font-poppins text-sm leading-[1.3125rem] md:max-w-[25rem] md:text-lg md:leading-[1.6875rem]">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>
      <Team />
    </main>
    <footer>
      <div className="mb-6 text-center font-montserrat text-sm font-medium leading-[1.0625rem] text-[#BDBDBD]">
        created by{" "}
        <a
          href="https://devchallenges.io/portfolio/furkan-kayis"
          target="_blank"
          className="font-bold underline"
        >
          furkan-kayis
        </a>{" "}
        - devChallenges.io
      </div>
    </footer>
  </>
);

export default App;
