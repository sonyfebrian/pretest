import Carousel from "nuka-carousel";

const Carousels = () => {
  return (
    <>
      <h2 className="text-gray-900  text-lg font-bold mb-3">PCS News</h2>
      <Carousel
        autoplayInterval={3000}
        autoplay={true}
        wraparound={true}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "red",
          },
        }}
      >
        {[1, 2, 3].map((index) => (
          <div
            className="flex w-full p-8 justify-center items-center mx-auto"
            key={index}
          >
            <div className="flex rounded-lg h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white ">
                  <img
                    src="https://i.pravatar.cc/300"
                    alt={`logo-${index}`}
                    className="rounded-full w-5 h-5 "
                  />
                </div>
                <h2 className="text-red-500 text-lg title-font font-medium">
                  Ana Riswati
                </h2>
                <span className="flex-grow flex flex-col ">
                  <span className="title-font font-medium ml-auto  text-gray-900">
                    Senin
                  </span>
                  <span className="text-gray-900 text-sm ml-auto ">
                    30 Mei 2023
                  </span>
                </span>
              </div>

              <p className="leading-relaxed text-base">
                Kalimat 1 - Blue bottle crucifix vinyl post-ironic four dollar
                toast vegan taxidermy. Gastropub indxgo juice
              </p>
              <p className="leading-relaxed text-base">
                Kalimat 2 - Blue bottle crucifix vinyl post-ironic four dollar
                toast vegan taxidermy. Gastropub indxgo juice
              </p>
              <p className="leading-relaxed text-base">
                Kalimat 3 - Blue bottle crucifix vinyl post-ironic four dollar
                toast vegan taxidermy. Gastropub indxgo juice
              </p>
              <p className="leading-relaxed text-base">
                Kalimat 4 - Blue bottle crucifix vinyl post-ironic four dollar
                toast vegan taxidermy. Gastropub indxgo juice
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousels;
