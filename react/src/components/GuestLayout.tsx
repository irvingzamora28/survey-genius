import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout: React.FC<{}> = () => {
    return (
        <div>
            <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            Logo
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GuestLayout;
