import React from 'react';

const Hero = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrxvdWb7vjC96bntX2yk1TagpPmH85HIgEg&s')"
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative container flex flex-col items-center px-4 py-32 mx-auto text-center text-white lg:px-32">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl">
                    Provident blanditiis cum exercitationem
                </h1>

                <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl">
                    Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!
                </p>

                <div className="flex flex-wrap justify-center">
                    <button
                        type="button"
                        className="px-8 py-3 m-2 text-lg font-semibold rounded bg-white text-black"
                    >
                        Get started
                    </button>

                    <button
                        type="button"
                        className="px-8 py-3 m-2 text-lg border rounded border-white text-white"
                    >
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
