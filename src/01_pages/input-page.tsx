import { Input } from '@/components/ui/input';

const InputPage = () => {
  return (
    <div className="space-y-3">
      <Input inputSize="xs" placeholder="Input" />
      <Input inputSize="sm" placeholder="Input" />
      <Input inputSize="default" placeholder="Input" />
      <Input inputSize="lg" placeholder="Input" />
    </div>
  );
};

export default InputPage;
