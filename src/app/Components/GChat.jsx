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

      <div className=''>
        <div className='max-w-[320px] md:max-w-[1100px] lg:max-w-[1475px] mx-auto max-h-full h-[697px] md:h-[100vh]'>
          <div className='flex flex-col md:flex-row justify-between md:px-10 lg:px-20'>
            <div className='mt-2.5 md:mt-[89px] md:w-[500px] lg:w-[670px]'>
              <Image src='/images/logo.svg' width={100} height={100} className='hidden md:block'/>
              <h1 className='text-2xl md:text-[30px] lg:text-[40px] xl:text-[57px] px-0 text-center md:text-start  font-inter font-bold  text-white md:mt-12 lg:mt-[76px] leading-[1.15]'>
                Viete už, ako využiť
                <br />
                <span className='underline'> UMELÚ INTELIGENCIU</span>
                <br />
                na vašej web stránke?
              </h1>
              <p className='text-[10px] md:text-sm lg:text-base text-center md:text-start text-white/80 leading-4 lg:leading-8 font-inter mx-5 md:mx-0  mt-2.5 lg:mt-5 mb-6 lg:mb-12'>
                Tím odborníkov z projektu
                <span className='font-bold'> G CHAT </span>
                 na umelú inteligenciu pripravil pre všetkých podnikateľov
                <span className='font-bold underline'> ZDARMA E-Book </span>
                s cieľom rozšíriť vaše obzory využitia AI na Web stránkach a E-Shopoch.
              </p>
              <div className='flex flex-col xl:flex-row items-center lg:gap-10'>
                <button className='text-white text-lg font-semibold flex items-center gap-4 rounded-[100px] bg-green button-shadow px-11 py-4 lg:py-6'>
                  Stiahnuť E-Book <Arrow />
                </button>
                <button
                  onClick={openModal}
                  className='text-white/60 flex items-start mt-2.5 md:mt-8 lg:mt-0 gap-3 lg:gap-8'>
                  <Download />
                  <div className='flex flex-col items-start'>
                    <p className='text-sm lg:text-base font-bold'> Už stiahnutých E-Bookov</p>
                    <p className='text-[27px] lg:text-3xl font-semibold text-white'>234 ks</p>
                  </div>
                </button>
                {isOpen && <DownloadModal isOpen={isOpen} closeModal={closeModal} />}
              </div>
            </div>
            <div className='mt-11 md:mt-14 lg:w-[700px] px-9 md:px-0 order-first md:order-last'>
              <Image src='/images/ebook.png' width={700} height={800} className=' w-[250px] h-[285px] md:w-[600px] lg:[650px] xl:w-[700px] md:h-[600px] lg:h-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GChat