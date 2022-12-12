export * from "./context";

export type SAMPLE_LESSON_RESPONSE =
  | {
      type: "intro";
      title: string;
      content: string[];
    }
  | {
      type: "instruction";
      title: string;
      content: {
        stage: number;
        instruction: string;
      }[];
    };
