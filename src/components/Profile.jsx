const Profile = () => {
  return (
    <>
      <h2 className="text-gray-900  text-lg title-font font-bold mb-1">
        Hi, Good Morning !
      </h2>
      <div className="flex w-full p-8 justify-center items-center mx-auto">
        <div className="flex rounded-lg h-full w-full bg-gradient-to-r from-red-500 to-red-800 text-white p-8 flex-col">
          <div className="flex items-center mb-10">
            <div className="w-15 h-15 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white ">
              <img
                src="https://i.pravatar.cc/300"
                alt=""
                className="rounded-full w-10 h-10 "
              />
            </div>
            <span className=" flex flex-col ">
              <span className="title-font font-bold mr-auto  ">Tabay</span>
              <span className="text-sm ml-auto font-light ">
                UI/UX Designer
              </span>
            </span>
            <span className="flex-grow flex flex-col ">
              <span className="  ml-auto font-thin ">Senin</span>
              <span className=" text-sm ml-auto font-bold ">30 Mei 2023</span>
            </span>
          </div>

          <span className=" flex flex-col ">
            <span className="title-font mr-auto font-extrabold  ">
              Location
            </span>
            <div className="flex flex-row">
              <span className=" text-sm mr-auto font-light ">Kantor Sahid</span>
              <span className=" text-sm ml-auto font-light  ">ICD</span>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Profile;
