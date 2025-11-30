// canvasMenu.tsx
import React, { useState } from "react";
import IconButtonDemo from "./button-05";
import { ArrowLeft, ArrowRight, ListRestart, Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GameExplanation from "@/config/gameExplanation";

type GameBaseProps = {
  height: number;
  width: number;
  totalRounds: number;
  intervalMs: number;
};

type CanvasMenuProps = {
  GameComponent: React.ComponentType<GameBaseProps & any>; // „any“ = extra Props für das Spiel
  height: number;
  width: number;
  r_explanations: GameExplanation[],
  title: string,
  heading: string,
  gameProps?: Record<string, any>; // z.B. { draw, startDrawing, endDrawing }
};

const CanvasMenu: React.FC<CanvasMenuProps> = ({
  GameComponent,
  height,
  width,
  r_explanations,
  title,
  heading,
  gameProps = {},
}) => {
  const [menuCount, setMenuCount] = useState(0); // 0 = Intro, 1 = Settings, 2 = Game
  const [round, setRound] = useState<number>(16);
  const [seconds, setSeconds] = useState<number>(1);
  const [canvasKey, setCanvasKey] = useState(0);

  const explanationMenuCount = 0;
  const settingMenuCount = 1;
  const gameMenuCount = 2;

  if (menuCount === explanationMenuCount) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-5xl h-[80vh] bg-[#FFEACB] p-8 rounded-2xl flex flex-col">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-center">
              {title}
            </h2>
            <p className="mt-3 text-xl text-center text-muted-foreground">
              {heading}
            </p>
          </div>

          <div className="mt-8 flex-1 overflow-y-auto">
            <div className="grid md:grid-cols-1 gap-6 rounded-xl">
              {r_explanations.map(({ heading, text, icon: Icon }) => (
                <div key={heading} className="border p-4 rounded-xl">
                  <div className="mt-3 mb-2 flex items-center gap-2 text-[1.35rem] font-semibold tracking-tight">
                    <Icon className="size-5 text-accent-foreground" /> {heading}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <IconButtonDemo
              onClick={() => setMenuCount(settingMenuCount)}
              label="Weiter"
              icon={ArrowRight}
            />
          </div>
        </div>
      </div>
    );
  }

  if (menuCount === settingMenuCount) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-5xl h-[80vh] bg-[#FFEACB] p-8 rounded-2xl flex flex-col ">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-center">
              Einstellungen
            </h2>
            <p className="mt-3 text-xl text-center text-muted-foreground">
              Stelle den Schwierigkeitsgrad sowie deine Präferenzen ein.
            </p>
          </div>

          <div className="mt-8 flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              <div className="p-4 rounded-xl">Anzahl der Testbilder</div>
              <div className="p-4 rounded-xl">
                <Select onValueChange={(v) => setRound(Number(v))}>
                  <SelectTrigger className="w-[180px] border border-black text-black">
                    <SelectValue placeholder={String(round)} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Anzahl</SelectLabel>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                      <SelectItem value="200">200</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 rounded-xl">Abstand zwischen den Testbildern</div>
              <div className="p-4 rounded-xl">
                <Select onValueChange={(v) => setSeconds(Number(v))}>
                  <SelectTrigger className="w-[180px] border border-black text-black">
                    <SelectValue placeholder={`${seconds} sec`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Abstand</SelectLabel>
                      <SelectItem value="1">1 sec</SelectItem>
                      <SelectItem value="2">2 sec</SelectItem>
                      <SelectItem value="4">4 sec</SelectItem>
                      <SelectItem value="8">8 sec</SelectItem>
                      <SelectItem value="16">16 sec</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center relative z-50">
            <IconButtonDemo
              onClick={() => setMenuCount(explanationMenuCount)}
              label="Zurück"
              icon={ArrowLeft}
              iconPosition="left"
            />
            <IconButtonDemo
              onClick={() => setMenuCount(gameMenuCount)}
              label="Starten"
              icon={ArrowRight}
            />
          </div>
        </div>
      </div>
    );
  }

  // ---------------- Spiel / GameComponent ----------------
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl h-[80vh] bg-[#FFEACB] p-8 rounded-2xl flex flex-col">
        <GameComponent
          key={canvasKey}
          height={height}
          width={width}
          totalRounds={round}
          intervalMs={seconds * 1000}
          {...gameProps}
        />

        <div className="mt-6 flex justify-end space-x-1.5 items-center">
          <IconButtonDemo
            onClick={() => setMenuCount(settingMenuCount)}
            label="Einstellungen"
            icon={Settings}
          />
          <IconButtonDemo
            label="Neustarten"
            onClick={() => setCanvasKey((prev) => prev + 1)}
            icon={ListRestart}
          />
        </div>
      </div>
    </div>
  );
};

export default CanvasMenu;
