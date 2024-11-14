import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
  const { data } = useLoaderData();
  console.log(data);
  return <div>{data.length} News Found in This Category </div>;
};

export default CategoryNews;