import { motion } from "framer-motion";

type Props = {};

const OpenSea = (props: Props) => {
  return (
    <div className="relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/p31j23cd/production/73257f0b516c4df9a372565178b86b97b9838771-3104x1788.png"
        width="350"
        height="450"
        className="md:mr-0 rounded-lg md:w-[500px] md:h-[380px] object-cover"
      />

      <div className="space-y-10"></div>
    </div>
  );
};

export default OpenSea;
