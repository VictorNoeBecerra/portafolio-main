const Projects = () => {
  const projectList = [
    {
      title: "Project 1",
      description: "Amazing description for project 1.",
      imageUrl: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=512&q=80",
    },
    {
      title: "Project 2",
      description: "Exciting description for project 2.",
      imageUrl: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=512&q=80",
    },
    {
      title: "Project 3",
      description: "Detailed description for project 3.",
      imageUrl: "https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=512&q=80",
    },
    {
      title: "Project 4",
      description: "Cool description for project 4.",
      imageUrl: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=512&q=80",
    },
    {
      title: "Project 5",
      description: "Fantastic description for project 5.",
      imageUrl: "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=512&q=80",
    },
    {
      title: "Project 6",
      description: "Unique description for project 6.",
      imageUrl: "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=512&q=80",
    },
  ];

  return (
    <div className="w-full h-screen overflow-x-auto snap-x snap-mandatory flex space-x-10 p-10 bg-primary">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="snap-center bg-beige shadow-xl rounded-3xl w-[320px] h-[512px] flex-shrink-0 p-4 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-3/5 rounded-lg object-cover mb-4" />
          <h2 className="text-2xl font-bold text-primary mb-2">{project.title}</h2>
          <p className="text-lightBlue text-sm">{project.description}</p>
          <div className="mt-auto">
            <button className="bg-accent text-primary py-2 px-4 rounded-full mt-4 transition-all hover:bg-primary hover:text-accent hover:shadow-lg">
              Ver más
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
