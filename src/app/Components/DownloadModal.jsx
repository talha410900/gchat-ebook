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
// function stepBack(){
//     setSteps(curent => curent -1 )
// }
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
                                        <Dialog.Panel className="w-full h-[606px] max-w-[624px] transform overflow-hidden rounded-2xl bg-white pl-8 pt-1 pr-1.5 pb-8 text-left align-middle shadow-xl transition-all text-gray-100">
                                            <div className='flex justify-end ' >
                                                <Close />
                                            </div>
                                            <Dialog.Title
                                                as="h3"
                                                className="text-[42px] font-semibold leading-[46px] "
                                            >
                                                Stiahnuť E-Book
                                            </Dialog.Title>

                                            <div className="my-3">
                                                <p className="text-base">
                                                    Pre stiahnutie E-Booku <span className='underline font-semibold'>ZDARMA </span> ,<span className='font-semibold'>vyplňte nesledujúce údaje:</span>
                                                </p>
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-gray-300 items-center mt-2.5 h-[52px] w-full'>
                                                <input type='email' required placeholder='Napíšte Vaše celé meno *' className='text-base border-none outline-none' />
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-gray-300 items-center mt-4 h-[52px] w-full'>
                                                <input type='email' required placeholder='Napíšte Váš E-Mail *' className='text-base border-none outline-none' />
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-gray-300 items-center mt-4 h-[52px] w-full'>
                                                <input type='number' required placeholder='Napíšte Vaše telefónne číslo *' className='text-base border-none outline-none' />
                                            </div>
                                            <div className='flex gap-2 border border-x-0 border-t-0 border-b-gray-300 items-center mt-4 h-[52px] w-full'>
                                                <input type='email' required placeholder='Napíšte názov Vašej web stránky www. *' className='text-base border-none outline-none' />
                                            </div>
                                            <div className='flex items-center gap-3 mt-4'>
                                                <input type='checkbox' />
                                                <label className='text-sm text-gray-400'> Potvrdzujem <span className='underline cursor-pointer' onClick={openGdpr}>ochranu osobných údajov</span></label>
                                                {open && <GdprModal open={open} closeGdpr={closeGdpr} />}
                                            </div>
                                            <div className='mt-6'>
                                                <p className='text-sm leading-5 font-semibold'><span className='underline'>Stiahnutím E-Booku automaticky získavate konzultáciu ohľadne AI </span> pre vašu firemnú web stránku, alebo E-Shop od nášho odborníka na umelú inteligenciu.</p>
                                            </div>
                                            <button
                                                onClick={handelSteps}
                                                className='text-white rounded-md text-lg flex justify-center items-center gap-2 mt-4 bg-green button-shadow px-7 py-3.5 w-full'>
                                                Stiahnuť E-Book teraz <Download />
                                            </button>
                                        </Dialog.Panel>
                                    </>
                                    :
                                    steps === 2 ?
                                        <>
                                            <Dialog.Panel className="w-full h-[369px] max-w-[624px] transform overflow-hidden rounded-2xl bg-white p-8 text-center align-middle shadow-xl transition-all text-gray-100 relative">
                                                <div className='absolute right-3 top-4' >
                                                    <Close />
                                                </div>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[42px] font-semibold leading-[46px] "
                                                >
                                                    Verifikácia E-Mailu
                                                </Dialog.Title>
                                                <p className='mt-1.5 pb-4'> Na Váš zadaný E-Mail <span className='underline'> bol zaslaný 4 číselný verifikačný kód.</span></p>

                                                <div className='mt-5 flex flex-row gap-3 w-[255px] mx-auto'>
                                                    <div className='border-2 border-gray-700 shadow-inner rounded-lg w-[255px] h-[57px] bg-gray-600'></div>
                                                    <div className='border-2 border-gray-700 shadow-inner rounded-lg w-[255px] h-[57px] bg-gray-600'></div>
                                                    <div className='border-2 border-gray-700 shadow-inner rounded-lg w-[255px] h-[57px] bg-gray-600'></div>
                                                    <div className='border-2 border-gray-700 shadow-inner rounded-lg w-[255px] h-[57px] bg-gray-600'></div>
                                                </div>


                                                <button
                                                    onClick={handelSteps}
                                                    className='text-white rounded-md text-lg flex justify-center items-center gap-2 mt-4 bg-green button-shadow px-7 py-3.5 w-full'>
                                                    Overiť <UserCheck />
                                                </button>
                                                <button className='mt-7 w-full text-base'>
                                                    Zaslať kód ešte raz
                                                </button>
                                            </Dialog.Panel>
                                        </>
                                        :
                                        <>
                                            <Dialog.Panel className="w-full h-[515px] max-w-[624px] transform overflow-hidden rounded-2xl bg-white px-8 text-center align-middle shadow-xl transition-all text-gray-100 relative">
                                                <div  >
                                                    <Image src='/images/ebook.png' width={159} height={181} className='mx-auto' />
                                                </div>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[42px] font-semibold leading-[46px] "
                                                >
                                                    E-Book bol poslaný
                                                    <br />
                                                    na Váš email
                                                </Dialog.Title>
                                                <p className='mt-4 px-[72px] text-base'>Spolu s E-Bookum <span className='font-semibold'>ste získali ZDARMA 30 min konzultáciu s našim odborníkon na umelú inteligenciu.</span> Náš AI odborník Vás bude čoskoro kontaktovať.</p>

                                                <button
                                                    onClick={closeModal}
                                                    className='text-white rounded-md text-lg flex justify-center items-center gap-2 mt-7 bg-green button-shadow px-7 py-3.5 w-full'>
                                                    G CHAT - AI pre web stránky
                                                </button>
                                                <Link href='https://www.wavenet.sk' className='mt-5 flex items-start text-sm'>
                                                    Naprogramovala spoločnosť <span className='font-semibold'>WaveNet</span>
                                                </Link>
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
