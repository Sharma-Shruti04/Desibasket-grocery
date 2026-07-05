import { footerLinks } from "../assets/assets";
import BrandLogo from "./BrandLogo";

const Footer = () => {

    return (
        <div id="contact" className="mx-4 mt-24 overflow-hidden rounded-t-[2rem] bg-slate-950 text-slate-300 md:mx-8 lg:mx-12">
            <div className="bg-[radial-gradient(circle_at_top_left,rgba(79,191,139,0.28),transparent_28%),linear-gradient(135deg,#0f172a_0%,#111827_55%,#022c22_100%)] px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12 border-b border-white/10">
                <div>
                    <BrandLogo light />
                    <p className="max-w-[410px] mt-6 leading-7 text-slate-300/80">
                        DesiBasket delivers fresh groceries and daily essentials straight to your door with a faster, cleaner, and more local shopping experience.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-white md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-2 text-slate-300/80">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="transition hover:text-primary">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-slate-300/60">
                Copyright {new Date().getFullYear()} © DesiBasket. All rights reserved.
            </p>
            </div>
        </div>
    );
};

export default Footer
