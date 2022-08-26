export interface LeaderResponse {
  status: number;
  response: Leader;
}
export interface Leader {
  nombre: string;
  liscargo: string;
  usuaid: number;
  liseid: number;
  clinombre: string;
  cambioContrasena: boolean;
}

export interface ClientLeaderResponse {
  status: number;
  data: ClientLeader[];
}

export interface ClientLeader {
  lidenombres: string;
  lideid: number;
}

export interface TalentResponse {
  status: number;
  data: Talent[];
}

export interface Talent {
  talid: number;
  talnombres: string;
  taldocumid: string;
  comptipsat?: null;
  comcaldese?: null;
  segufecha?: null;
  lidenombre: string;
}

export interface ClientLeaderInfoResponse {
  status: number;
  data: ClientLeaderInfo[];
}

export interface ClientLeaderInfo {
  lidenombres: string;
  evc: string;
  cargo: string;
  lideid: number;
  clieid: number;
}

export interface TalentForSearchBarResponse {
  status: number;
  data: TalentForSearchBar[];
}

export interface TalentForSearchBar {
  talnombres: string;
  talid: number;
}

export interface TalentInfoResponse {
  status: number;
  data: TalentInfo[] ;
}

export interface TalentInfo {
  talid: number;
  talcargo: string;
  taldocumid: string;
  talnombres: string;
  lidenombre: string;
}
