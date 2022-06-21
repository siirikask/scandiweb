import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Women',
    route: 'shop/women',
  },
  {
    id: 2,
    title: 'men',
    route: 'shop/men',
  },
  {
    id: 3,
    title: 'kids',
    route: 'shop/kids',
  }
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
