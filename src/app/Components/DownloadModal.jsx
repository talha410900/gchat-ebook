"use client"
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Close from '../../../Icons/Close'
import Download from '../../../Icons/Download'
import GdprModal from './GdprModal'
import UserCheck from '../../../Icons/UserCheck'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';

export default function DownloadModal({ isOpen, closeModal }) {

    const [open, setOpen] = React.useState(false)

    function closeGdpr() {
        setOpen(false)
    }

    function openGdpr() {
        setOpen(true)
    }


    const [steps, setSteps] = React.useState(1);

    function handelSteps() {
        if (steps === 1) {
            setSteps(prev => prev + 1);
        }
        else if (steps === 2) {
            setSteps(prev => prev + 1);
        }
        else if (steps === 3) {
            closeModal();
        }
    }
    function stepBack() {
        setSteps(curent => curent - 1)
    }


    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const input1Ref = useRef();
    const input2Ref = useRef();
    const input3Ref = useRef();
    const input4Ref = useRef();

    const handleChange = (value, setter, nextInputRef) => {
        setter(value);
        if (value.length === 1 && nextInputRef) {
            nextInputRef.current.focus();
        }
    };



    const verifyOTP = () => {
        // Combine input values and verify OTP
        const otp = input1 + input2 + input3 + input4;
        console.log('Verifying OTP:', otp);
        // Add your OTP verification logic here
    };

    const handleBackspace = (event, prevInputRef, setter) => {
        if (event.key === 'Backspace' && event.target.value === '') {
            setter('');
            prevInputRef.current.focus();
        }
    };
    return (
        <>


            <Transition appear show={isOpen} >
                <Dialog as="div" className="relative z-10" onClose={() => { }}>
                    <Transition.Child

                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className=" flex min-h-full items-center justify-center text-center mx-8 ">
                            <Transition.Child
                                className=' w-full sm:w-auto '
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >


                                {steps === 1 ?
                                    <>
                                        <Dialog.Panel className="w-full  md:max-w-[500px] lg:max-w-[624px] transform overflow-hidden rounded-2xl bg-white px-4 pb-6 pt-2 lg:p-8 text-left align-middle shadow-xl transition-all text-grey-100 relative ">
                                            <div className='absolute right-2 lg:right-3 top-2 lg:top-4' >
                                                <Close onClick={closeModal} />
                                            </div>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-3xl  lg:text-[42px] font-semibold leading-[46px] mt-2"
                                            >
                                                Stiahnuť E-Book
                                            </Dialog.Title>

                                            <div className="md:my-3">
                                                <p className="text-[12px] md:text-sm lg:text-base">
                                                    Pre stiahnutie E-Booku <span className='underline font-semibold'>ZDARMA</span>,<span className='font-semibold'>vyplňte nesledujúce údaje:</span>
                                                </p>
                                            </div>
                                            <div >
                                                <div className='flex gap-2 border border-x-0 border-t-0 border-b-grey-200 items-center mt-2.5 h-[52px] w-full'>
                                                    <input type='email' required placeholder='Napíšte Vaše celé meno *' className='text-[14px] md:text-xs lg:text-base border-none outline-none placeholder:text-grey-200 placeholder:text-md w-full' />
                                                </div>
                                                <p className='text-end text-[10px] md:text-xs font-semibold'>Váš email bude overovaný</p>
                                            </div>

                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-grey-200 items-center mt-4 h-[52px] w-full'>
                                                <input type='email' required placeholder='Napíšte Váš E-Mail *' className='text-[14px] md:text-xs lg:text-base border-none outline-none placeholder:text-grey-200 placeholder:text-md w-full' />
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-grey-200 items-center mt-4 h-[52px] w-full'>
                                                <input type='number' required placeholder='Napíšte Vaše telefónne číslo *' className='text-[14px] md:text-xs lg:text-base border-none outline-none placeholder:text-grey-200 placeholder:text-md w-full' />
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-grey-200 items-center mt-4 h-[52px] w-full'>
                                                <input type='email' required placeholder='Napíšte názov Vašej web stránky www. *' className='text-[14px] md:text-xs lg:text-base border-none outline-none placeholder:text-grey-200 placeholder:text-md w-full' />
                                            </div>
                                            <div className='flex items-center gap-3 mt-2.5 md:mt-4'>
                                                <input id='ochranu' type='checkbox' />
                                                <label htmlFor='ochranu' className='text-[12px] md:text-xs lg:text-sm text-grey-400'> Potvrdzujem <span className='underline cursor-pointer' onClick={openGdpr} >ochranu osobných údajov</span></label>
                                                {open && <GdprModal open={open} closeGdpr={closeGdpr} />}
                                            </div>
                                            <div className='mt-6'>
                                                <p className='text-[12px] md:text-xs lg:text-sm  leading-4 md:leading-5 font-semibold '><span className='underline '>Stiahnutím E-Booku automaticky získavate konzultáciu ohľadne AI</span> pre vašu firemnú web stránku, alebo E-Shop od nášho odborníka na umelú inteligenciu.</p>
                                            </div>
                                            <button
                                                onClick={handelSteps}
                                                className='text-white font-semibold rounded-md text-md md:text-xs lg:text-lg flex justify-center items-center gap-2 mt-3 lg:mt-4 bg-green button-shadow px-4 md:px-7 py-3.5 w-full'>
                                                Stiahnuť E-Book teraz <Download />
                                            </button>
                                        </Dialog.Panel>
                                    </>
                                    :
                                    steps === 2 ?
                                        <>
                                            <Dialog.Panel className="w-full  md:max-w-[500px] lg:max-w-[624px] transform overflow-hidden rounded-2xl bg-white px-4 pb-5 pt-2 lg:p-8 text-center align-middle shadow-xl transition-all text-grey-100 relative">
                                                <div className='absolute right-2 lg:right-3 top-1 lg:top-4' >
                                                    <Close onClick={stepBack} />
                                                </div>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-2xl md:text-3xl lg:text-[42px] font-semibold leading-[46px] mt-3"
                                                >
                                                    Verifikácia E-Mailu
                                                </Dialog.Title>
                                                <p className='lg:mt-3 lg:pb-4 text-[10px] md:text-sm lg:text-base'> Na Váš zadaný E-Mail <span className='underline'> bol poslaný 4 číselný verifikačný kód.</span></p>

                                                <div className='mt-4 md:mt-5 flex flex-row justify-center items-center gap-2 lg:gap-3 px-8 md:px-0 '>
                                                    <div className=''>
                                                        <input
                                                            value={input1}
                                                            ref={input1Ref}
                                                            onChange={(e) => handleChange(e.target.value, setInput1, input2Ref)}
                                                            maxLength={1}
                                                            onKeyDown={(e) => handleBackspace(e, input1Ref, setInput1)}
                                                            className=' outline-none  bg-grey-600 w-10 lg:w-[54px] h-[42px] lg:h-[57px] border-2 border-grey-700 shadow-inner rounded-lg   text-2xl font-bold text-center ' />
                                                    </div>
                                                    <div className=' '>
                                                        <input
                                                            ref={input2Ref}
                                                            value={input2}
                                                            onChange={(e) => handleChange(e.target.value, setInput2, input3Ref)}
                                                            maxLength={1}
                                                            onKeyDown={(e) => handleBackspace(e, input1Ref, setInput2)}
                                                            className=' outline-none  bg-grey-600 w-10 border-2 border-grey-700 shadow-inner rounded-lg lg:w-[54px] h-[42px] lg:h-[57px]  text-2xl font-bold text-center ' />
                                                    </div>
                                                    <div className=' '>
                                                        <input
                                                            ref={input3Ref}
                                                            value={input3}
                                                            onChange={(e) => handleChange(e.target.value, setInput3, input4Ref)}
                                                            onKeyDown={(e) => handleBackspace(e, input2Ref, setInput3)}

                                                            maxLength={1}
                                                            className=' outline-none  bg-grey-600 w-10 border-2 border-grey-700 shadow-inner rounded-lg lg:w-[54px] h-[42px] lg:h-[57px]  text-2xl font-bold text-center ' />
                                                    </div>
                                                    <div className=' '>
                                                        <input
                                                            ref={input4Ref}
                                                            value={input4}
                                                            onChange={(e) => handleChange(e.target.value, setInput4)}
                                                            maxLength={1}
                                                            onKeyDown={(e) => handleBackspace(e, input3Ref, setInput4)}

                                                            onKeyUp={() => input4.length === 1 && verifyOTP()}
                                                            className=' outline-none  bg-grey-600 w-10 border-2 border-grey-700 shadow-inner rounded-lg lg:w-[54px] h-[42px] lg:h-[57px]  text-2xl font-bold text-center ' />
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={handelSteps}
                                                    className='text-white rounded-md text-lg lg:text-lg flex justify-center font-semibold items-center gap-2 mt-2 lg:mt-4 bg-green button-shadow px-7 py-3.5 w-full'>
                                                    Overiť <UserCheck />
                                                </button>
                                                <button className='mt-4 lg:mt-7 w-full text-md md:text-sm lg:text-base'>
                                                    Zaslať kód ešte raz
                                                </button>
                                            </Dialog.Panel>
                                        </>
                                        :
                                        <>
                                            <Dialog.Panel className="w-full  md:max-w-[500px] lg:max-w-[624px] transform overflow-hidden rounded-2xl bg-white px-4 pb-5 pt-2 lg:p-8  align-middle shadow-xl transition-all text-grey-100 relative text-center">
                                                {/* <div className='absolute right-2 lg:right-3 top-1 lg:top-4' >
                                                    <Close onClick={closeModal} />
                                                </div> */}
                                                <div  >
                                                    <Image src='/images/ebook.png' width={159} height={181} className='mx-auto w-[120px] lg:w-[159px] h-[136px] lg:h-[181px]' />
                                                </div>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-2xl md:text-3xl lg:text-[42px] font-semibold leading-7 lg:leading-[46px] "
                                                >
                                                    E-Book bol poslaný
                                                    <br />
                                                    na Váš email
                                                </Dialog.Title>
                                                <p className='mt-4  text-[12px] md:text-sm lg:text-base'>Spolu s E-Bookum <span className='font-semibold'>ste získali ZDARMA 30 min konzultáciu s našim odborníkon na umelú inteligenciu.</span> Náš AI odborník Vás bude čoskoro kontaktovať.</p>

                                                <a
                                                    href='https://gchat.sk/'
                                                    target='_blank'
                                                    className='text-white font-semibold rounded-md text-md lg:text-lg flex justify-center items-center gap-2 mt-4 lg:mt-6 bg-green button-shadow px-7 py-3.5 w-full'>
                                                    G CHAT - AI pre web stránky
                                                </a>
                                                <p className='mt-2.5 lg:mt-5 flex items-start text-[12px] md:text-sm lg:text-sm'>
                                                    Naprogramovala spoločnosť <a target='_blank' href='https://www.wavenet.sk' className='ml-1 font-semibold'> WaveNet</a>
                                                </p>
                                            </Dialog.Panel>
                                        </>
                                }
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
