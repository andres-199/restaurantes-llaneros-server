import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsToMany
} from 'sequelize-typescript'
import { Mesa } from '../mesas/mesas.entity'
import { MetodoPago } from '../metodos-pago/metodos-pago.entity'
import { Producto } from '../productos/productos.entity'
import { RestauranteMetodoPago } from '../restaurantes-metodos-pago/restaurantes-metodos-pago.entity'
import { Tercero } from '../terceros/terceros.entity'

@Table({
  schema: 'public',
  tableName: 'restaurantes'
})
export class Restaurant extends Model<Restaurant> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id'
  })
  id: number

  @Column
  nombre: string

  @Column
  descripcion: string

  @Column
  direccion: string

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @Column({ type: DataType.JSON })
  imagen: JSON

  @HasMany(() => Tercero, { as: 'Personal', foreignKey: 'restaurante_id' })
  Personal: Tercero[]

  @HasMany(() => Producto, { foreignKey: 'restaurante_id', as: 'Productos' })
  Productos: Producto[]

  @HasMany(() => Mesa, { foreignKey: 'restaurante_id', as: 'Mesas' })
  Mesas: Mesa[]

  @BelongsToMany(() => MetodoPago, {
    through: () => RestauranteMetodoPago,
    as: 'MetodosPago',
    foreignKey: 'restaurante_id',
    otherKey: 'metodo_pago_id'
  })
  MetodosPago: MetodoPago[]
}
