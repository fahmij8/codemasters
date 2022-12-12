export * from "./context";

export type SAMPLE_LESSON_RESPONSE =
  | {
      type: "intro";
      title: string;
      content: string[];
      key: string;
    }
  | {
      type: "instruction";
      title: string;
      content: {
        stage: number;
        instruction: string;
        key: string;
      }[];
      key: string;
    };

export type LESSON_RESPONSE = {
  id: number;
  title: string;
  description: string;
  link: string;
};
