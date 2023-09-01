import React from 'react';
import Image from "next/image";
import style from "./style.module.css";
import loadingImage from "@/public/loading.gif";

const LoadingComponent = () => {
    return (
        <Image src={loadingImage} alt={"loading"} className={style.loading} priority/>
    );
};

export default LoadingComponent;