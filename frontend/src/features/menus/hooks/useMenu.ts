import { useState, useEffect } from 'react';
import { createMenu, deleteMenu, getMenuTree, getRootMenu, updateMenu } from '../services/menuService';
import { CreateMenuDto } from '../dto/createMenuDto';

export const useMenu = () => {
    const [menu, setMenu] = useState<Menu[]>([]);
    const [rootMenu, setRootMenu] = useState<Menu[]>([]);
    const [loading, setLoading] = useState(false);

    const getRootMenus = async () => {
        try {
            const data = await getRootMenu();
            setRootMenu(data);
        } catch (error) {
            console.error('Error fetching root menu:', error);
        }
    };
    
    const fetchMenuTree = async () => {
        setLoading(true);
        try {
            const data = await getMenuTree();
            setMenu(data);
        } catch (error) {
            console.error('Error fetching menu tree:', error);
        } finally {
            setLoading(false);
        }
    };

    const addMenu = async (menuData: Menu) => {
        try {
            const createMenuRequest: CreateMenuDto = {
                name: menuData.name,
                parentId: menuData.parentId,
                depth: menuData.depth,
            };

            await createMenu(createMenuRequest);
            await fetchMenuTree();
        } catch (error) {
            console.error('Error creating menu:', error);
        }
    };

    const editMenu = async (id: string, menuData: Menu) => {
        try {
            const updateMenuRequest: CreateMenuDto = {
                name: menuData.name,
                parentId: menuData.parentId,
                depth: menuData.depth,
            };

            await updateMenu(id, updateMenuRequest);
            await fetchMenuTree();
            await getRootMenus()
        } catch (error) {
            console.error('Error updating menu:', error);
        }
    };

    const removeMenu = async (id: string) => {
        try {
            await deleteMenu(id);
            await fetchMenuTree();
        } catch (error) {
            console.error('Error deleting menu:', error);
        }
    };

    useEffect(() => {
        getRootMenus();
        fetchMenuTree();
    }, []);

    return { rootMenu, menu, loading, fetchMenuTree, addMenu, editMenu, removeMenu, getRootMenus };
};
