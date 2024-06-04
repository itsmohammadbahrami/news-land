import MainContent from "./main-content/MainContent"

const HomePage = () => {
    return (
        <section className="w-full h-[calc(100vh-4.063rem)] py-4 px-[3.125rem] flex">
            <main className='flex-1'>
                <MainContent />
            </main>
            <aside className='w-[20rem]'>
                aside
            </aside>
        </section>
    )
}

export default HomePage