import { StepConnector } from "@material-ui/core";
import { X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { getAllAuctions } from "../apiCalls/auction/getAllAuctions";
import { getAuctionsUserWon } from "../apiCalls/auction/getAuctionsUserWon";
import { UserDataContext } from "../providers/UserDataProvider"
import { Card } from "./Card";


export const ProfileCard = () => {
    const userInfo = useContext(UserDataContext);
    const [AuctionsUserWon,setAuctionsUserWon] = useState([{}]);

    useEffect(() => {
        getAuctionsUserWon().then(response =>{
            if(response.success){
                setAuctionsUserWon(response.data);
            }else{
                setAuctionsUserWon([{"erro": "erro"}]);
            }
        }
        )
    },[])

    return (
        <div className="flex ml-20 p-2 py-4 items-center justify-center justify-items-center w-[280px] md:w-[330px] bg-white dark:bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl shadow-2xl m-2 md:ml-20">
            <div className="flex flex-col items-center justify-center justify-items-center md:w-40 mr-4">
                <div className="flex items-center justify-center justify-items-center m-2">
                    <div className="flex relative z-20 rounded-full border-6 border-white bg-white w-20 h-20 md:w-24 md:h-24 items-center justify-center justify-items-center" >
                        <h2 className="font-body font-bold text-desaturatedBlue text-6xl">{userInfo.userLogged[0].toUpperCase()}</h2>
                    </div>
                </div>
                <h3 className="w-28 font-body font-bold text-desaturatedBlue text-lg dark:text-white text-center overflow-scroll ">
                    {userInfo.userLogged}
                </h3>
            </div>
            <div className="h-full w-1 bg-black dark:bg-white"></div>
            <div className="flex justify-around m-2 py-2 px-2">
                <div className="flex flex-col items-center">
                    <h5 className="font-body font-bold text-desaturatedBlue text-lg dark:text-white">{AuctionsUserWon.length}</h5>
                    <p className="font-body text-darkGray text-xs tracking-widest mt-1 dark:text-white">Arremate(s)</p>
                </div>
            </div>
        </div>
    );
};


