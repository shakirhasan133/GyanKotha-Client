import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";

const CommonMenu = () => {
  return (
    <div>
      <MenuItem label={"Home"} address={"/"} icon={HomeIcon}></MenuItem>

      <MenuItem
        label={"Profile"}
        address={"/dashboard/profile"}
        icon={UserCircleIcon}
      ></MenuItem>
    </div>
  );
};

export default CommonMenu;
