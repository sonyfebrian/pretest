import { useMediaQuery } from "react-responsive";

const People = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 769px)" });

  const itemsToRender = isDesktopOrLaptop
    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    : [1, 2];
  return (
    <>
      <h2 className="text-gray-900  text-lg title-font font-medium mb-3">
        Online
      </h2>
      <div className="flex shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full  rounded-lg p-8 justify-center items-center mx-auto">
        {itemsToRender.map((index) => (
          <div
            key={index}
            className="w-24 h-24 rounded-full -ml-3 mb-10 border-2 border-gray-100 bg-gray-100 text-indigo-500 flex-shrink-0 flex items-center justify-center"
          >
            <div className="text-center">
              <img
                src="https://i.pravatar.cc/300"
                alt={`logo-${index}`}
                className="rounded-full w-17 h-17 mx-auto mb-2 mt-10"
              />
              <p className="text-gray-900 text-xs">Julzi</p>
              <p className="text-gray-900 text-xs title-font font-medium">
                Engineering
              </p>
            </div>
          </div>
        ))}

        <div className="w-24 h-24 rounded-full -ml-3 mb-10 border-2 border-gray-100 bg-gradient-to-r from-red-500 to-red-900 text-white flex-shrink-0 flex items-center justify-center">
          <div className="text-center">
            <p className=" text-xs">10</p>
            <p className="t text-xs title-font font-medium">More</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
