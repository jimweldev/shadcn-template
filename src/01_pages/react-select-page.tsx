import ReactSelect from 'react-select';
import { Input } from '@/components/ui/input';

const ReactSelectPage = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className="space-y-layout">
      <Input inputSize="xs" placeholder="Input" />
      <ReactSelect
        className="react-select-sm-container w-full"
        classNamePrefix="react-select-sm"
        placeholder="Select"
        isMulti
        options={options}
      />
      <ReactSelect
        className="react-select-container w-full"
        classNamePrefix="react-select"
        placeholder="Select"
        options={options}
        isMulti
      />
      <Input inputSize="lg" placeholder="Input" />
    </div>
  );
};

export default ReactSelectPage;
