import { NextPage } from "next";

interface Params {
  franchise: string;
}

const FranchiseMainPage: NextPage = ({ params }: { params: Params }) => {
  return (
    <>
      // <div>{params.franchise}</div>
    </>
  );
};

export default FranchiseMainPage;
