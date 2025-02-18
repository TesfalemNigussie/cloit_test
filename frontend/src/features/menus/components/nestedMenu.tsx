import { Action } from "@/src/utils/enums";
import { useState } from "react";

interface OpenMenus {
    [key: string]: boolean;
}

export const NestedMenu = ({ menus, onMenuSelected }: { menus: Menu[], onMenuSelected: (menuId: string, action: Action) => void }) => {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    const toggleMenu = (menuId: string) => {
        setOpenMenus((prevState) => ({
            ...prevState,
            [menuId]: !prevState[menuId],
        }));
    };

    const toggleAll = (isExpanded: boolean) => {
        const updatedOpenMenus: OpenMenus = {};

        const updateOpenMenus = (menu: Menu, isExpanded: boolean) => {
            if (menu.children?.length > 0) {
                menu.children.forEach((e) => updateOpenMenus(e, isExpanded));
            }

            updatedOpenMenus[menu.id] = isExpanded;
            return updatedOpenMenus;
        }

        menus.forEach((e) => updateOpenMenus(e, isExpanded));
        setOpenMenus(updatedOpenMenus);
    }

    const renderMenu = (menu: Menu, isLastItem: boolean, onMenuSelected: (menuId: string, action: Action) => void): JSX.Element => {
        return (
            <li key={menu.id} className="relative font-normal text-base text-[#101828] ">

                <div className={`${!isLastItem ? "h-full w-[1.5px]" : "h-[26px] w-[1.5px]"} " absolute left-1 top-0  bg-[#98A2B3] " `}></div>

                <div onClick={() => toggleMenu(menu.id)} className="flex items-center focus:outline-none relative">
                    <div className="absolute left-1 top-1/2 h-[1.5px] w-10 bg-[#98A2B3]"></div>
                    <div className="flex pl-10 py-3 space-x-2 items-center group ">
                        {menu.children?.length > 0 ? (openMenus[menu.id] ? (
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="26" height="26" rx="13" fill="white" />
                                <path d="M9.5 11.25L13 14.75L16.5 11.25" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="26" height="26" rx="13" fill="white" />
                                <path d="M11.25 9.5L14.75 13L11.25 16.5" stroke="#101828" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )) : <svg width="26" height="26"></svg>}

                        <button onClick={() => onMenuSelected(menu.id, Action.Update)}>{menu.name}</button>

                        <button onClick={() => onMenuSelected(menu.id, Action.Add)} className="bg-[#253BFF] p-1 opacity-0 group-hover:opacity-100 rounded-full text-white ">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 2.91667V11.0833M2.91666 7H11.0833" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <button onClick={() => onMenuSelected(menu.id, Action.Remove)} className="bg-[#DE1B1B] p-1 opacity-0 group-hover:opacity-100 rounded-full text-white transition-opacity">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M20.5001 6H3.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M9.5 11L10 16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M14.5 11L14 16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {openMenus[menu.id] && menu.children?.length > 0 && (
                    <ul className="list-none pl-12 relative">
                        {menu.children.map((child, index) => renderMenu(child, menu.children.length - 1 == index, onMenuSelected))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <>
            <div className="flex flex-wrap gap-4 py-4">
                <button className="rounded-full py-2 px-6 bg-[#1D2939] text-white" onClick={() => toggleAll(true)}>
                    Expand All
                </button>
    
                <button className="rounded-full py-2 px-6 border border-[#D0D5DD] bg-white text-[#475467]" onClick={() => toggleAll(false)}>
                    Collapse All
                </button>
            </div>
            <ul className="list-none">
                <span>{menus[0]?.name}</span>

                {menus?.map((menu, index) => renderMenu(menu, menus.length - 1 == index, onMenuSelected))}
            </ul>
        </>
    );
};