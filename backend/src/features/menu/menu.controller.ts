import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create.menu.dto';
import { UpdateMenuDto } from './dto/update.menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('create')
  async create(@Body() dto: CreateMenuDto) {
    return this.menuService.create(dto);
  }

  @Get('getRootMenu')
  async getRootMenu() {
    return this.menuService.getMenu();
  }

  @Get('getMenus')
  async getMenu() {
    return this.menuService.getMenu();
  }

  @Get('get/:id')
  async findById(@Param('id') id: string) {
    return this.menuService.findById(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateMenuDto) {
    return this.menuService.update(id, dto);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.menuService.delete(id);
  }
}
