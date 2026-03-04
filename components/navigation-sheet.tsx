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
          <Link href="/" className="block">
            Startseite
          </Link>
          <Link href="/about" className="block">
            Über mich
          </Link>
          <Link href="/coming-soon" className="block">
            Tests
          </Link>
          <div className="pt-4 border-t border-border">
            <Link href="/impressum" className="block text-sm text-foreground/70">
              Impressum
            </Link>
            <Link href="/datenschutz" className="block text-sm text-foreground/70 mt-2">
              Datenschutz
            </Link>
          </div>
        </div>
         <Button variant={"default"} className="mt-8 w-full" asChild>
                <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer" className="w-full">
                  Buy me a Coffe <Coffee />
                </a>
              </Button>
      </SheetContent>
    </Sheet>
  );
};
