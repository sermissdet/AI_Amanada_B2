import React from 'react'
import Avatar from "../images/charlitron-logo.avif"


const Messages = () => {
    return (
        <div className="flex-grow h-[90%] flex-col">
            <div className="w-full h-15 p-1 bg-purple-600 dark:bg-gray-800 shadow-md rounded-xl rounded-bl-none rounded-br-none">
                <div className="flex p-2 align-middle items-center">
                    <div className="p-2 md:hidden rounded-full mr-1 hover:bg-purple-500 text-white">
                        <img
                            src={Avatar}
                            className="w-36"
                            alt="Dark Logo"
                        />
                    </div>
                    <div className="border rounded-full border-white p-1/2">
                        <img
                            src={Avatar}
                            className="w-14"
                            alt="Dark Logo"
                        />
                    </div>
                    <div className="flex-grow p-2">
                        <div className="text-md text-gray-50 font-semibold">Charlitron AI assistant </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                            <div className="text-xs text-gray-50 ml-1">
                                Online
                            </div>
                        </div>
                    </div>
                    <div className="p-2 text-white cursor-pointer hover:bg-gray-700 rounded-full">
                        <strong className="text-xl align-center cursor-pointer alert-del"
                        >&times;</strong
                        >
                    </div>
                </div>
            </div>
            <div className="w-full flex-grow bg-gray-100 dark:bg-gray-900 my-2 p-2 overflow-y-auto">
                <div className="flex items-end w-3/4" >

                </div>
                <div className="flex items-end w-3/4">
                    <img
                        src={Avatar}
                        className="w-10"
                        alt="Dark Logo"
                    />                    <div className="p-3 bg-purple-300 dark:bg-gray-800  mx-3 my-1 rounded-2xl rounded-bl-none sm:w-3/4 md:w-3/6">
                        <div className="text-xs text-gray-100 hidden dark:text-gray-200">
                            Rey Jhon A. Baqurin
                        </div>
                        <div className="text-gray-700 dark:text-gray-200">
                            gsegjsghjbdg bfb sbjbfsj fsksnf jsnfj snf nnfnsnfsnj
                        </div>
                        <div className="text-xs text-gray-400">
                            1 day ago
                        </div>
                </div>
                </div>

                <div className="flex justify-end">
                    <div className="flex items-end w-auto bg-purple-500 dark:bg-gray-800 m-1 rounded-xl rounded-br-none sm:w-3/4 md:w-auto">
                        <div className="p-2">
                            <div className="text-gray-200">
                                Hello ? How Can i help you ?
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex items-end w-3/4 bg-purple-500 dark:bg-gray-800 m-1 rounded-xl rounded-br-none sm:w-3/4 md:w-auto">
                        <div className="p-2">
                            <div className="text-gray-200">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex items-end w-3/4 bg-purple-500 dark:bg-gray-800 m-1 rounded-xl rounded-br-none sm:w-3/4 max-w-xl md:w-auto">
                        <div className="p-2">
                            <div className="text-gray-200 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-end w-3/4">
                <img
                        src={Avatar}
                        className="w-10"
                        alt="Dark Logo"
                    />                     <div className="p-3 bg-purple-300 dark:bg-gray-800 mx-3 my-1 rounded-2xl rounded-bl-none sm:w-3/4 md:w-3/6">
                        <div className="text-xs text-gray-100 hidden dark:text-gray-200">
                            Rey Jhon A. Baqurin
                        </div>
                        <div className="text-gray-700 dark:text-gray-200">
                            Hello po ang pogi niyo
                        </div>
                        <div className="text-xs text-gray-400">
                            just now
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-15  p-3 rounded-xl rounded-tr-none rounded-tl-none bg-gray-100 dark:bg-gray-800">
                <div className="flex items-center">
                    <div className="p-2 text-gray-600 dark:text-gray-200 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="search-chat flex flex-grow p-2">
                        <input className="input text-gray-700 dark:text-gray-200 text-sm p-5 focus:outline-none bg-gray-100 dark:bg-gray-800  flex-grow rounded-l-md" type="text" placeholder="Type your message ..." />
                        <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200  flex justify-center items-center pr-3 text-gray-400 rounded-r-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
