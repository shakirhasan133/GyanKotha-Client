import UseAuth from "../../Hooks/UseAuth";

const DashStats = () => {
  const { user } = UseAuth();

  return (
    <div>
      <h1 className="text-center my-2 text-3xl font-bold text-primary">
        Welcome to Dashboard
      </h1>
      <h3 className="text-center  text-secondary-dark text-xl">
        Hi! {user?.displayName} You can manage your datas from here
      </h3>
    </div>
  );
};

export default DashStats;
