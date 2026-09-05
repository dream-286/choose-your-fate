export type Choice = {
  text: string;
  next: string;
};

export type Scene = {
  id: string;
  text: string;
  choices: Choice[];
};

export type Story = {
  id: string;
  title: string;
  description: string;
  startScene: string;
  scenes: Record<string, Scene>;
  endings: Ending[];
};

export type Ending = {
  id: string;
  title: string;
};
