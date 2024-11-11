export default function Footer()
{
    return<>
    <div className="p-12">
    <footer className="bg-white text-gray-800 py-8 border-2 border-r-8 border-b-8 border-black rounded-lg border-gray-300">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-12">

        <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2">

                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                        <path d="M12 0l11.196 6.5v11l-11.196 6.5-11.196-6.5v-11z"/>
                    </svg>
                </div>
                <h1 className="text-lg font-semibold">Little Learners</h1>
            </div>
            <p className="mt-3 text-gray-600 max-w-xs">
                We believe in the power of play to foster creativity, problem-solving skills, and imagination.
            </p>

            <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center border border-gray-800 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 text-gray-800" viewBox="0 0 24 24">
                            <path d="M12 12c2.667 0 8-1.333 8-4v-2l-8-5-8 5v2c0 2.667 5.333 4 8 4zm0-10l5.197 3.125-5.197 3.125-5.197-3.125 5.197-3.125zm7 7.917c-1.644 1.125-5.555 2.083-7 2.083s-5.356-.958-7-2.083v.083c0 1.746 2.996 2.889 7 2.889s7-1.143 7-2.889v-.083z"/>
                        </svg>
                    </div>
                    <p>hello@littlelearners.com</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center border border-gray-800 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 text-gray-800" viewBox="0 0 24 24">
                            <path d="M20 15.5c-.469 0-.921-.07-1.358-.207-.366-.116-.768-.056-1.036.216l-2.2 2.2c-3.393-1.3-6.162-4.069-7.461-7.461l2.2-2.2c.272-.272.332-.67.216-1.036-.137-.437-.207-.889-.207-1.358 0-.552-.448-1-1-1h-3c-.552 0-1 .448-1 1 0 6.617 5.383 12 12 12 .552 0 1-.448 1-1v-3c0-.552-.448-1-1-1z"/>
                        </svg>
                    </div>
                    <p>+91 91813 23 2309</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center border border-gray-800 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 text-gray-800" viewBox="0 0 24 24">
                            <path d="M12 2c-3.309 0-6 2.691-6 6 0 3.966 3.134 7.193 7 11.42 3.866-4.227 7-7.454 7-11.42 0-3.309-2.691-6-6-6zm0 8.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z"/>
                        </svg>
                    </div>
                    <p>Somewhere in the World</p>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap gap-8">
            <div className="space-y-2">
                <h3 className="font-semibold">Home</h3>
                <ul className="space-y-1 text-gray-600">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Our Testimonials</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold">About Us</h3>
                <ul className="space-y-1 text-gray-600">
                    <li><a href="#">Our Mission</a></li>
                    <li><a href="#">Our Vision</a></li>
                    <li><a href="#">Awards and Recognitions</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Teachers</a></li>
                </ul>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold">Academics</h3>
                <ul className="space-y-1 text-gray-600">
                    <li><a href="#">Special Features</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold">Contact Us</h3>
                <ul className="space-y-1 text-gray-600">
                    <li><a href="#">Information</a></li>
                    <li><a href="#">Map & Direction</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        <ul className="flex space-x-4 text-gray-600 text-sm mb-4 md:mb-0">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
        </ul>
        <p className="text-gray-500 text-sm">&copy; [2023] Little Learners Academy. All rights reserved.</p>

        <div className="flex space-x-3 mt-4 md:mt-0">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded border border-gray-300 text-gray-800">

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.731 0-1.325.593-1.325 1.324v21.351c0 .73.594 1.325 1.325 1.325h11.494v-9.294h-3.125v-3.622h3.125v-2.672c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.505 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.125c.73 0 1.325-.594 1.325-1.325v-21.351c0-.731-.595-1.324-1.326-1.324z"/>
                </svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded border border-gray-300 text-gray-800">

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.205-4.928 4.927 0 .386.043.762.127 1.124-4.094-.205-7.725-2.165-10.152-5.144-.424.726-.666 1.561-.666 2.457 0 1.695.863 3.192 2.177 4.069-.802-.026-1.556-.246-2.214-.616v.062c0 2.366 1.683 4.342 3.918 4.788-.41.111-.844.171-1.291.171-.316 0-.623-.03-.923-.086.624 1.951 2.432 3.374 4.575 3.415-1.676 1.313-3.791 2.097-6.086 2.097-.395 0-.785-.023-1.17-.068 2.173 1.394 4.757 2.209 7.548 2.209 9.056 0 14.009-7.496 14.009-13.986 0-.213-.005-.426-.015-.637.962-.694 1.797-1.562 2.457-2.549z"/>
                </svg>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded border border-gray-300 text-gray-800">

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22.225 0h-20.451c-.979 0-1.774.795-1.774 1.774v20.451c0 .979.795 1.774 1.774 1.774h20.451c.978 0 1.774-.795 1.774-1.774v-20.451c0-.979-.796-1.774-1.774-1.774zm-13.562 20.452h-3.037v-10.749h3.037v10.749zm-1.518-12.265c-.966 0-1.75-.785-1.75-1.751s.784-1.75 1.75-1.75c.967 0 1.75.784 1.75 1.75s-.783 1.751-1.75 1.751zm13.281 12.265h-3.036v-5.646c0-1.347-.027-3.078-1.877-3.078-1.877 0-2.165 1.464-2.165 2.976v5.748h-3.037v-10.749h2.916v1.469h.042c.406-.768 1.396-1.574 2.873-1.574 3.07 0 3.636 2.018 3.636 4.643v6.211z"/>
                </svg>
            </a>
        </div>
    </div>
</footer>
</div>

    </>
}