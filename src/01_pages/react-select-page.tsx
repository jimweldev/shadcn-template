import ReactSelect from 'react-select';
import { Input } from '@/components/ui/input';
import { convertToSelectOptions } from '@/lib/convert-to-select-options';

const ReactSelectPage = () => {
  const options = convertToSelectOptions([
    'Chocolate',
    'Strawberry',
    'Vanilla',
  ]);

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
