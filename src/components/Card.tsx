import { IUser } from "../hooks/useFetch";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

const childrenVariants: Variants = {
  animate: {
    y: 50,
    opacity: 1,
  },
};
export function Card({ item }: { item: IUser }): JSX.Element {
  console.log(item);
  const [isHovered, setIsHovererd] = useState(false);
  return (
    <motion.div
      drag
      className="flex flex-col card gap-2 items-center"
      variants={childrenVariants}
      initial={{ opacity: 0 }}
    >
      <div className="font-bold text-2xl uppercase">{`${item.name.title} ${item.name.first} ${item.name.last}`}</div>
      <div className="font-bold text-lg">Email: {item.email}</div>
      <motion.div
        className="font-bold text-lg relative"
        onMouseOver={() => setIsHovererd(true)}
        onMouseLeave={() => setIsHovererd(false)}
      >
        <img
          className="border rounded-3xl "
          src={item.picture.large}
          alt={item.picture.large}
        ></img>
        <div
          className={`absolute ${
            isHovered ? "block" : "hidden"
          } w-72 -translate-x-1/2 left-1/2  -bottom-3/4 bg-opacity-75 bg-slate-300 p-5 rounded-md shadow-md `}
        >
          {item.phone}
        </div>
      </motion.div>
    </motion.div>
  );
}
