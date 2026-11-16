import type { GetServerSideProps } from "next";

const RealRedirect = () => null;

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/viden",
    permanent: true,
  },
});

export default RealRedirect;
