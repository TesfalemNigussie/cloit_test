import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MenuModule } from './features/menu/menu.module';

@Module({
  imports: [MenuModule, PrismaModule],
})
export class AppModule {}
