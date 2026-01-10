import type { GetServerSideProps } from "next";

const AboutRedirect = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/engineering",
      permanent: true,
    },
  };
};

export default AboutRedirect;
