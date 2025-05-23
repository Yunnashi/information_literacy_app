// 視点の種類を enum で定義
export enum ViewpointType {
  Positive = "positive",
  Neutral = "neutral",
  Negative = "negative",
}

export interface Comment {
  author: string;
  content: string;
  likes: number;
  date: string;
}

export interface ViewPoint {
  content: string;
  link: string;
  comments: Comment[];
}

export interface News {
  id: number;
  category: number; // 0: ワクチン, 1: 同性婚, 2: 経済政策
  date: string;
  title: string;
  detail: string;
  neutral_number: number;
  positive_number: number;
  negative_number: number;
  details: Record<ViewpointType, ViewPoint>;
}
