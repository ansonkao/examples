import {Audio, Img, Txt, Video, makeScene2D} from '@revideo/2d';
import {createRef, createSignal, useScene, waitFor} from '@revideo/core';

export default makeScene2D(function* (view) {
  const fontSize = createSignal(50);

  yield view.add(
    <>
      <Video
        src={'https://revideo-example-assets.s3.amazonaws.com/beach-4.mp4'}
        size={['100%', '100%']}
        play={true}
      />
      <Audio
        src={'https://revideo-example-assets.s3.amazonaws.com/chill-beat-2.mp3'}
        play={true}
      />
    </>,
  );

  yield* waitFor(1);

  yield view.add(<Txt fill={"white"} fontSize={fontSize}>{useScene().variables.get("message", "Hello World!")()}</Txt>);

  yield* fontSize(100, 4); // increase font size to 100 in 4 seconds

  yield* waitFor(25); // wait for 25 seconds more
  
});
