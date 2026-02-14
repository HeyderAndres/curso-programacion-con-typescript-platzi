export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean
}


class postgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){}
  disconnect(): void {
    // lógica para desconectar de postgres.
  }
  isConnected(name: string): boolean {
    // lógica para verificar si la conexión a postgres está activa.
    return true;
  }

  connect(): void {
    // lógica para obtener conexión a postgres.
  }
}
