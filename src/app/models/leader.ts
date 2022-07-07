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

export interface TalentResponse {
  status: number;
  data: Talent[];
}

export interface Talent {
  ptale_id: number;
  nombre: string;
  ptale_documentoidentidad: string;
  psegu_tiposatisfaccion?: null;
  psegu_calificaciondesempeno?: null;
  psegu_fecha?: null;
  psegu_color: string;
}

export interface ClientLeaderInfoResponse {
  status: number;
  data: DataEntity[];
}
export interface DataEntity {
  nombre: string;
  plide_id: number;
}
