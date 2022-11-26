import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import bookmark from "../../assets/images/bookmark.svg";
import share from "../../assets/images/share.svg";
import locationicon from "../../assets/images/location.svg";
import left from "../../assets/images/arrow_left.svg";
import moment from "moment";
import Apply from "../../features/ApplyButton/Apply";
import { textAnimation } from "../../features/TextAnimation/TextAnimation";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

export default function DetailedJob() {
  const location = useLocation();
  const currentItem = location?.state?.item;
  const posted = `Posted ${moment
    .duration(moment().diff(currentItem?.createdAt))
    .humanize()} ago`;
  return (
    <motion.div
      className={
        "max-w-[1600px] bg-[#ffff] mt-[0px] pt-[30px] pl-[30px] pb-[30px]"
      }
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={textAnimation}
      viewport={{ once: true }}
    >
      <div className="flex mx-auto gap-[130px] lg:gap-[15px] lg:justify-between md:flex-wrap">
        <div className="max-w-[723px] w-full md:max-w-full">
          <header className=" pb-[9px] flex justify-between items-center border-b-[1px] border-[#3A4562] border-opacity-[0.13]  md:flex-col md:items-start md:border-none md:gap-[23px]">
            <h1 className="text-[#3A4562] text-[28px] font-bold tracking-[0.413333px] md:border-b-[1px] md:border-[#3A4562] md:border-opacity-[0.13] md:w-full md:pb-[12px]">
              Job Details
            </h1>
            <div className="flex gap-[31px] ">
              <p className="flex items-center cursor-pointer gap-[15px] text-[18px] text-[#70778B]">
                <img src={bookmark} alt="bookmark" />
                <span className="text-[18px] tracking-[-0.5625px] text-[#3A4562] md:text-[16px]">
                  Save to my list
                </span>
              </p>
              <p className="flex items-center cursor-pointer gap-[15px] ">
                <img src={share} />
                <span className="text-[18px] tracking-[-0.5625px] text-[#3A4562] md:text-[16px]">
                  Share
                </span>
              </p>
            </div>
          </header>
          <Apply />
          <motion.div
            className="flex justify-between l:gap-[20px] md:flex-col"
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={textAnimation}
            viewport={{ once: true }}
          >
            <h2 className="text-[#3A4562] text-[24px] tracking-[-0.75px] font-bold max-w-[500px] md:max-w-full">
              {currentItem?.title}
            </h2>
            <div className="l:min-w-[115px] md:flex md:flex-col-reverse md:items-end">
              <p className="font-bold text-[#3A4562] text-[20px] tracking-[-0.625px] ">
                € {currentItem?.salary}
              </p>
              <p className="tracking-[-0.5625px] text-[#3A4562] text-[18px] ">
                Brutto, per year
              </p>
            </div>
          </motion.div>
          <p className=" text-[18px] text-[#38415d5b] tracking-[-0.5625px] my-[7px] md:mt-[-50px]">
            {posted}
          </p>
          <motion.p
            className=" flex flex-col  text-[#3A4562] text-[20px] tracking-[-0.625px] "
            initial="hidden"
            whileInView="visible"
            custom={3}
            variants={textAnimation}
            viewport={{ once: true }}
          >
            {currentItem?.description}
          </motion.p>
          <h2 className="mt-[20px] text-[#3A4562] text-[24px] tracking-[-0.75px] font-bold max-w-[480px] md:max-w-full">
            Responsibilities
          </h2>
          <p className=" flex flex-col  text-[#3A4562] text-[20px] tracking-[-0.625px]">
            {currentItem?.description}
          </p>
          <h2 className="mt-[20px] text-[#3A4562] text-[24px] tracking-[-0.75px] font-bold max-w-[480px] md:max-w-full">
            Compensation & Benefits:
          </h2>
          {currentItem?.benefits?.map((benefit: string) => {
            return (
              <ul className="text-lg" key={nanoid()}>
                <li className="text-[#3A4562] list-disc">{benefit}</li>{" "}
              </ul>
            );
          })}

          <motion.div
            className="mt-[86px] md:flex md:flex-col-reverse md:gap-[55px]"
            initial="hidden"
            whileInView="visible"
            custom={4}
            variants={textAnimation}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="mb-[15px] pb-[9px] border-b-[1px] border-[#3A4562] border-opacity-[0.13] font-bold text-[28px] text-[#3A4562]">
                Additional info
              </h2>
              <h4 className="text-[18px] text-[#3A4562]">Employment type</h4>
              <div className="flex gap-[8px]">
                {currentItem?.employment_type?.map((employ: string) => {
                  return (
                    <button
                      className="w-[229px] h-[54px] text-[#55699E] bg-[#b1bdda] rounded-[8px] font-bold hover:bg-[#bdc5d9] md:w-[122px] md:h-[50px]"
                      key={nanoid()}
                    >
                      {employ}
                    </button>
                  );
                })}
              </div>
              <h4 className="text-[18px] text-[#3A4562] mt-[23px]">Benefits</h4>

              <div className="flex gap-[10px]">
                {currentItem?.benefits?.map((benefit: string) => {
                  return (
                    <ul className="text-lg" key={nanoid()}>
                      <button className="w-[229px] h-[54px] text-[#988B49] bg-[#fff8d9] rounded-[8px] font-bold hover:bg-[#dec556] md:w-[134px] md:h-[50px]">
                        {benefit}
                      </button>
                    </ul>
                  );
                })}
              </div>
              <Apply />
              <div className="mb-[86px]" />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={5}
              variants={textAnimation}
              viewport={{ once: true }}
            >
              <h2 className="mb-[15px] pb-[9px] border-b-[1px] border-[#3A4562] border-opacity-[0.13] font-bold text-[28px] text-[#3A4562]">
                Attached images
              </h2>
              <div className="flex  overflow-hidden">
                {currentItem?.pictures?.map((picture: string) => (
                  <ul key={nanoid()}>
                    <img
                      src={picture}
                      alt={"img"}
                      className="w-[200px] h-[133px] rounded-lg mr-4 md:w-[140px] md:h-[100px] md:overflow-hidden md:mr-[20px]"
                    ></img>
                  </ul>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <h2 className="hidden mb-[21px] pb-[9px] border-b-[1px] border-[#3A4562] border-opacity-[0.13] font-bold text-[28px] text-[#3A4562] w-full md:block">
          Contacts
        </h2>
        <footer className="w-[400px] h-fit text-[#fff]  bg-[#3a3f55] rounded-[8px] mr-[20px] lg:w-[260px] sm:mb-[40px]">
          <div className=" relative overflow-hidden flex flex-col gap-[8px] rounded-[8px]  px-[62px] pt-[31px] pb-[20px]">
            <h3 className="text-[#E7EAF0] font-bold text-[20px] tracking-[-0.625px] md:text-[16px]">
              {currentItem?.name}
            </h3>
            <p className="not-italic flex text-[18px]  tracking-[-0.5625px] md:text-[16px]">
              <img src={locationicon} className={"pr-[4px]"} />
              {currentItem?.address}
            </p>
            <a
              className="text-[18px] tracking-[-0.5625px] text-[#E8EBF3] md:text-[16px]"
              href={`mailto:${currentItem?.email}`}
            >
              {currentItem?.email}
            </a>
            <a className="text-[18px] tracking-[-0.5625px] text-[#E8EBF3] md:font-proxima md:text-[16px]">
              {currentItem?.phone}
            </a>
          </div>
          <div className="w-[400px] lg:w-[260px]">
            <img
              src={`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${currentItem?.location.long},${currentItem?.location.lat}&zoom=13.8823&apiKey=58c3021a685b43c6a3f17213e1ecbe14`}
              alt="lon/lat coordinates img"
            ></img>
          </div>
        </footer>
      </div>
      <Link to={"/Test_Task"}>
        <motion.button
          className="flex text-[#3A4562] gap-[19px] w-fit  uppercase mt-[69px] px-[26px] py-[18px] bg-[#384564] bg-opacity-[0.14] rounded-[8px] text-[12px] hover:bg-[#b0c5e3] hover:text-[##3A4562] md:hidden"
          initial="hidden"
          whileInView="visible"
          custom={6}
          variants={textAnimation}
          viewport={{ once: true }}
        >
          <img src={left} />
          <span className="font-bold">RETURN TO JOB BOARD</span>
        </motion.button>
      </Link>
    </motion.div>
  );
}
