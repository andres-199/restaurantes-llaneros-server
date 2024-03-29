import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { DetalleVentasMiddleware } from './detalle-ventas.middleware'
import { CommonModule } from '../../common/common.module'

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController]
})
export class DetalleVentasModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DetalleVentasMiddleware).forRoutes('detalle_ventas')
  }
}
