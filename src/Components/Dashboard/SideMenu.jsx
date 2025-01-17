import { Card, List } from "@material-tailwind/react";
import useRole from "../../Hooks/UseRole";
import StudentMenu from "../Menu/StudentMenu";
import CommonMenu from "../Menu/CommonMenu";
import TeacherMenu from "../Menu/TeacherMenu";
import AdminMenu from "../Menu/AdminMenu";

export function SideMenu() {
  // const [role] = useRole();
  const role = "teacher";
  return (
    <div className="w-full ">
      <Card className="h-[calc(100vh-4rem)] w-9/12 md:w-3/12 bg-gradient-to-b from-primary-darkest to-primary-dark p-4 fixed">
        <List>
          <CommonMenu></CommonMenu>
          {role === "customer" && <StudentMenu></StudentMenu>}
          {role === "teacher" && <TeacherMenu></TeacherMenu>}
          {role === "admin" && <AdminMenu></AdminMenu>}
        </List>
      </Card>
    </div>
  );
}
