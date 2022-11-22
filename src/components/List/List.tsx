import React from "react";
import { IJobsData } from "../../models/model";
import location from "../../assets/images/location.svg";
import bookmark from "../../assets/images/bookmark.svg";
import styles from "../List/List.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import moment from "moment";
import StarRate from "../../features/StarRate/StarRate";
import BackToTop from "../../features/BackToTop/BackToTop";
import { textAnimation } from "../../features/TextAnimation/TextAnimation";

interface ItemProps {
  item: IJobsData;
}

export default function List(props: ItemProps) {
  const { item } = props;
  const posted = `Posted ${moment
    .duration(moment().diff(item.createdAt))
    .humanize()} ago`;
  const navigate = useNavigate();
  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={textAnimation}
      viewport={{ once: true }}
    >
      <img className={styles.picture} src={item.pictures[0]} alt={item.title} />
      <motion.div
        className="flex w-full gap-[32px] md:flex-col-reverse md:gap-[14px]"
        custom={2}
        variants={textAnimation}
      >
        <div className="flex gap-[24px] w-[66%] md:w-full">
          <div>
            <div className="flex flex-col gap-[13px]">
              <Link to={{ pathname: `${item.id}` }} state={{ item: item }}>
                <h2 className="font-bold text-ellipsis text-[#3A4562] text-[18px] md:text-[18px] md:w-full md:font-normal md:tracking-[-0.5625px] cursor-pointer">
                  {item.title}
                </h2>

                <p className="font-normal text-[16px] text-[#878D9D]">
                  Department name • {item.name}
                </p>
                <p className="text-[#878D9D] text-[16px] flex gap-[8px] items-start">
                  <img src={location} alt={"location-img"} />
                  {item.address}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-[32px] md:justify-between">
          <motion.div
            className="flex items-center"
            custom={4}
            variants={textAnimation}
          >
            <StarRate />
          </motion.div>
          <motion.div
            className="flex flex-col justify-between items-end"
            custom={3}
            variants={textAnimation}
          >
            <img src={bookmark} alt={"bookmark-img"} className={"md:hidden"} />
            <p className="font-normal text-[#878D9D] text-[17px] md:font-light md:text-[13px] md:tracking-[0.2px]">
              {posted}
            </p>
          </motion.div>
        </div>
      </motion.div>
      <BackToTop />
    </motion.div>
  );
}
