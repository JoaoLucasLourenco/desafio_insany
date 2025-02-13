import Link from "next/link";
import { Li } from "./style";

export interface NavItemInterface {
  url: string;
  label: string;
}

function NavItem(props: NavItemInterface) {
  return (
    <Li>
      <Link href={props.url}>{props.label}</Link>
    </Li>
  );
}

export default NavItem;
