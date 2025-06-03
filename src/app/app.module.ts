@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // tu usuario de postgres
      password: '123456',    // tu contraseña
      database: 'notification_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    NotificationsModule,
 
  ],
})
export class AppModule {}
