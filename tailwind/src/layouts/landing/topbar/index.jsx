import { BellIcon } from "@heroicons/react/outline";

import { InputSearch, DropDownRoot } from "components/base";

import { Root, MenuWrapper, IconButton, Spacer } from "./elements";

import { menuItems } from "data/menu-item";

export default function Topbar() {
  return (
    <Root>
      <InputSearch placeholder="Search" />
      <Spacer />
      <MenuWrapper>
        <IconButton>
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </IconButton>
        <DropDownRoot title="User" items={menuItems}></DropDownRoot>
      </MenuWrapper>
    </Root>
  );
}
