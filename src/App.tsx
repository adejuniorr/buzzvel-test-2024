import { FiArrowRight, FiHeadphones } from "react-icons/fi";

function App() {
  return (
    <>
      <header className="px-[16px] py-[8px] sm:px-[5vw] sm:py-[24px] flex items-center justify-between">
        <div className="flex items-center gap-16">
          <h1 className="text-2xl font-bold">soller</h1>
          <nav className="hidden lg:block">
            <ul className="flex m-0 gap-12 font-medium">
              <li>
                <a href="#Products">Products</a>
              </li>
              <li>
                <a href="#Solutions">Solutions</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Configure">Configure</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="font-medium text-blue flex gap-2 items-center">
            <FiHeadphones />
            555 818 282
          </a>
          <button
            type="button"
            className="border-2 border-purple text-purple hover:bg-purple hover:text-yellow hover:shadow-md hover:shadow-gray-400 font-bold rounded-full px-[24px] py-[12px] w-[22vw] max-w-60 flex items-center justify-around"
          >
            Request a Quote <FiArrowRight />
          </button>
        </div>
      </header>
    </>
  );
}

export default App;
