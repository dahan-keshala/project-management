export const Navbar = () => {
  const navigation = [
    {
      id: "0",
      title: "Task",
      url: "/task",
    },
    {
      id: "1",
      title: "Project",
      url: "/project",
    },
    {
      id: "2",
      title: "Users",
      url: "/users",
    },
  ];
  return (
    <div
      className={`bg-black text-white fixed top-0 left-0 w-full h-24 z-50 backdrop-blur-sm border-b lg:backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7 xl:px-10 max-lg:py-4 max-[4rem] mt-1">
        <nav
          className="fixed top-0 left-0 right-0 bottom-0 lg:static lg:mx-auto lg:flex lg:items-center"
          color="red"
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative text-2xl transition-colors px-5 py-5 md:py-7 lg:-mr-2 lg:text-xl`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};
