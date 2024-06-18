import {Audio, Img, Txt, makeScene2D} from '@revideo/2d';
import {all, useScene, createRef, waitFor, easeInExpo, easeInCubic} from '@revideo/core';

export default makeScene2D(function* (view) {
  const rocketRef = createRef<Img>();
  const earthRef = createRef<Img>();
  const txtRef = createRef<Txt>();
  const logoRef = createRef<Img>();


  yield view.add(
    <>
    <Img
      width={'20%'}
      ref={earthRef}
      src={'earth.png'}
      position={[-useScene().getSize().width/2+50, useScene().getSize().height/2-50]}
    />,
    <Img
      width={'5%'}
      ref={rocketRef}
      src={
        '/rocket.png'
      }
      position={[earthRef().position().x+150, earthRef().position().y-150]}
    />,
    </>
  );

  yield* rocketRef().position([1000, -600], 2, easeInCubic);

  view.add(
    <Txt fontFamily={"Lexend"} fill="white" ref={txtRef} textAlign={"center"} fontSize={60}></Txt>
  )

  yield* txtRef().text("Thank you for 1,000 Github stars!", 2);

  view.add(
    <Img
      width={'1%'}
      ref={logoRef}
      y={-50}
      src={
        'https://revideo-example-assets.s3.amazonaws.com/revideo-logo-white.png'
      }
    />,
  );


  yield* all(txtRef().position.y(150, 2), logoRef().width("30%", 2));
});
