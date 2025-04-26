import { motion } from "framer-motion";

export default function ThirdPane({ item, onClose }) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="third-pane"
    >
      <button onClick={onClose} className="close-button">Close</button>
      <h2>{item.title}</h2>
      <p>{item.details}</p>
    </motion.div>
  );
}
