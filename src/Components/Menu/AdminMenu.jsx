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
        address={"/dashboard/teacher-request"}
        icon={UsersIcon}
      ></MenuItem>

      <MenuItem
        label={"Users"}
        address={"/dashboard/users"}
        icon={UserGroupIcon}
      ></MenuItem>
      <MenuItem
        label={"All classes"}
        address={"/dashboard/all-class"}
        icon={WalletIcon}
      ></MenuItem>
    </div>
  );
};

export default AdminMenu;
