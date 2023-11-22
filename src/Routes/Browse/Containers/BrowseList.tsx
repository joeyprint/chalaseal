import { Box } from '@mui/material';
import BrowseItem from '../Components/BrowseItem';

const mockUpBrowseList = [
  {
    title: 'Yao: Ban Huai Mae Sai Dialect',
    description:
      'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words, which recorded with pencil in Thai and word prompts are written in Thai',
  },
  {
    title: 'Kayan Karen, Kayah, and Kayaw: Ban Huai Suea Thao Dialect',
    description:
      'A word list of Kayan Karen, Kaya Karenm and Kayaw Karen in Ban Huai Suea Thao, Pha Bong, Mueang, Mae Hong Son, with approximately 1,800 words, written in phonetic alphabet, in which word prompts are printed in English, and translated in Thai',
    location: 'Ban Huai, Mae Sai',
  },
  {
    title: 'Yao: Ban Huai Mae Sai Dialect',
    description:
      'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words, which recorded with pencil in Thai and word prompts are written in Thai',
    tags: ['Ahka', 'Ekaw', 'Sino-Tibetan Languages'],
  },
  {
    title: 'Yao: Ban Huai Mae Sai Dialect',
    description:
      'Interviews of Yao people, recording their rituals and tone in Yao, and a list of approximately 700 words, which recorded with pencil in Thai and word prompts are written in Thai',
    location: 'Ban Kham',
    tags: ['Ahka', 'Ekaw', 'Sino-Tibetan Languages'],
  },
];

const BrowseList = () => {
  return (
    <Box maxWidth={715}>
      {mockUpBrowseList.map((item, index) => {
        const { title, description, location, tags } = item;
        return (
          <Box mt={index === 0 ? 0 : 3}>
            <BrowseItem
              title={title}
              description={description}
              location={location}
              tags={tags}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default BrowseList;
