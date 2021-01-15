import React from "react";
import { motion } from "framer-motion";
import "./sideCont.css"
import Nomination from "../Nomination/nomination"

const SideCont = (props) =>{
    return<div className="sideCont">
      <div className="logo-Shopify"></div>
      <div className="nomination-list">
        <p style={{letterSpacing: "2px", fontWeight: "bold"}}>Current Nominations</p>
        {props.nominationArr.map((nomination, key) => {
          return <Nomination nomination={nomination} key={key} {...props}/>
        })
        }
      </div>
      {props.nominationArr.length >= 5 && 
        <motion.div
          className="icon"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{ease: "easeOut", duration: 0.3 }}
          whileHover={{
            scale: 1.2
         }}>
        </motion.div>
      }
    </div>
}

export default SideCont;