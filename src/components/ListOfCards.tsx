import useFetch from "../hooks/useFetch";
import { Variants, motion } from "framer-motion";
import { Card } from "./Card";

const parentVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function ListOfCards(): JSX.Element {
  const { data, status } = useFetch();

  if (status === "pending") {
    return <div>Loading</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <motion.div
      variants={parentVariants}
      animate="animate"
      className="container grid grid-cols-3 m-auto"
    >
      {data?.map((item, index: number) => (
        <div key={index}>
          <Card item={item} />
        </div>
      ))}
    </motion.div>
  );
}
