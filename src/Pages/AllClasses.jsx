import { useState } from "react";
import useAxiosPublic from "../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import Button from "../Components/Shared/Button";
import LoadingPage from "./LoadingPage";

const AllClasses = () => {
  const axiospublic = useAxiosPublic();
  const [itemOffset, setItemOffset] = useState(0);
  const [sortBy, setSortBy] = useState(""); // Sorting state
  const itemsPerPage = 6;

  const { data: AllClasses = [], isLoading } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const { data } = await axiospublic.get("/allClassesPublic");
      return data;
    },
  });

  // Function to handle sorting
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setItemOffset(0); // Reset to first page when sorting
  };

  // Sorting logic
  const sortedClasses = [...AllClasses].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "name") return a.title.localeCompare(b.title);
    if (sortBy === "enrolled") return b.enrolledStudents - a.enrolledStudents;
    return 0;
  });

  // Pagination
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = sortedClasses.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedClasses.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % sortedClasses.length;
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <section className="bg-light py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          All Classes
        </h2>

        {/* Sorting Dropdown */}
        <div className="mb-6 text-center">
          <label className="text-secondary font-medium mr-2">Sort By:</label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="border p-2 rounded-md"
          >
            <option value="">Default</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
            <option value="enrolled">Most Enrolled</option>
          </select>
        </div>

        {/* Classes List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems?.map((cls) => (
            <div
              key={cls._id}
              className="bg-white flex flex-col justify-between rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
            >
              {/* Class Image */}
              <div>
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full border border-[#00203f] h-56 md:h-64 object-cover rounded-2xl mb-4"
                />
                {/* Title */}
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {cls.title}
                </h3>
                {/* Teacher's Name */}
                <p className="text-sm text-muted mb-2">
                  <span className="font-medium">Instructor:</span> {cls.name}
                </p>
                {/* Short Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {cls.description}
                </p>
                {/* Price and Enrolment */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary font-semibold">
                    ${cls.price}
                  </span>
                  <span className="text-muted text-sm">
                    Enrolled: {cls.enrolledStudents}
                  </span>
                </div>
              </div>
              {/* Enroll Button */}
              <div className="w-full mx-auto">
                <Button
                  filled
                  label={"Enroll Now"}
                  address={`/class-details/${cls._id}`}
                  overLapingClass={" py-2 text-center"}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {AllClasses.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No approved classes available at the moment.
          </p>
        )}
      </div>

      {/* Pagination */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex items-center justify-center w-full gap-3 my-5 text-md"
        pageLinkClassName="page-num bg-primary-light p-2 rounded hover:bg-primary"
        previousClassName="bg-primary p-2 rounded font-bold text-light"
        nextLinkClassName="bg-primary p-2 rounded font-bold text-light"
        activeLinkClassName="active"
      />
    </section>
  );
};

export default AllClasses;
