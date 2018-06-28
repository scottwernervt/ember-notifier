import { helper } from '@ember/component/helper';
import { capitalize as _capitalize } from '@ember/string';

export function capitalize([value]) {
  return _capitalize(value);
}

export default helper(capitalize);
