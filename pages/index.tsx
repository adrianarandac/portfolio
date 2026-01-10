import type { GetServerSideProps } from "next";

const HomeRedirect = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/engineering",
      permanent: true,
    },
  };
};

export default HomeRedirect;
