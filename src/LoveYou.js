import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

//define love you gesture
export const loveYouGesture = new GestureDescription("i_love_you");

//thumb
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Thumb, FingerCurl.HorizontalLeft, 0.25);
loveYouGesture.addDirection(Finger.Thumb, FingerCurl.HorizontalRight, 0.25);

//index
loveYouGesture.addCurl(Finger.index, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.index, FingerDirection.VerticalUp, 0.25);

//pinky
loveYouGesture.addCurl(Finger.index, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.index, FingerDirection.VerticalUp, 0.25);

//middle and ring finger
for (let finger of [Finger.Middle, Finger.Ring]) {
  loveYouGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
  loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}
