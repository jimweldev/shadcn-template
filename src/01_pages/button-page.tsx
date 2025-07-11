import { FaHouse } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

const ButtonPage = () => {
  return (
    <div className="space-y-3">
      <Button size="xs" className="w-full">
        <FaHouse /> Button
      </Button>
      <Button size="sm" className="w-full">
        <FaHouse />
        Button
      </Button>
      <Button size="default" className="w-full">
        <FaHouse />
        Button
      </Button>
      <Button size="lg" className="w-full">
        <FaHouse />
        Button
      </Button>
    </div>
  );
};

export default ButtonPage;
