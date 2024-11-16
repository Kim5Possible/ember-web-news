import { helper } from '@ember/component/helper';

export default helper(function (params) {
  return !params[0] || params[0].length < 100
    ? params[0]
    : params[0].substring(0, 100) + '...';
});
