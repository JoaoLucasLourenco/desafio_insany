import NavItem, { NavItemInterface } from "../Navitem";

function NavItems(props: { arrItems: NavItemInterface[]; classe: string }) {
  return (
    <ul className={props.classe}>
      {props.arrItems.map((item, index) => (
        <NavItem key={index} url={item.url} label={item.label} />
      ))}
      <button>Cadastre-se</button>
    </ul>
  );
}

export default NavItems;
