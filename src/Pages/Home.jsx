import Banar from "../Components/Banar";
import HowItWorks from "../Components/HowItWorks";
import JoinAsTeacher from "../Components/JoinAsTeacher";
import PopularCourse from "../Components/PopularCourse";
import SkilledInstructor from "../Components/SkilledInstructor";
import Sponsors from "../Components/Sponsors";
import StatisticsSection from "../Components/StatisticsSection";
import TeacherTestimonialSection from "../Components/TeacherTestimonialSection";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <Banar></Banar>
        <Sponsors></Sponsors>
      </div>
      <PopularCourse></PopularCourse>
      <div>
        <TeacherTestimonialSection></TeacherTestimonialSection>
        <StatisticsSection></StatisticsSection>
        <HowItWorks></HowItWorks>
        <SkilledInstructor></SkilledInstructor>
        <JoinAsTeacher></JoinAsTeacher>
      </div>
    </div>
  );
};

export default Home;
