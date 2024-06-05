'use client'

import { isDesktop } from "@/utils"
import Filters from "./filters"
import MainContent from "./main-content"

const HomePage = () => {
    return (
        <section className="w-full h-[calc(100vh-4.063rem)] py-4 px-[3.125rem] flex bg-white gap-8 overflow-hidden relative max-md:ps-3 max-md:pe-2">
            <main className='flex-1'>
                <MainContent />
            </main>
            {
                isDesktop() &&
                <aside className='w-[20rem]'>
                    <Filters />
                </aside>
            }
        </section>
    )
}

export default HomePage