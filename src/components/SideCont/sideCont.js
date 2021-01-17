import React, {useState} from "react";
import { motion } from "framer-motion";
import "./sideCont.css"
import Nomination from "../Nomination/nomination"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'

const SideCont = (props) =>{

    const [snackbar, setSnackbar] = useState(false);

    const handleClick = () => {
      setSnackbar(true);
      props.setCookie('nomination', [], {path: '/'})
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbar(false);
    };

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
         }}
         onClick={() => handleClick()}>
        </motion.div>
      } 
      <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" style={{fontWeight:"bold"}}>
          Your nomination list has been submitted. Thank you!
        </MuiAlert>
      </Snackbar>
    </div>
}

export default SideCont;