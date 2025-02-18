import { Injectable } from '@nestjs/common';
import { MenuRepository } from './menu.repository';
import { CreateMenuDto, UpdateMenuDto } from './dto';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepository: MenuRepository) { }

  async create(dto: CreateMenuDto) {
    const parentMenu = dto.parentId ? await this.menuRepository.findById(dto.parentId) : null;
    const depth = parentMenu ? parentMenu.depth + 1 : 1;

    return this.menuRepository.create(dto.name, dto.parentId ?? null, depth);
  }

  async getRootMenu() {
    return this.menuRepository.getRootMenu();
  }

  async getMenu() {
    const menus = await this.menuRepository.getMenu();

    function buildMenu(menus: any, parentId = null) {
      return menus
        .filter((menu: any) => menu.parentId === parentId)
        .map((menu: any) => ({
          ...menu,
          children: buildMenu(menus, menu.id),
        }));
    }

    return buildMenu(menus);
  }

  async findById(id: string) {
    return this.menuRepository.findById(id);
  }

  async update(id: string, dto: UpdateMenuDto) {
    const { name, parentId, depth } = dto;

    const result = await this.menuRepository.findById(id);

    return this.menuRepository.update(id, name ?? result.name, parentId ?? result.parentId, depth ?? result.depth);
  }

  async delete(id: string) {
    await this.menuRepository.findById(id);
    const children = await this.menuRepository.findChildren(id);

    for (const child of children) {
      await this.menuRepository.delete(child.id);
    }

    return this.menuRepository.delete(id);
  }
}
