import ReactImage from '@/components/image/react-image';

const ReactImagePage = () => {
  return (
    <div>
      <ReactImage
        className="size-20"
        src="hello world"
        fallback="/images/default-avatar.jpg"
      />
    </div>
  );
};

export default ReactImagePage;
