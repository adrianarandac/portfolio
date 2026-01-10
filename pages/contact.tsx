import type { GetServerSideProps } from "next";

const ContactRedirect = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
};

export default ContactRedirect;
