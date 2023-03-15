import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";

const GuestLayout: React.FC<{}> = () => {
    const { currentUser, userToken } = userStateContext();

    if (userToken) {
        return <Navigate to={"/"} />
    }
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
