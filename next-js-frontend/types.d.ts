import { Data } from "@dydxprotocol/v3-client";

export type GraphData = Array<{
  x: Date;
  open: number;
  close: number;
  high: number;
  low: number;
}>;

export type CandleData = Array<{
  close: string;
  high: string;
  low: string;
  market: string;
  open: string;
  startedAt: Date;
  //   resolution: string | null;
  //   trades: string | null;
  //   updatedAt: string | null;
  //   usdVolume: string | null;
}>;
