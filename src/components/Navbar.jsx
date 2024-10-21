const Navbar = () => {
    return (
        <nav className="w-full bg-lightNav dark:bg-gray-600 flex justify-between items-center px-2 md:px-6 py-3 md:py-3">
            {/* logo */}
            <h2 className="text-logoColor text-2xl font-semibold">1Dex</h2>
            {/* wallet balances */}
            <div className="flex gap-2 md:gap-4 items-center">
                {/* wallet balance 1*/}
                <span className="hidden md:flex gap-1 items-center">
                    <img className="w-4 h-4" loading="lazy" src="token-image.png" alt="token-image" />
                    <p className="text-lightPurple text-sm">${"0.000"}</p>
                </span>
                {/* wallet balance 2*/}
                <span className="flex gap-1 items-center bg-gray-200/90 px-3 py-2 md:py-1 rounded-full">
                    <img className="w-4 h-4" loading="lazy" src="logo.png" alt="token-image" />
                    <p className="text-lightPurple text-sm font-semibold">${"0.00"}</p>
                </span>
                {/* wallet balance 3*/}
                <span className="flex gap-1 items-center bg-gray-200/90 px-3 py-2 md:py-1 rounded-full">
                    <img className="w-4 h-4" loading="lazy" src="usdt.png" alt="token-image" />
                    <p className="text-lightPurple text-sm font-semibold">${"0.00"}</p>
                </span>
                {/* connect wallet button */}
                <button className="bg-buttonColor hover:bg-white text-sm text-white hover:text-buttonColor border-2 border-white hover:border-buttonColor active:bg-buttonColor active:text-white px-3 md:px-6 py-2 md:py-1 rounded-full transition-all duration-200">
                    Connect Wallet
                </button>
            </div>
        </nav>
    );
};

export default Navbar;