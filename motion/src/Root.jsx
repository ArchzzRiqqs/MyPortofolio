import { Composition } from "remotion";
import { ProjectsReel, SCENE_FRAMES, FPS } from "./ProjectsReel.jsx";
import { reelProjects as projects } from "./reelProjects.js";

export const Root = () => (
  <Composition
    id="ProjectsReel"
    component={ProjectsReel}
    durationInFrames={SCENE_FRAMES * projects.length}
    fps={FPS}
    width={1200}
    height={675}
  />
);
