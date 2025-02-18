import { Injectable } from '@nestjs/common';
import { Menu } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(name: string, parentId: string | null, depth: number) {
        return this.prisma.menu.create({
            data: { name, parentId, depth },
        });
    }

    async getRootMenu(): Promise<Menu[]> {
        return this.prisma.menu.findMany({
            where: {
                parentId: null,
            },
        });
    }

    async getMenu(): Promise<Menu[]> {
        return this.prisma.menu.findMany();
    }

    async findById(id: string): Promise<Menu> {
        const menu = await this.prisma.menu.findUnique({ where: { id } });
        if (!menu) throw new NotFoundException(`Menu with ID ${id} not found`);
        return menu;
    }

    async update(id: string, name: string, parentId: string | null, depth: number) {
        return this.prisma.menu.update({
            where: { id },
            data: { name, parentId, depth },
        });
    }

    async delete(id: string) {
        return this.prisma.menu.delete({
            where: { id },
            include: {
                children: true,
            },
        });
    }

    async findChildren(id: string): Promise<Menu[]> {
        return this.prisma.menu.findMany({ where: { parentId: id } });
    }
}
