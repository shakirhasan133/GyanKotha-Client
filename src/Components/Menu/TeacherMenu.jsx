import { BookmarkIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";

const TeacherMenu = () => {
  return (
    <div>
      <MenuItem
        label={"Add Class"}
        address={"/add-class"}
        icon={PlayCircleIcon}
      ></MenuItem>
      <MenuItem
        label={"My Class"}
        address={"/my-class"}
        icon={BookmarkIcon}
      ></MenuItem>
    </div>
  );
};

export default TeacherMenu;
