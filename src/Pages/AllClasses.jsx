import { useState } from "react";
import useAxiosPublic from "../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

const AllClasses = () => {
  const axiospublic = useAxiosPublic();
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const { data: AllClasses = [] } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const { data } = await axiospublic.get("/allClasses");
      return data;
    },
  });

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = AllClasses.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(AllClasses.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % AllClasses.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="bg-light py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          All Classes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems?.map((cls) => (
            <div
              key={cls._id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
            >
              {/* Class Image */}
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
                <span className="text-primary font-semibold">${cls.price}</span>
                <span className="text-muted text-sm">
                  Enrolled: {cls.totalEnrolment}
                </span>
              </div>
              {/* Enroll Button */}
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-all">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
        {AllClasses.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No approved classes available at the moment.
          </p>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName=" pagination flex items-center justify-center  w-full gap-3 my-5 text-md"
        pageLinkClassName="page-num bg-primary-light p-2 rounded hover:bg-primary"
        previousClassName="bg-primary p-2 rounded font-bold text-light"
        nextLinkClassName="bg-primary p-2 rounded font-bold text-light"
        activeLinkClassName="active"
      />
    </section>
  );
};

export default AllClasses;
