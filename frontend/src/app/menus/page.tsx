"use client";
import { useEffect, useState } from "react";
import { useMenu } from "@/src/features/menus/hooks/useMenu";
import Breadcrumb from "@/src/components/breadCrumb";
import { NestedMenu } from "@/src/features/menus/components/nestedMenu";
import { MenuInput } from '@/src/features/menus/components/menuInput';
import { Header } from "@/src/components/header";
import { Action } from "@/src/utils/enums";
import { ConfirmationModal } from "@/src/components/confirmationModal";
import toast from "react-hot-toast";

export default function MenusPage() {
  const [selectedSystem, setSelectedSystem] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [action, setAction] = useState<Action>(Action.View);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentMenuTree, setCurrentMenuTree] = useState<Menu[]>([]);

  const { rootMenu, menu, loading, fetchMenuTree, addMenu, editMenu, removeMenu } = useMenu();

  useEffect(() => {
    if (selectedSystem) {
      setCurrentMenuTree(menu.filter((e) => e.id == selectedSystem));
    }
  }, [selectedSystem, menu]);

  const onMenuSelected = (menuId: string, action: Action) => {
    const findMenuById = (menuId: string, menus: Menu[]): Menu | null => {
      for (const menu of menus) {
        if (menu.id === menuId) return menu;
        if (menu.children?.length) {
          const found = findMenuById(menuId, menu.children);
          if (found) return found;
        }
      }
      return null;
    };

    let selectedItem = findMenuById(menuId, menu!);

    if (action == Action.Remove) setIsModalOpen(true);
    else if (action == Action.Add) {
      selectedItem = { id: "", name: "", parentId: selectedItem?.id ?? null, parentName: selectedItem?.name ?? null, children: [], depth: 0, createdAt: '', updatedAt: '' };
    }

    setSelectedMenu(selectedItem);
    setAction(action);
  };

  const onSave = async (menu: Menu, action: Action) => {
    if (action == Action.Add) await addMenu(menu);
    else if (action == Action.Update) await editMenu(menu.id, menu);

    toast.success('Success');

    setSelectedMenu(null);
    setAction(Action.View);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleConfirmDelete = async () => {
    if (selectedMenu) await removeMenu(selectedMenu.id);
    setIsModalOpen(false);
    setSelectedMenu(null);
    setAction(Action.View);
    toast.success('Success');
  };

  const handleSelected = (value: string) => {
    if (value == 'AddNewItem') {
      setAction(Action.Add);
      setSelectedMenu({ id: "", name: "", parentId: null, children: [], depth: 0, createdAt: '', updatedAt: '', parentName: '' });
      setCurrentMenuTree([]);
      setSelectedSystem('');
    } else {
      setAction(Action.View);
      setSelectedMenu(null);
      setCurrentMenuTree(menu.filter((e) => e.id == value));
      setSelectedSystem(value);
    }
  };

  return (
    <>
      <div className="fixed bg-white z-10 w-full space-y-2 flex flex-col">
        <Breadcrumb />
        <Header
          title='Menus'
          icon={
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="26" cy="26" r="26" fill="#253BFF" />
              <rect x="17.6562" y="17.6699" width="6.69214" height="6.69336" rx="1" fill="white" />
              <rect x="17.6562" y="27.6523" width="6.69214" height="6.69336" rx="1" fill="white" />
              <rect x="27.6539" y="27.6523" width="6.69214" height="6.69336" rx="1" fill="white" />
              <circle cx="30.9871" cy="21.041" r="3.69067" fill="white" />
            </svg>
          }
        />
      </div>

      <div className="relative top-40 py-2 space-y-4 px-4 sm:px-8">
        <div className="space-y-2">
          <div className="text-sm text-[#475467]">Menus</div>
          <select
            value={selectedSystem}
            onChange={(e) => handleSelected(e.target.value)}
            className="w-full lg:w-1/4 py-[14px] px-6 bg-[#F9FAFB] text-base rounded-2xl hover:outline-none focus:outline-none"
          >
            {rootMenu.map((e) => (<option key={e.id} value={e.id}>{e.name}</option>))}
            <option value="AddNewItem">Add New Item</option>
          </select>
        </div>

        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <NestedMenu menus={currentMenuTree ?? []} onMenuSelected={onMenuSelected} />
          </div>

          <div className="md:col-span-2 w-full lg:w-1/2">
            <MenuInput selectedMenu={selectedMenu} action={action} onSave={(menu) => onSave(menu, action)} />
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        menuName={selectedMenu?.name || ''}
      />
    </>
  );
}
