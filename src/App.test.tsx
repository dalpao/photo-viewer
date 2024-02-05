
import { render } from '@testing-library/react';
import App from './App';
import { imageUrls } from './imageUrls'
import { PhotoViewer } from './PhotoViewer'
import * as renderer from 'react-test-renderer';
// import { ImageSelector } from './ImageSelector';


test('renders Hello world text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Hello Mary/i);
  expect(textElement).toBeInTheDocument();
});

test('imgageUrl generation code correctly', () => {
    const firstImgUrl = 'https://picsum.photos/id/600/1600/900.jpg';

    const result = imageUrls[0];

    expect(result).toBe(firstImgUrl);
  });

  test('broken images are not included', () => {

    const brokenImgUrls = [
        'https://picsum.photos/id/601/1600/900.jpg', 
        'https://picsum.photos/id/624/1600/900.jpg',
        'https://picsum.photos/id/632/1600/900.jpg',
        'https://picsum.photos/id/636/1600/900.jpg',
        'https://picsum.photos/id/644/1600/900.jpg',
        'https://picsum.photos/id/647/1600/900.jpg'
    ];

 
    brokenImgUrls.forEach(url => {
        // expect(imageUrls).not.toContain(url);
        expect(imageUrls.includes(url)).toBe(false);
    });
  });

  describe("PhotoViewer Component", () => {
    it ("Should match snapshot with text and image", async() => {
        const testName = 'Mary';
        const testUrl = 'https://picsum.photos/id/600/1600/900.jpg'
        const tree = renderer.create(<PhotoViewer name={testName} url={testUrl} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
  })


   







   
   