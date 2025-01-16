import { BookmarkIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";

const TeacherMenu = () => {
  return (
    <div>
      <MenuItem
        label={"Add Class"}
        address={"/dashboard/add-class"}
        icon={PlayCircleIcon}
      ></MenuItem>
      <MenuItem
        label={"My Class"}
        address={"/dashboard/my-classes"}
        icon={BookmarkIcon}
      ></MenuItem>
    </div>
  );
};

export default TeacherMenu;
