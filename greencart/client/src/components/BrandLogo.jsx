import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const BrandLogo = ({ light = false, compact = false, onClick }) => {
  return (
    <Link to="/" onClick={onClick} className="inline-flex items-center gap-3">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
          light ? "bg-white/12 border border-white/15" : "bg-primary/12 border border-primary/20"
        }`}
      >
        <img src={assets.leaf_icon} alt="DesiBasket" className="h-5 w-5" />
      </div>

      <div className="leading-none">
        <p className={`text-xl font-bold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
          DesiBasket
        </p>
        {!compact && (
          <p className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${light ? "text-slate-300" : "text-slate-500"}`}>
            Fresh picks daily
          </p>
        )}
      </div>
    </Link>
  );
};

export default BrandLogo;
