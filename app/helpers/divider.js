import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function (params) {
  const content = params[0];
  const output = content.replace(/Divider/g, '<br/><br/>');
  return htmlSafe(output);
});
