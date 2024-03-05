import React from "react";

interface TableHeader {
  headers: string[];
  showFirstRow: boolean;
}

interface Paginations {
  currentPage: number;
  handlePageClick: () => void;
  totalPages: number;
}

// Reusable component for table headers
const TableHeaders = ({ headers, showFirstRow }: TableHeader) => {
  return (
    <thead className="text-xs text-black border-b-[3px] border-custom-text-orange  uppercase">
      {headers.map((header, index) => (
        <tr
          key={index}
          className={`capitalize ${
            !showFirstRow && index === 0 ? "hidden" : "visible"
          }`}
        >
          <th scope="col" className="px-6 py-3" key={index}>
            {header}
          </th>
        </tr>
      ))}
    </thead>
  );
};

// Reusable component for pagination
const Pagination = ({
  currentPage,
  handlePageClick,
  totalPages,
}: Paginations) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-8"
      aria-label="Table navigation"
    >
      <ul
        className="flex items-center flex-column flex-wrap md:flex-row justify-between"
        aria-label="Table navigation"
      >
        {/* Render Previous button */}
        <li>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>

        {/* Render pagination buttons */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <button
              onClick={() => handlePageClick(number)}
              className={`${
                number === currentPage
                  ? "bg-custom-text-orange text-white w-10 rounded-full"
                  : "text-gray-500 bg-white"
              }`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Render Next button */}
        <li>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default { TableHeaders, Pagination };
