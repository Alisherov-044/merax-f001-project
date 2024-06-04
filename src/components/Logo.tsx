import { Link } from "react-router-dom";

export function Logo() {
    return (
        <Link to="/">
            <img src="/logo.webp" className="w-[128px]" alt="logo" />
        </Link>
    );
}
