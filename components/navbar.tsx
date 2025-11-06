import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { Coffee } from "lucide-react";


const Navbar = () => {
  return (
    <div className="bg-muted">
      <nav className="h-20 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
                        <img
              src="/LogoMitText.svg"
              alt="MPU App Logo"
              className="h-20 w-auto"
            />

            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button variant={"default"}>
                Buy me a Coffe <Coffee />
              </Button>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
