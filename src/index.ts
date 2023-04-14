import doPostLINE from './LINE/doPost';
import funcForMessageEvent from './LINE/funcForMessageEvent';

global.doPost = doPostLINE({
  funcForMessageEvent,
});
