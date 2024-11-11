export default function Requirements() {
    return (
        <>
            <div className="my-8 p-4 sm:p-8 md:p-16">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Requirements to become a pilot</h1>
                    <p className="text-center w-full sm:w-[80%] md:w-[70%] mx-auto mt-4 sm:mt-6 md:mt-8">
                        With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
                    </p>
                    <button className="bg-[#3F3D56] text-white border border-white 
                                      px-4 md:px-6 py-2 md:py-2.5 rounded 
                                      hover:bg-black transition duration-300 
                                      text-sm md:text-base mt-4 sm:mt-6 md:mt-8">
                        Learn More
                    </button>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-8 md:gap-20 my-8 md:my-12">
                    <div className="rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left">
                        <h2 className="text-lg sm:text-xl font-bold my-4">Minimum age requirement</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>

                    <div className="rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left">
                        <h2 className="text-lg sm:text-xl font-bold my-4">English Proficiency</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>

                    <div className="rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left">
                        <h2 className="text-lg sm:text-xl font-bold my-4">10+2 Physics/Maths</h2>
                        <p className="font-thin">Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
