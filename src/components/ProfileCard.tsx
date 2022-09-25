export const ProfileCard = () => {
    return (
        <div className="flex flex-col items-center w-96 bg-white dark:bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-hidden"><div className="relative w-full">
            
        <div className="pb-40%">
        </div>
            <img alt="Card Header" src="https://c4.wallpaperflare.com/wallpaper/990/945/300/abstract-geometry-wallpaper-preview.jpg" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
            <div className="flex flex-col items-center mt-4">
                <img alt="Victor" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bc9fdfb4-3154-4638-aaa0-19a3ea7d4865-profile_image-300x300.png" className="relative z-20 rounded-full border-6 border-white w-40 h-40" />
                <div className="flex mt-5">
                    <h3 className="font-body font-bold text-desaturatedBlue text-lg dark:text-white">
                        Victor Crest
                    </h3>
                    <h4 className="font-body text-grayishBlue text-lg ml-3 dark:text-white">
                        26
                    </h4>
                </div>
                <h5 className="font-body text-grayishBlue mt-2 dark:text-white">
                    Brasil, Rio de Janeiro - RJ
                </h5>
            </div>
            <hr className="w-full mt-6" />
            <div className="flex justify-around w-full py-6 px-6">
                <div className="flex w-20 flex-col items-center">
                    <h5 className="font-body font-bold text-desaturatedBlue text-lg dark:text-white">12</h5>
                    <p className="font-body text-darkGray text-xs tracking-widest mt-1 dark:text-white">Arremates</p>
                </div>
                <div className="flex w-20 flex-col items-center">
                    <h5 className="font-body font-bold text-desaturatedBlue text-lg dark:text-white">13</h5>
                    <p className="font-body text-darkGray text-xs tracking-widest mt-1 dark:text-white">Likes</p>
                </div><div className="flex w-20 flex-col items-center">
                    <h5 className="font-body font-bold text-desaturatedBlue text-lg dark:text-white">250</h5>
                    <p className="font-body text-darkGray text-xs tracking-widest mt-1 dark:text-white">Lances</p>
                </div>
            </div>
        </div>
    );
};


