import React from 'react';

const StatsSection = () => {
    return (
        <section className="bg-dark py-10 px-4 flex flex-col md:flex-row justify-around items-center">
            <div className="text-center mx-4 mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600">10+</h2>
                <p className="text-base md:text-lg text-white-600 mt-2">YEARS OF EXPERIENCE</p>
            </div>
            <div className="text-center mx-4 mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600">250+</h2>
                <p className="text-base md:text-lg text-white-600 mt-2">PROJECTS COMPLETED</p>
            </div>
            <div className="text-center mx-4 mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600">500+</h2>
                <p className="text-base md:text-lg text-white-600 mt-2">CERTIFIED EXPERTS</p>
            </div>
        </section>
    );
};

export default StatsSection;

