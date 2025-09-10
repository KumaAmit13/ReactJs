import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="relative  z-15 overflow-hidden py-10  bg-gray-950 border border-t-2 border-t-black">
            <div className="relative z-15 mx-auto  max-w-7xl px-4 ">
                <div className="-m-6 flex flex-wrap ">
                    <div className="w-full p-6 md:w-1/3  lg:flex ">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-0 inline-flex items-center justify-center hover:cursor-pointer">
                                <Logo width="100px" />
                            </div>
                            {/* <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div> */}
                        </div>
                    </div>
                    <div className="w-1/3 p-6 md:w-1/2  lg:w-2/12 flex flex-wrap h-full">
                        
                            <h3 className="tracking-px mb-9  font-semibold uppercase text-2xl  text-white">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-bold  text-white hover:text-gray-700"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                    </div>
                    <div className="w-1/3 p-6 md:w-1/2 lg:w-2/12 h-full">

                        <h3 className="tracking-px mb-9  text-2xl  text-white font-semibold uppercase ">
                            Support
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link
                                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/dashboard"
                                >
                                    Account
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/help"
                                >
                                    Help
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/help"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/help"
                                >
                                    Customer Support
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="w-1/3 p-6 md:w-1/2 lg:w-3/12 h-full">

                        <h3 className="tracking-px mb-9   font-semibold uppercase text-2xl  text-white">
                            Legals
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link
                                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/policy"
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/policy"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/policy"
                                >
                                    Licensing
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer