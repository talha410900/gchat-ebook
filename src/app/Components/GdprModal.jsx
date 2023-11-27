"use client"
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Close from '../../../Icons/Close'
import Download from '../../../Icons/Download'

function GdprModal({ open, closeGdpr }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeGdpr}>
        <Transition.Child
          as={Fragment}
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
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >

              <Dialog.Panel className="w-full h-[415px] max-w-[624px] transform overflow-hidden rounded-2xl bg-white pl-8 pt-1 pr-1.5 pb-8 text-left align-middle shadow-xl transition-all text-gray-100">
                <div className='flex justify-end ' >
                  <Close />
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-4xl font-semibold leading-[46px] "
                >
                  GDPR
                </Dialog.Title>

                <div className='mt-1.5'>
                  <h2 className='text-base font-semibold'>1. IDENTIFIKAČNÉ ÚDAJE</h2>
                  <p className='text-xs text-gray-500'>Správcom osobných údajov je spoločnosť Onlinesvet s. r. o., sídlom Soblahov 852 913 38 Soblahov, IČO: 54192242, Zapísaná v Obchodnom registri Okresného súdu Trenčín, Vložka číslo 43346/R. Kontaktné údaje prevádzkovateľa: email: info@gchat.sk.</p>
                </div>

                <div className='mt-5'>
                  <h2 className='text-base font-semibold'>2. SPRACOVANIE OSOBNÝCH ÚDAJOV</h2>
                  <p className='text-xs text-gray-500'>Osobné údaje sú spracované na účely oslovenia na mieru, s ponukou produktov a služieb, zaslanie informácií v oblasti spoločnosťou poskytovaných služieb a k výkonu práv a povinností vyplývajúcich medzi Vami a spoločnosťou Onlinesvet s. r. o.. Ide o nasledovné osobné údaje zákazníka: meno, telefónne číslo, e-mailová adresa.</p>
                  <p className='text-xs text-gray-500'>Zákonným dôvodom pre spracovanie osobných údajov je súhlas týmto daný správcovi v zmysle:
                    - plnenie zmluvy článku 6 odst. 1 písm. b) GDPR a plnenie práv a povinností správcu podľa článku 6 odst. 1 písm. c) GDPR,</p>
                  <p className='text-xs text-gray-500'>- článku 6 ods.1písm. a) Nariadenia Európskeho parlamentu a Rady (EU) 2016/679 o ochrane fyzických osôb v súvislosti so spracovávaním osobných údajov a voľnom pohybu týchto údajov (ďalej GDPR) pre účely priameho marketingu, pokiaľ nedošlo k objednávke tovaru,
                    - oprávnený záujem správcu na vykonanie priameho marketingu podľa čl. 6 odst. 1 písm. f) GDPR</p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default GdprModal