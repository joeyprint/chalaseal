import { Box } from '@mui/material';
import BrowseItem from '../Components/BrowseItem';
import { useItems } from '../../../Domains/item';

const BrowseList = () => {
  const { data, isLoading, isError } = useItems();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const items = data?.data ?? [];

  return (
    <Box maxWidth={715}>
      {items.map((item: Record<string, unknown>, index: number) => {
        const id = item.id as number;
        const title = item.title as string;
        const description = item.description as string;
        const location = item?.location as { name: string };
        const tags = item?.tags as Array<{ id: number; name: string }>;

        return (
          <Box mt={index === 0 ? 0 : 3} key={id}>
            <BrowseItem
              title={title}
              description={description}
              location={location}
              tags={tags}
              articleUrl={`/articles/${id}`}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default BrowseList;
