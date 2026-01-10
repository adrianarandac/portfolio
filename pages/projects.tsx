import type { GetServerSideProps } from "next";

const ProjectsRedirect = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/engineering",
      permanent: true,
    },
  };
};

export default ProjectsRedirect;
