import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Coffee, Menu } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <img
              src="/LogoMitText.svg"
              alt="MPU App Logo"
              className="h-20 w-auto"
            />

        <div className="mt-12 text-base space-y-4">
          <Link href="#" className="inline-block">
            Home
          </Link>

        
        </div>
         <Button variant={"default"}>
                Buy me a Coffe <Coffee />
              </Button>
      </SheetContent>
    </Sheet>
  );
};
