import { Outlet, Link } from "react-router-dom";

// The Layout component has <Outlet> and <Link> elements.

// The <Outlet> renders the current route selected.

// <Link> is used to set the URL and keep track of browsing history.

// Anytime we link to an internal path, we will use <Link> instead of <a href="">.

// The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.


const Layout = () =>
{
    return (
        <>
            {/* LAYOUT FOR EACH PAGE */ }
            <div className="min-h-screen w-full flex flex-col app-background">
                <div className="container mx-auto px-10">
                    <nav className="py-4 border-b-2 border-slate-900">
                        <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
                            <div>
                                {/* Possible logo */}
                            </div>
                            <div>
                                <div className="hidden md:block">
                                    <Link to="/"><div
                                        className="inline-block py-1 md:py-4 mr-6 "
                                    >
                                        Le quiz
                                    </div></Link>
                                    <Link to="/about"><div
                                        className="inline-block py-1 md:py-4 mr-6 "
                                    >
                                        À propos
                                    </div></Link>
                                    <Link to="/more"><div
                                        className="inline-block py-1 md:py-4"
                                    >
                                        En savoir plus
                                    </div></Link>

                                </div>
                            </div>
                        </div>
                    </nav>;
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;