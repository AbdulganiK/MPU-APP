import React from 'react'
import CanvasProps from './canvasProps'
import Canvas from './canvas';
import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    BadgeDollarSign,
    Route,
    ShieldCheck,
    Truck,
    Undo2,
    UserRoundCheck,
} from "lucide-react";
import r_explanations from '@/config/reaction';
import IconButtonDemo from './button-05';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const faq = [
    {
        icon: Undo2,
        question: "What is your return policy?",
        answer:
            "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
    },
    {
        icon: Route,
        question: "How do I track my order?",
        answer:
            "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
    },
    {
        icon: Truck,
        question: "Do you ship internationally?",
        answer:
            "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
    },
];

const CanvasMenu = ({ startDrawing, draw, endDrawing, height, width }: CanvasProps) => {
    const [menuCount, setMenuCount] = useState(0);

    const explanationMenuCount = 0;
    const settingMenuCount = 1;
    const gameMenuCount = 2;


    if (menuCount === explanationMenuCount) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6 py-10">
                <div className="w-full max-w-5xl h-[80vh] bg-[#FFEACB] p-8 rounded-2xl flex flex-col">
                    {/* Header */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-center">
                            Reaktionstest
                        </h2>
                        <p className="mt-3 text-xl text-center text-muted-foreground">
                            In diesem Test wird gemessen, wie schnell du auf eine unerwartete Situation reagierst.
                        </p>
                    </div>

                    {/* Content (scrollt bei Bedarf) */}
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

                    {/* Footer */}
                    <div className="mt-6 flex justify-end">
                        <IconButtonDemo onClick={() => setMenuCount(settingMenuCount)} label='Weiter' icon={ArrowRight} />
                    </div>
                </div>
            </div>
        );
    } else if (menuCount === settingMenuCount) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6 py-10">
                <div className="w-full max-w-5xl h-[80vh] bg-[#FFEACB] p-8 rounded-2xl flex flex-col">
                    {/* Header */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-center">
                            Einstellungen
                        </h2>
                        <p className="mt-3 text-xl text-center text-muted-foreground">
                            Stelle den Schwierigkeitsgrad sowie deine Präferenzen ein.
                        </p>
                    </div>

                    {/* Content (scrollt bei Bedarf) */}
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <div className="grid grid-cols-2 grid-rows-2 gap-6">
                            <div className="p-4 rounded-xl">Anzahl der Testbilder</div>
                            <div className="p-4 rounded-xl"> 
                                <Select>
                                    <SelectTrigger className="w-[180px] border border-black text-black">
                                        <SelectValue placeholder="---" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Anzahl</SelectLabel>
                                            <SelectItem value="10">10</SelectItem>
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
                                <Select>
                                    <SelectTrigger className="w-[180px] border border-black text-black">
                                        <SelectValue placeholder="---" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Abstand</SelectLabel>
                                            <SelectItem value="1 sec">1 sec</SelectItem>
                                            <SelectItem value="2 sec">2 sec</SelectItem>
                                            <SelectItem value="4 sec">4 sec</SelectItem>
                                            <SelectItem value="8 sec">8 sec</SelectItem>
                                            <SelectItem value="16 sec">16 sec</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select></div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex justify-between items-center">
                        <IconButtonDemo onClick={() => setMenuCount(explanationMenuCount)} label='Zurück' icon={ArrowLeft} iconPosition='left' />
                        <IconButtonDemo onClick={() => setMenuCount(gameMenuCount)} label='Starten' icon={ArrowRight} />
                    </div>
                </div>
            </div>
        );
    } else {
        return <Canvas draw={draw} startDrawing={startDrawing} endDrawing={endDrawing} height={height} width={width} />

    }

}

export default CanvasMenu;