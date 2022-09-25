export const TermsCard = () => {
    return (
        <>
        <div className="flex flex-col items-center w-96 h-96 bg-white dark:bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-scroll ">
            
                <h1 className="font-body font-bold text-2xl text-grayishBlue mt-5 dark:text-white">
                    Termos & Condições
                </h1>
                <h2 className="font-body text-grayishBlue mt-5 dark:text-white">Bem vindo a Plataforma de leilões!</h2>
                <p className="font-body text-grayishBlue my-3 mx-6 text-xs text-justify dark:text-white">
                    Ao utilizar a plataforma de leilões, você concorda com os termos e condições de uso.
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </p>

                <h1 className="font-body font-bold text-xl text-grayishBlue mt-5 dark:text-white">
                        Cookies
                </h1>
                <p className="font-body text-grayishBlue my-3 mx-6 text-xs text-justify dark:text-white">
                    We employ the use of cookies. By accessing Plataforma de leilões, you agreed to use cookies in agreement with the Plataforma de leilões's Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </p>

                <h1 className="font-body font-bold text-xl text-grayishBlue mt-5 dark:text-white">
                        License
                </h1>
                <p className="font-body text-grayishBlue my-3 mx-6 text-xs text-justify dark:text-white">
                    Unless otherwise stated, Plataforma de leilões and/or its licensors own the intellectual property rights for all material on Plataforma de leilões. All intellectual property rights are reserved. You may access this from Plataforma de leilões for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
        </div>

        <div className="mt-2 flex items-center justify-center w-96 h-20 bg-white dark:bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl shadow-2xl  ">
            <input className="m-3 h-5 w-5" type="checkbox" checked disabled/>
            <label className="dark:text-white">Eu aceito os termos acima</label>
        </div>
        </>
    );
};


