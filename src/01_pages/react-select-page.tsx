import Select from 'react-select';
import { Input } from '@/components/ui/input';

const ReactSelectPage = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className="space-y-3">
      <Input inputSize="xs" placeholder="Select" />
      <div className="grid grid-cols-2 gap-2">
        <Input inputSize="sm" placeholder="Select" />
        <Select
          className="react-select-sm-container w-full"
          classNamePrefix="react-select-sm"
          placeholder="Select"
          options={options}
          isMulti
        />
      </div>
      <Select
        className="react-select-container w-full"
        classNamePrefix="react-select"
        placeholder="Select"
        options={options}
        isMulti
      />
      <Input inputSize="lg" placeholder="Select" />
    </div>
  );
};

export default ReactSelectPage;
