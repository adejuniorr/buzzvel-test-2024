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
          <a href="#" className="font-medium">
            555 818 282
          </a>
          <button
            type="button"
            className="border rounded-full px-[24px] py-[20px] w-[22vw] max-w-60"
          >
            Request a Quote
          </button>
        </div>
      </header>
    </>
  );
}

export default App;
