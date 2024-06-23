import {Dimensions, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');
const guidelineBaseWidth = 412;

export const scaleSize = (size) => (width / guidelineBaseWidth) * size;

export const scaleFont = (size) =>
  PixelRatio.getFontScale() <= 1 ? scaleSize(size) : scaleSize(size / PixelRatio.getFontScale());
