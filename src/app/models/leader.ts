export interface LeaderResponse {
  status: number
  response: Leader
}

export interface Leader {
  nombre: string
  plise_cargo: string
  pusua_id: number
  plise_id: number
  pclie_nombre: string
}

export interface ClientLeaderResponse {
  status: number;
  data: ClientLeader[];
}

export interface ClientLeader {
  nombre: string;
  plide_id: number;
}
