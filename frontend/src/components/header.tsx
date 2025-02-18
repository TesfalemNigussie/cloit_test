import { ReactNode } from "react"

export const Header = ({ title, icon }: { title: string, icon: ReactNode }) => {
    return (
        <div className="flex space-x-4 py-4">
            {icon}
            <span className=" text-2xl  text-gray-900 flex items-center  font-extrabold tex-[32px]">{title}</span>
        </div>
    )
}