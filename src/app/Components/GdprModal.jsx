"use client"
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Close from '../../../Icons/Close'


function GdprModal({ open, closeGdpr }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={()=>{}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className=" flex min-h-full items-center justify-center text-center mx-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className='h-[580px] md:h-[615px] bg-white/10 rounded-xl'  onClick={closeGdpr}  style={{

                backdropFilter: 'blur(3px)',
              }} >
                <Dialog.Panel className="w-full h-[378px] md:h-[400px] lg:h-[415px] overflow-y-auto md:max-w-[500px] lg:max-w-[624px] transform overflow-hidden rounded-t-2xl bg-white px-4 pb-5 pt-2 lg:p-8  text-left align-middle shadow-xl transition-all text-grey-100 relative">
                  <div className='absolute right-2 lg:right-3 top-2 lg:top-4 w-full flex justify-end ' >
                    <Close onClick={closeGdpr} />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl lg:text-4xl  font-semibold leading-[46px] "
                  >
                    GDPR
                  </Dialog.Title>

                  <div className='mt-1.5 '>
                    <h2 className='text-xs md:text-xm lg:text-base font-semibold'>1. IDENTIFIKAČNÉ ÚDAJE</h2>
                    <p className='text-[12px] md:text-xs text-grey-500'>Správcom osobných údajov je spoločnosť Onlinesvet s. r. o., sídlom Soblahov 852 913 38 Soblahov, IČO: 54192242, Zapísaná v Obchodnom registri Okresného súdu Trenčín, Vložka číslo 43346/R. Kontaktné údaje prevádzkovateľa: email: info@gchat.sk.</p>
                  </div>

                  <div className='mt-2 lg:mt-5'>
                    <h2 className='text-xs md:text-xm lg:text-base font-semibold'>2. SPRACOVANIE OSOBNÝCH ÚDAJOV</h2>
                    <p className='text-[12px] md:text-xs text-grey-500'>Osobné údaje sú spracované na účely oslovenia na mieru, s ponukou produktov a služieb, zaslanie informácií v oblasti spoločnosťou poskytovaných služieb a k výkonu práv a povinností vyplývajúcich medzi Vami a spoločnosťou Onlinesvet s. r. o.. Ide o nasledovné osobné údaje zákazníka: meno, telefónne číslo, e-mailová adresa. Zákonným dôvodom pre spracovanie osobných údajov je súhlas týmto daný správcovi v zmysle: - plnenie zmluvy článku 6 odst. 1 písm. b) GDPR a plnenie práv a povinností správcu podľa článku 6 odst. 1 písm. c) GDPR, - článku 6 ods.1písm. a) Nariadenia Európskeho parlamentu a Rady (EU) 2016/679 o ochrane fyzických osôb v súvislosti so spracovávaním osobných údajov a voľnom pohybu týchto údajov (ďalej GDPR) pre účely priameho marketingu, pokiaľ nedošlo k objednávke tovaru, - oprávnený záujem správcu na vykonanie priameho marketingu podľa čl. 6 odst. 1 písm. f) GDPR Spracúvanie osobných údajov je v prípade zaslania kontaktného formuláru, nevyhnutného na kontaktovanie a na účely plnenia zákonnej povinnosti spoločnosti Onlinesvet s. r. o.. Zo strany správcu nedochádza k automatickému individuálnemu rozhodovaniu v zmysle čl. 22 GDPR.</p>
                  </div>

                  <div className='mt-2 lg:mt-5'>
                    <h2 className='text-xs md:text-xm lg:text-base font-semibold'>3. DOBA ULOŽENIA OSOBNÝCH ÚDAJOV</h2>
                    <p className='text-[12px] md:text-xs text-grey-500'>Osobné údaje sú spracúvané na dobu nevyhnutnú k výkonu práv a povinností vyplývajúcich zo zmluvného vzťahu (najviac po dobu 3 rokov od ukončenia zmluvného vzťahu) alebo do doby odvolania súhlasu so spracovaním osobných údajov v písomnej forme adresovanej predávajúcemu, a to poštou, telefonicky alebo elektronicky na e-mail info@gchat.sk</p>
                  </div>

                  <div className='mt-2 lg:mt-5'>
                    <h2 className='text-xs md:text-xm lg:text-base font-semibold'>4. PRÍJEMCOVIA OSOBNÝCH ÚDAJOV</h2>
                    <p className='text-[12px] md:text-xs text-grey-500'>Príjemcami osobných údajov sú nasledovné osoby: - spoločnosť Onlinesvet s. r. o., sídlom Soblahov 852 913 38 Soblahov, IČO: 54192242, ako sprostredkovateľ pre vedenie účtovníctva</p>
                  </div>

                  <div className='mt-2 lg:mt-5'>
                    <h2 className='text-xs md:text-xm lg:text-base font-semibold'>5. PRÁVA SUBJEKTU ÚDAJOV</h2>
                    <p className='text-[12px] md:text-xs text-grey-500'>Za podmienok stanovených v GDPR máte právo:<br />
                      - na prístup k osobným údajom<br />
                      - na opravu osobných údajov<br />
                      - na obmedzenie spracovania osobných údajov<br />
                      - na výmaz osobných údajov- na prenositeľnosť osobných údajov<br />
                      - vzniesť námietku voči spracovaniu osobných údajov<br />
                      Ak sa domnievate, že boli porušené Vaše právo na ochranu osobných údajov, máte právo podať sťažnosť na dozorný úrad.</p>
                  </div>

                  <div className='mt-2 lg:mt-5'>
                    <h2 className='text-xs md:text-xm lg:text-base font-semibold'>6. ZABEZPEČENIE OSOBNÝCH ÚDAJOV</h2>
                    <p className='text-[12px] md:text-xs text-grey-500'>Správca sa zaväzuje prijať vhodné technické a organizačné opatrenia k zabezpečeniu osobných údajov, aby nedošlo k neoprávnenému prístupu k týmto údajom alebo k ich strate. Správca prehlasuje, že k osobným údajom budú mať prístup len oprávnené osoby povinné zachovávať mlčanlivosť o osobných údajoch. Správca prijal technické opatrenia k zabezpečeniu dátových úložísk a osobným údajom evidovaným v listinnej podobe.</p>
                  </div>

                  <div className='mt-2 lg:mt-5'>
                    <h2 className='text-xs md:text-xm lg:text-base font-semibold'>7. ZÁVEREČNÉ USTANOVENIA</h2>
                    <p className='text-[12px] md:text-xs text-grey-500'>Odoslaním formuláru potvrdzujete, že ste sa s podmienkami ochrany osobných údajov oboznámili a bezvýhradne s nimi súhlasíte. Správca si vyhradzuje právo meniť tieto podmienky. Aktuálna verzia podmienok je zverejnená na internetových stránkach správcu.<br />
                      Dátum poslednej aktualizácie 15.01.2023</p>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default GdprModal