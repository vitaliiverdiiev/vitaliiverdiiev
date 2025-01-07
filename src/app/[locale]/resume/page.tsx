export const resume = {
  name    : "Vitalii Verdiiev",
  position: "Full-stack Developer",
  info    : {
    location : "Kyiv, Ukraine",
    phone    : "+380-63-5105789",
    email    : "vitaliiverdiiev@gmail.com",
    telegram : "https://t.me/ukrainiancustomer",
    linkedIn : "https://www.linkedin.com/in/vitaliiverdiiev",
    languages: [
      {
        name : "English",
        level: "Fluent",
      },
      {
        name : "Ukrainian",
        level: "Native",
      },
    ],
  },
  summary:
    "Front-end developer with over 3 years of commercial experience and a passion for coding that’s been growing strong since 2019. I’m excited to join an experienced team where I can learn, share, and contribute at every level. For me, collaboration goes beyond just writing code - I love being part of the creative process, from brainstorming ideas and shaping designs to solving technical puzzles and improving user workflows. Both a solo front-end developer, as well as a team player, very Agile-friendly.",
  techStack: {
    frontend: {
      base : ["HTML", "CSS", "Less", "SCSS", "TailwindCSS", "Styled Components"],
      tools: ["JavaScript", "TypeScript", "React", "Next.JS"],
      ui   : [
        "Chakra UI",
        "MUI",
        "Ant Design",
        "Next UI",
        " Shadcn UI",
        "Bootstrap",
      ],
      routing      : ["React Router", "TanStack Router"],
      api          : ["Axios", "TanStack Query", "Apollo GraphQL Client", "Websockets"],
      forms        : ["Formik", "React Hook Form", "TanStack Form"],
      validation   : ["Zod", "Yup"],
      state        : ["Context API", "Redux", "Redux Toolkit", "Zustand", "Jotai"],
      documentation: ["Storybook", "Swagger"],
      toolkit      : ["Gulp", "Webpack", "NPM", "Yarn"],
      testing      : ["Jest", "Vitest", "React Testing Library", "Cypress"],
      workflow     : ["GitLab CI/CD", "GitHub Actions"],
    },

    backend: {
      base     : ["Node.JS", "Express", "Nest.JS"],
      databases: ["MongoDB", "PostgreSQL", "Redis"],
      orms     : ["Type ORM", "Prisma"],
    },

    general: {
      versionControl  : ["Git"],
      containerization: ["Docker", "Docker Compose"],
      cloud           : ["Heroku", "Vercel", "Amazon ECR"],
      os              : ["Windows", "Linux", "Mac"],
    },
  },
};

export const InfoList = ({ info }) => {
  return (
    <div className="grid grid-cols-3">
      {Object.entries(info).map(([key, value]) => (
        <div key={key}>
          <span>{key}:</span>
          {typeof value === "string" ? (
            <span>{value}</span>
          ) : Array.isArray(value) ? (
            <ul>
              {value.map((item, index) => (
                <li key={index}>
                  {Object.entries(item).map(([subKey, subValue]) => (
                    <div key={subKey}>
                      <span>{subKey}:</span> {subValue}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
};
export const TechStackItem = ({
  title,
  stack,
}: {
  title: string;
  stack: string[];
}) => {
  return (
    <div className="px-6 py-4 bg-background text-forground rounded-2xl shadow-md dark:shadow-white">
      <span className=" uppercase font-semibold">{title}</span>
      <ul className="flex flex-col mt-4">
        {stack.map((el) => (
          <li key={el as string} className="list-disc ml-4">
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Page() {
  return (
    <section>
      <div className="container">
        <div className="">
          <h2>{resume.name}</h2>,<h2>{resume.position}</h2>
        </div>
      </div>
    </section>
  );
}
