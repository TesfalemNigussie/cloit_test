'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';




export default function Sidebar() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);


  const [containerMenu, setContainerMenu] = useState([
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H10L12 6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4Z" fill="white" />
      </svg>,
      label: 'Systems',
      isActive: false,
      path: '/systems',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.65625" y="3.66992" width="6.69214" height="6.69336" rx="1" stroke="#667085" />
        <rect x="3.65625" y="13.6523" width="6.69214" height="6.69336" rx="1" stroke="#667085" />
        <rect x="13.6539" y="13.6523" width="6.69214" height="6.69336" rx="1" stroke="#667085" />
        <circle cx="16.9871" cy="7.04102" r="3.69067" stroke="#667085" />
      </svg>,
      label: 'System Code',
      isActive: false,
      path: '/systemcode',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 10.5H5C4.45 10.5 3.97917 10.3042 3.5875 9.9125C3.19583 9.52083 3 9.05 3 8.5V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H8.5C9.05 3 9.52083 3.19583 9.9125 3.5875C10.3042 3.97917 10.5 4.45 10.5 5V8.5C10.5 9.05 10.3042 9.52083 9.9125 9.9125C9.52083 10.3042 9.05 10.5 8.5 10.5ZM5 8.5H8.5V5H5V8.5ZM8.5 21H5C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V15.5C3 14.95 3.19583 14.4792 3.5875 14.0875C3.97917 13.6958 4.45 13.5 5 13.5H8.5C9.05 13.5 9.52083 13.6958 9.9125 14.0875C10.3042 14.4792 10.5 14.95 10.5 15.5V19C10.5 19.55 10.3042 20.0208 9.9125 20.4125C9.52083 20.8042 9.05 21 8.5 21ZM5 19H8.5V15.5H5V19ZM19 10.5H15.5C14.95 10.5 14.4792 10.3042 14.0875 9.9125C13.6958 9.52083 13.5 9.05 13.5 8.5V5C13.5 4.45 13.6958 3.97917 14.0875 3.5875C14.4792 3.19583 14.95 3 15.5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V8.5C21 9.05 20.8042 9.52083 20.4125 9.9125C20.0208 10.3042 19.55 10.5 19 10.5ZM15.5 8.5H19V5H15.5V8.5ZM19 21H15.5C14.95 21 14.4792 20.8042 14.0875 20.4125C13.6958 20.0208 13.5 19.55 13.5 19V15.5C13.5 14.95 13.6958 14.4792 14.0875 14.0875C14.4792 13.6958 14.95 13.5 15.5 13.5H19C19.55 13.5 20.0208 13.6958 20.4125 14.0875C20.8042 14.4792 21 14.95 21 15.5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21ZM15.5 19H19V15.5H15.5V19Z" fill="#667085" />
      </svg>,
      label: 'Properties',
      isActive: false,
      path: '/properties',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.65625" y="3.66992" width="6.69214" height="6.69336" rx="1" fill="#101828" />
        <rect x="3.65625" y="13.6523" width="6.69214" height="6.69336" rx="1" fill="#101828" />
        <rect x="13.6539" y="13.6523" width="6.69214" height="6.69336" rx="1" fill="#101828" />
        <circle cx="16.9871" cy="7.04102" r="3.69067" fill="#101828" />
      </svg>,
      label: 'Menus',
      isActive: true,
      path: '/menus',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 10.5H5C4.45 10.5 3.97917 10.3042 3.5875 9.9125C3.19583 9.52083 3 9.05 3 8.5V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H8.5C9.05 3 9.52083 3.19583 9.9125 3.5875C10.3042 3.97917 10.5 4.45 10.5 5V8.5C10.5 9.05 10.3042 9.52083 9.9125 9.9125C9.52083 10.3042 9.05 10.5 8.5 10.5ZM5 8.5H8.5V5H5V8.5ZM8.5 21H5C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V15.5C3 14.95 3.19583 14.4792 3.5875 14.0875C3.97917 13.6958 4.45 13.5 5 13.5H8.5C9.05 13.5 9.52083 13.6958 9.9125 14.0875C10.3042 14.4792 10.5 14.95 10.5 15.5V19C10.5 19.55 10.3042 20.0208 9.9125 20.4125C9.52083 20.8042 9.05 21 8.5 21ZM5 19H8.5V15.5H5V19ZM19 10.5H15.5C14.95 10.5 14.4792 10.3042 14.0875 9.9125C13.6958 9.52083 13.5 9.05 13.5 8.5V5C13.5 4.45 13.6958 3.97917 14.0875 3.5875C14.4792 3.19583 14.95 3 15.5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V8.5C21 9.05 20.8042 9.52083 20.4125 9.9125C20.0208 10.3042 19.55 10.5 19 10.5ZM15.5 8.5H19V5H15.5V8.5ZM19 21H15.5C14.95 21 14.4792 20.8042 14.0875 20.4125C13.6958 20.0208 13.5 19.55 13.5 19V15.5C13.5 14.95 13.6958 14.4792 14.0875 14.0875C14.4792 13.6958 14.95 13.5 15.5 13.5H19C19.55 13.5 20.0208 13.6958 20.4125 14.0875C20.8042 14.4792 21 14.95 21 15.5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21ZM15.5 19H19V15.5H15.5V19Z" fill="#667085" />
      </svg>,
      label: 'API List',
      isActive: false,
      path: '/apilist',
    },
  ]);
  
  const otherMenu = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H10L12 6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V8H11.175L9.175 6H4V18Z" fill="#475467" />
      </svg>
      , label: 'Users & Group', isActive: false,
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H10L12 6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V8H11.175L9.175 6H4V18Z" fill="#475467" />
      </svg>
      , label: 'Competition', isActive: false,
    },
  ];

  useEffect(() => {
    const updatedMenu = containerMenu.map((e) => ({
      ...e,
      isActive: pathname === e.path,
    }));
    setContainerMenu(updatedMenu);
  }, [pathname]);

  return (
    <>
      <div className="lg:hidden fixed top-4  left-4 z-30">
        <button
          onClick={toggleMobileSidebar}
          className="p-2 rounded-lg "
        >
          <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18V16H16V18H3ZM19.6 17L14.6 12L19.6 7L21 8.4L17.4 12L21 15.6L19.6 17ZM3 13V11H13V13H3ZM3 8V6H16V8H3Z"
                  fill="black"
                />
              </svg>
        </button>
      </div>

      <div
        className={`h-full bg-[#101828] text-white p-4 rounded-3xl transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-60'
        } fixed lg:relative z-40 ${
          isMobileSidebarOpen ? ' translate-x-0 ' : ' -translate-x-full -ml-8 lg:translate-x-6'
        }`}
      >
        <div className="flex justify-between mb-7 ">
          <div className="">
            {!isCollapsed && (
              <svg
                height="84"
                viewBox="0 0 120 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6492_120)">
                  <path
                    d="M79.3548 31.4297H83.6829V52.0174H79.3548V31.4297Z"
                    fill="white"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M86.7659 31.4297V35.4071H92.2189V52.0167H96.547V35.4071H102V31.4297H86.7659Z"
                    fill="white"
                    fillOpacity="0.8"
                  />
                  <mask
                    id="mask0_6492_120"
                    maskUnits="userSpaceOnUse"
                    x="32"
                    y="31"
                    width="70"
                    height="22"
                  >
                    <path
                      d="M32 31.4295H102V52.5709H32V31.4295Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_6492_120)">
                    <path
                      d="M58.864 46.8052V43.1029H51.6645V31.9813H47.6479V44.3748C47.6479 44.694 47.7107 45.01 47.8328 45.3049C47.9549 45.5999 48.1339 45.8678 48.3596 46.0935C48.5853 46.3192 48.8533 46.4982 49.1482 46.6203C49.4431 46.7425 49.7592 46.8053 50.0783 46.8052H58.864Z"
                      fill="white"
                    />
                    <path
                      d="M67.4767 47.3591C69.0521 47.3593 70.5922 46.8922 71.9022 46.0171C73.2121 45.1419 74.2332 43.898 74.8362 42.4425C75.4391 40.987 75.597 39.3855 75.2897 37.8403C74.9825 36.2951 74.2239 34.8758 73.11 33.7618C71.996 32.6477 70.5767 31.889 69.0316 31.5816C67.4865 31.2742 65.8849 31.4319 64.4294 32.0348C62.9738 32.6376 61.7298 33.6586 60.8545 34.9685C59.9793 36.2784 59.5121 37.8184 59.5121 39.3938C59.512 40.4398 59.7179 41.4756 60.1182 42.442C60.5184 43.4084 61.105 44.2865 61.8446 45.0261C62.5842 45.7658 63.4622 46.3525 64.4286 46.7528C65.395 47.1531 66.4307 47.3591 67.4767 47.3591ZM67.4767 35.1091C68.5926 35.1233 69.6572 35.5802 70.4363 36.3793C71.2154 37.1783 71.6452 38.2541 71.6312 39.37C71.6456 39.9247 71.5488 40.4766 71.3465 40.9932C71.1442 41.5099 70.8404 41.9808 70.4532 42.3782C70.066 42.7756 69.6032 43.0914 69.092 43.307C68.5807 43.5227 68.0315 43.6338 67.4767 43.6338C66.9218 43.6338 66.3726 43.5227 65.8614 43.307C65.3502 43.0914 64.8873 42.7756 64.5001 42.3782C64.1129 41.9808 63.8092 41.5099 63.6069 40.9932C63.4046 40.4766 63.3078 39.9247 63.3222 39.37C63.3087 38.2542 63.739 37.1788 64.5183 36.3801C65.2977 35.5815 66.3623 35.1251 67.4781 35.1112"
                      fill="white"
                    />
                    <path
                      d="M36.1202 42.2477C36.1202 40.5533 36.7933 38.9283 37.9915 37.7301C39.1896 36.532 40.8147 35.8588 42.5091 35.8588H44.9689V31.9822H42.2942C39.564 31.9822 36.9456 33.0668 35.0151 34.9973C33.0846 36.9279 32 39.5462 32 42.2764C32 45.0066 33.0846 47.625 35.0151 49.5555C36.9456 51.4861 39.564 52.5706 42.2942 52.5706H75.442V48.6366H42.5091C40.8147 48.6366 39.1896 47.9635 37.9915 46.7654C36.7933 45.5672 36.1202 43.9422 36.1202 42.2477Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            )}
          </div>

          <button onClick={isMobileSidebarOpen ? toggleMobileSidebar :toggleSidebar} className=' '>
            {
              <svg
                width="24"
                height="84"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18V16H16V18H3ZM19.6 17L14.6 12L19.6 7L21 8.4L17.4 12L21 15.6L19.6 17ZM3 13V11H13V13H3ZM3 8V6H16V8H3Z"
                  fill="white"
                />
              </svg>
            }
          </button>
        </div>

        <nav className="flex flex-col space-y-2">
          <div className="bg-[#1D2939] rounded-2xl py-2 space-y-1">
            {containerMenu.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`${
                  item.isActive && 'bg-[#9FF443]'
                } flex items-center text-[#667085] gap-4 p-3 rounded-2xl hover:bg-[#9FF443] hover:text-black cursor-pointer`}
              >
                {item.icon}
                {!isCollapsed && (
                  <span className="font-jakarta font-bold">{item.label}</span>
                )}
              </Link>
            ))}
          </div>

          {otherMenu.map((item, index) => (
            <div
              key={index}
              className={`${
                item.isActive && 'bg-[#9FF443]'
              } flex items-center text-[#667085] gap-4 p-3 rounded-2xl hover:bg-[#9FF443] hover:text-black cursor-pointer`}
            >
              {item.icon}
              {!isCollapsed && <span>{item.label}</span>}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

