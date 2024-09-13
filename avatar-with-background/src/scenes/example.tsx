import { Img, Video, makeScene2D } from '@revideo/2d';
import { waitFor, createRef, useScene } from '@revideo/core'

export default makeScene2D(function* (view) {
  const avatarRef = createRef<Video>();
  const backgroundRef = createRef<Img>();

  yield view.add(
    <>
      <Img
        src={'https://revideo-example-assets.s3.amazonaws.com/mountains.jpg'}
        height={'100%'}
        ref={backgroundRef}
      />
      <Video
        src={'https://revideo-example-assets.s3.amazonaws.com/avatar.webm'}
        play={true}
        width={'100%'}
        ref={avatarRef}
        decoder={"slow"} // we need to use the slow decoder to support transparency
      />
    </>,
  );

  avatarRef().position.y(useScene().getSize().y / 2 - avatarRef().height() / 2);

  yield* waitFor(avatarRef().getDuration());
});
