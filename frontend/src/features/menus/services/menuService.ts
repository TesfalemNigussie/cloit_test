import { apiClient } from "@/src/lib/apiClient";
import { CreateMenuDto } from "../dto/createMenuDto";

export const createMenu = async (menuData: CreateMenuDto) => {
    const response = await apiClient.post('/menu/create', menuData);
    return response.data;
};

export const getRootMenu = async () => {
    const response = await apiClient.get('/menu/getRootMenu');
    return response.data;
};

export const getMenuTree = async () => {
    const response = await apiClient.get('/menu/getMenus');
    return response.data;
};

export const getMenuById = async (id: string) => {
    const response = await apiClient.get(`/menu/get/${id}`);
    return response.data;
};

export const updateMenu = async (id: string, menuData: CreateMenuDto) => {
    const response = await apiClient.put(`/menu/update/${id}`, menuData);
    return response.data;
};

export const deleteMenu = async (id: string) => {
    const response = await apiClient.delete(`/menu/delete/${id}`);
    return response.data;
};