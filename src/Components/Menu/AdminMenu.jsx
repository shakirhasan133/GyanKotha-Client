import {
  UserGroupIcon,
  UsersIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        label={"Teacher Request"}
        address={"/teacher-request"}
        icon={UsersIcon}
      ></MenuItem>

      <MenuItem
        label={"Users"}
        address={"/users"}
        icon={UserGroupIcon}
      ></MenuItem>
      <MenuItem
        label={"All classes"}
        address={"/all-classes"}
        icon={WalletIcon}
      ></MenuItem>
    </div>
  );
};

export default AdminMenu;
