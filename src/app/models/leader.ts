export interface LeaderResponse {
  status: number;
  response: Leader;
}
export interface Leader {
  nombre: string;
  lise_cargo: string;
  pusua_id: number;
  lise_id: number;
  clie_nombre: string;
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
  tale_id: number;
  nombre: string;
  tale_documentoidentidad: string;
  comp_tiposatisfaccion?: null;
  comp_calificaciondesempeno?: null;
  segu_fecha?: null;
  lider: string;
}

export interface ClientLeaderInfoResponse {
  status: number;
  data: DataEntity[];
}

export interface DataEntity {
  nombre: string;
  plide_id: number;
}

export interface TalentForSearchBarResponse {
  status: number;
  data: TalentForSearchBar[];
}

export interface TalentForSearchBar {
  nombre: string;
  pusua_id: number;
}

export interface TalentInfoResponse {
  status: number;
  data: TalentInfo[] ;
}

export interface TalentInfo {
  tale_id: number;
  tale_cargo: string;
  tale_documentoidentidad: string;
  nombre: string;
  lider: string;
}
