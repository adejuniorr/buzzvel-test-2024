import { FiArrowRight, FiHeadphones } from "react-icons/fi";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { Link } from "./buttons/Link";

export const Header = () => {
  return (
    <header className="px-[16px] py-[8px] sm:px-[5vw] sm:py-[24px] flex items-center justify-between text-black">
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
        <Link href="#">
          <FiHeadphones />
          555 818 282
        </Link>
        <PrimaryButton type="button">
          Request a Quote <FiArrowRight />
        </PrimaryButton>
      </div>
    </header>
  );
};
