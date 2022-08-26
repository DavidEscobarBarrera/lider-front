export interface UltimoSeguimientoResponse {
  status: number;
  data: UltimoSeguimiento;
}

export interface UltimoSeguimiento {
  talid: number;
  seguid: number;
  rechabbladn: string;
  rechabtecni: string;
  opmhabbland: string;
  opmhabtecni: string;
  competencias: Competencias;
  segufecha: string;
}

export interface Competencias {
  COMUNICACIÓN: number;
  'TRABAJO EN EQUIPO': number;
  'CONOCIMIENTO TÉCNICO': number;
  'ORIENTACIÓN AL LOGRO': number;
  'ORIENTACIÓN AL SERVICIO': number;
}

export interface UpdateSeguimiento  {
  rechb: string;
  recht: string;
  opmhb: string;
  opmht: string;
}

