import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import logo from "../../images/logo/ITS.png";
import { HeadCont, HeadOptions,  LogoLink } from "./Header.styled";
import AddressList from "../AddressList/AddressList";

const Header = () => {
  return (
    <header>
      <HeadCont>
        <LogoLink href="/">
          <img src={logo} alt="Import Transit Service LLC" />
        </LogoLink>
        <HeadOptions>
          <address>
            <AddressList />
          </address>
          <LanguageSwitch />
        </HeadOptions>
      </HeadCont>
    </header>
  );
};

export default Header;
