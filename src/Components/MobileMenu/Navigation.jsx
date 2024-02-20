import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const MenuItems =[
  {Name: "Home", Link: "#"},
  {Name: "Home", Link: "#"},
  {Name: "Home", Link: "#"},
  {Name: "Home", Link: "#"},
  {Name: "Home", Link: "#"},
  {Name: "Home", Link: "#"},
  
]
const itemIds = [0, 1, 2, 3];

const Navigation = () => (
  <motion.ul variants={variants} className="p-25 absolute top-100 w-230 m-0 p-0">
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

export default Navigation;
