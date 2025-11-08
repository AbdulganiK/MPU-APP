import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon, Star } from "lucide-react";


type IconButtonDemoProps = {
  onClick?: () => void;
  label: string;
  icon?: LucideIcon; // erlaubt jedes Lucide-Icon
  iconPosition?: "left" | "right";

};

const IconButtonDemo: React.FC<IconButtonDemoProps> = ({ onClick, label, icon: Icon,   iconPosition = "right", // Default: Icon rechts
}) => {
  return (
    <div className="flex justify-end">
      <Button
        onClick={onClick}
        className="text-lg font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        {iconPosition === "left" && Icon && <Icon className="w-5 h-5" />}
        <span>{label}</span>
        {iconPosition === "right" && Icon && <Icon className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default IconButtonDemo;
