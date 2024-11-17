import { helper } from '@ember/component/helper';

export default helper(function (params) {
  if (!params[0]) {
    return '';
  }
  return params[0].split('T')[0];
});
