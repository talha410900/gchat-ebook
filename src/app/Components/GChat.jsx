"use client"
import Image from 'next/image'
import React from 'react'
import Arrow from '../../../Icons/Arrow'
import Download from '../../../Icons/Download'
import DownloadModal from './DownloadModal'

function GChat() {
  const [isOpen, setIsOpen] = React.useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>

      <div className=' bg-primary'>
        <div className='lg:max-w-[1475px] mx-auto h-[100vh]'>
          <div className='flex flex-col md:flex-row justify-between lg:pl-[130px]'>
            <div className='mt-[89px] lg:w-[670px]'>
              <Image src='/images/logo.svg' width={100} height={100} />
              <h1 className='text-2xl lg:text-[57px]  font-inter font-bold  text-white mt-[76px] leading-[1.15]'>
                Viete už, ako využiť
                <br />
                <span className='underline'> UMELÚ INTELIGENCIU</span>
                <br />
                na vašej web stránke?
              </h1>
              <p className='text-[10px] lg:text-base text-white leading-8 mr-20 font-inter mt-5 mb-12'>
                Tím odborníkov z projektu
                <span className='font-bold'>G CHAT </span>
                na umelú inteligenciu pripravil pre všetkých podnikateľov
                <span className='font-bold underline'>ZDARMA E-Book </span>
                s cieľom rozšíriť vaše obzory využitia AI na Web stránkach a E-Shopoch.
              </p>
              <div className='flex flex-col md:flex-row items-center gap-10'>
                <button className='text-white text-lg flex items-center gap-4 rounded-[100px] bg-green button-shadow px-11 py-6'>
                  Stiahnuť E-Book <Arrow />
                </button>
                <button
                  onClick={openModal}
                  className='text-white flex items-start gap-8'>
                  <Download />
                  <div className='flex flex-col items-start'>
                    <p className=' text-base font-bold'> Už stiahnutých E-Bookov</p>
                    <p className='text-3xl font-semibold'>234 ks</p>
                  </div>
                </button>
                {isOpen && <DownloadModal isOpen={isOpen} closeModal={closeModal} />}
              </div>
            </div>
            <div className='mt-14 w-[700px] order-first md:order-last'>
              <Image src='/images/ebook.png' width={700} height={800} className='w-[250px] h-[285px] lg:w-[700px] lg:h-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GChat