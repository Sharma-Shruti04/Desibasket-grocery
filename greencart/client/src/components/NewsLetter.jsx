const NewsLetter = () => {
    
    return (
        <div id="newsletter" className="soft-card flex flex-col items-center justify-center rounded-[2rem] px-6 py-10 text-center mt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Stay updated</p>
            <h1 className="mt-3 text-2xl font-semibold text-slate-900 md:text-4xl">Never miss a deal</h1>
            <p className="pb-8 pt-3 text-sm leading-7 text-slate-500 md:text-lg">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form className="glass-panel flex w-full max-w-2xl flex-col gap-3 rounded-[1.5rem] p-3 md:h-16 md:flex-row md:items-center md:justify-between">
                <input
                    className="h-full w-full rounded-xl border border-slate-200/80 bg-white px-4 text-slate-600 outline-none transition focus:border-primary"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button type="submit" className="h-full rounded-xl bg-primary px-8 py-3 text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dull cursor-pointer md:px-12">
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default NewsLetter
