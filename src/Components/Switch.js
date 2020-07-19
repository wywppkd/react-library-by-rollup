// 组件库的工程内不要安装react, 组件库的react要和项目的react用同一个, 否则使用hooks会报错
import React, { useState } from "react";
import { css } from "@emotion/core";
import { motion } from "framer-motion";

const Switch = () => {
  const [state, setState] = useState(false);

  const handleOnTap = () => {
    setState(!state);
  };

  return (
    <motion.div
      className="container"
      css={css`
        width: 100px;
        height: 50px;
        background: whitesmoke;
        border-radius: 50px;
        postion: relative;
      `}
      onTap={handleOnTap}
    >
      <motion.div
        css={css`
          width: 50px;
          height: 50px;
          background: royalblue;
          border-radius: 50%;
          postion: absolute;
          left: ${state ? "unset" : 0};
          right: ${state ? 0 : "unset"};
        `}
        positionTransition
      ></motion.div>
    </motion.div>
  );
};

export default Switch;
