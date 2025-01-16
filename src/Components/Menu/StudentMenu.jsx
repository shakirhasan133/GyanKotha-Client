import { BookmarkIcon } from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";

const StudentMenu = () => {
  return (
    <div>
      <MenuItem
        label={"My Enroll Class"}
        address={"/my-enroll-class"}
        icon={BookmarkIcon}
      ></MenuItem>
    </div>
  );
};

export default StudentMenu;
