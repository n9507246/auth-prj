import { Button } from "./components/ui/button"


export default function ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="bg-red-200">Главная 12exxxxxx <Button variant="outline">Button</Button>
      </div>
    )
  }
  