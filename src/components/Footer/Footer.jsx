
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-lightblue " >
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between" >
                        <div className=" flex flex-col items-start">
                            <Logo width="200px" />
                            <p className="text-sm text-purple-100">
                                &copy; Copyright 2025.
                                <p>All Rights Reserved by ThoughtLoom.</p>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="text-left tracking-px mb-9 font-semibold uppercase text-sm text-gray-100">
                                Company
                            </h3>
                            <ul className=" text-left">
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                    Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className=" text-left tracking-px mb-9  font-semibold uppercase text-sm text-gray-100">
                                Support
                            </h3>
                            <ul className='text-left'>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="text-left tracking-px mb-9  font-semibold uppercase text-sm text-gray-100">
                                Legals
                            </h3>
                            <ul className='text-left'>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer