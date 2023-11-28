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

export default function DownloadModal({ isOpen, closeModal }) {

    const [open, setOpen] = React.useState(false)

    function closeGdpr() {
        setOpen(false)
    }

    function openGdpr() {
        setOpen(true)
    }


    const [steps, setSteps] = React.useState(1)
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
    return (
        <>


            <Transition appear show={isOpen} >
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                        <div className=" flex min-h-full items-center justify-center text-center">
                            <Transition.Child

                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >


                                {steps === 1 ?
                                    <>
                                        <Dialog.Panel className="w-full h-[442px] lg:h-[606px] max-w-[267px] md:max-w-[500px] lg:max-w-[624px] transform overflow-hidden rounded-2xl bg-white px-4 pb-5 pt-2 lg:p-8 text-left align-middle shadow-xl transition-all text-grey-100 relative">
                                            <div className='absolute right-2 lg:right-3 top-1 lg:top-4' >
                                                <Close onClick={closeModal} />
                                            </div>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-2xl md:text-3xl lg:text-[42px] font-semibold leading-[46px] lg:mt-4"
                                            >
                                                Stiahnuť E-Book
                                            </Dialog.Title>

                                            <div className="md:my-3">
                                                <p className="text-[8px] md:text-sm lg:text-base">
                                                    Pre stiahnutie E-Booku <span className='underline font-semibold'>ZDARMA</span> ,<span className='font-semibold'>vyplňte nesledujúce údaje:</span>
                                                </p>
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-grey-200 items-center mt-2.5 h-8 lg:h-[52px] w-full'>
                                                <input type='email' required placeholder='Napíšte Vaše celé meno *' className='text-[10px] md:text-xs lg:text-base border-none outline-none placeholder:text-grey-200 w-full' />
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-grey-200 items-center mt-4 h-8 lg:h-[52px] w-full'>
                                                <input type='email' required placeholder='Napíšte Váš E-Mail *' className='text-[10px] md:text-xs lg:text-base border-none outline-none placeholder:text-grey-200 w-full' />
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-grey-200 items-center mt-4 h-8 lg:h-[52px] w-full'>
                                                <input type='number' required placeholder='Napíšte Vaše telefónne číslo *' className='text-[10px] md:text-xs lg:text-base border-none outline-none placeholder:text-grey-200 w-full' />
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-grey-200 items-center mt-4 h-8 lg:h-[52px] w-full'>
                                                <input type='email' required placeholder='Napíšte názov Vašej web stránky www. *' className='text-[10px] md:text-xs lg:text-base border-none outline-none placeholder:text-grey-200 w-full' />
                                            </div>
                                            <div className='flex items-center gap-3 mt-2.5 md:mt-4'>
                                                <input id='ochranu' type='checkbox' />
                                                <label htmlFor='ochranu' className='text-[9px] md:text-xs lg:text-sm text-grey-400'> Potvrdzujem <span className='underline cursor-pointer' onClick={openGdpr} >ochranu osobných údajov</span></label>
                                                {open && <GdprModal open={open} closeGdpr={closeGdpr} />}
                                            </div>
                                            <div className='mt-6'>
                                                <p className='text-[8px] md:text-xs lg:text-sm  leading-3 md:leading-5 font-semibold'><span className='underline '>Stiahnutím E-Booku automaticky získavate konzultáciu ohľadne AI</span> pre vašu firemnú web stránku, alebo E-Shop od nášho odborníka na umelú inteligenciu.</p>
                                            </div>
                                            <button
                                                onClick={handelSteps}
                                                className='text-white font-semibold rounded-md text-sm md:text-xs lg:text-lg flex justify-center items-center gap-2 mt-3 lg:mt-4 bg-green button-shadow px-4 md:px-7 py-3.5 w-full'>
                                                Stiahnuť E-Book teraz <Download />
                                            </button>
                                        </Dialog.Panel>
                                    </>
                                    :
                                    steps === 2 ?
                                        <>
                                            <Dialog.Panel className="w-full h-[226px] lg:h-[369px] max-w-[267px] md:max-w-[500px] lg:max-w-[624px] transform overflow-hidden rounded-2xl bg-white px-4 pb-3.5 pt-2.5 lg:p-8 text-center align-middle shadow-xl transition-all text-grey-100 relative">
                                                <div className='absolute right-2 lg:right-3 top-1 lg:top-4' >
                                                    <Close onClick={stepBack} />
                                                </div>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-2xl md:text-3xl lg:text-[42px] font-semibold leading-[46px] mt-3"
                                                >
                                                    Verifikácia E-Mailu
                                                </Dialog.Title>
                                                <p className='lg:mt-3 lg:pb-4 text-[8px] md:text-sm lg:text-base'> Na Váš zadaný E-Mail <span className='underline'> bol zaslaný 4 číselný verifikačný kód.</span></p>

                                                <div className='mt-4 md:mt-5 flex flex-row justify-center items-center gap-2 lg:gap-3 px-8 md:px-0 '>
                                                    <div className=''>
                                                        <input className='border-none outline-none  bg-grey-600 w-10 lg:w-[54px] h-[42px] lg:h-[57px] border-2 border-grey-700 shadow-inner rounded-lg ' />
                                                    </div>
                                                    <div className=' '>
                                                        <input className='border-none outline-none  bg-grey-600 w-10 border-2 border-grey-700 shadow-inner rounded-lg lg:w-[54px] h-[42px] lg:h-[57px]' />
                                                    </div>
                                                    <div className=' '>
                                                        <input className='border-none outline-none  bg-grey-600 w-10 border-2 border-grey-700 shadow-inner rounded-lg lg:w-[54px] h-[42px] lg:h-[57px]' />
                                                    </div>
                                                    <div className=' '>
                                                        <input className='border-none outline-none  bg-grey-600 w-10 border-2 border-grey-700 shadow-inner rounded-lg lg:w-[54px] h-[42px] lg:h-[57px]' />
                                                    </div>
                                                </div>


                                                <button
                                                    onClick={handelSteps}
                                                    className='text-white rounded-md text-sm lg:text-lg flex justify-center font-semibold items-center gap-2 mt-2 lg:mt-4 bg-green button-shadow px-7 py-3.5 w-full'>
                                                    Overiť <UserCheck />
                                                </button>
                                                <button className='my-4 lg:mt-7 w-full text-[9px] md:text-sm lg:text-base'>
                                                    Zaslať kód ešte raz
                                                </button>
                                            </Dialog.Panel>
                                        </>
                                        :
                                        <>
                                            <Dialog.Panel className="w-full h-[368px] md:h-[400px] lg:h-[515px] max-w-[267px] md:max-w-[500px] lg:max-w-[624px] transform overflow-hidden rounded-2xl bg-white px-4 pb-3.5 pt-2.5 lg:px-8 text-center align-middle shadow-xl transition-all text-grey-100 relative">
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
                                                <p className='mt-4  text-[10px] md:text-sm lg:text-base'>Spolu s E-Bookum <span className='font-semibold'>ste získali ZDARMA 30 min konzultáciu s našim odborníkon na umelú inteligenciu.</span> Náš AI odborník Vás bude čoskoro kontaktovať.</p>

                                                <button
                                                    onClick={closeModal}
                                                    className='text-white font-semibold rounded-md text-[11px] md:text-sm lg:text-lg flex justify-center items-center gap-2 mt-4 lg:mt-6 bg-green button-shadow px-7 py-3.5 w-full'>
                                                    G CHAT - AI pre web stránky
                                                </button>
                                                <p className='mt-2.5 lg:mt-5 flex items-start text-[8px] md:text-sm lg:text-sm'>
                                                    Naprogramovala spoločnosť <Link href='https://www.wavenet.sk' className='ml-1 font-semibold'> WaveNet</Link>
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
