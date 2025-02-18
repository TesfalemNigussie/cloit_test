import { Action } from "@/src/utils/enums";
import { useEffect, useState } from "react";

export const MenuInput = ({ selectedMenu, action, onSave }: { selectedMenu: Menu | null, action: Action, onSave: (menu: Menu) => any }) => {

    const [menuDetail, setMenuDetail] = useState<Menu>({} as Menu);

    useEffect(() => {
        if (selectedMenu) {
            setMenuDetail(selectedMenu);
        }
    }, [selectedMenu])

    return (
        <div className="flex flex-col text-[#475467] space-y-4">
            <div className="inline-block" >
                <label>
                    Menu ID
                </label>
                <input
                    type="text"
                    readOnly
                    value={menuDetail?.id ?? ""}
                    className=" w-full p-4  bg-[#F9FAFB] rounded-2xl"
                />
            </div>
            <div>
                <label>
                    Depth
                </label>
                <input
                    type="number"
                    onChange={(e) => {
                        if (menuDetail) {
                            setMenuDetail({
                                ...menuDetail,
                                depth: Number.parseInt(e.target.value),
                            });
                        }
                    }}
                    value={menuDetail?.depth ?? ""}
                    className=" w-full p-4  bg-[#F9FAFB] rounded-2xl"
                />
            </div>
            <div>
                <label>
                    Parent Data
                </label>
                <input
                    type="text"
                    readOnly
                    value={menuDetail?.parentName ?? ""}
                    className=" w-full p-4  bg-[#F9FAFB] rounded-2xl"
                />
            </div>
            <div>
                <label>
                    Name
                </label>
                <input
                    type="text"
                    value={menuDetail?.name ?? ""}
                    onChange={(e) => {
                        if (menuDetail) {
                            setMenuDetail({
                                ...menuDetail,
                                name: e.target.value,
                            });
                        }
                    }}
                    className=" w-full p-4  bg-[#F9FAFB] rounded-2xl"
                />
            </div>
            <button onClick={() => { onSave(menuDetail!) }} className="px-8 py-4 bg-[#253BFF] text-white rounded-[48px] hover:bg-blue-700">
                {action == Action.Add ? 'Add New Menu' : 'Save'}
            </button>
        </div>
    );
}