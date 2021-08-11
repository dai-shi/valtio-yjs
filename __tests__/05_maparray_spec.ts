import * as Y from 'yjs';
import { proxy } from 'valtio/vanilla';
import { bindProxyAndYMap } from '../src/index';

describe('issue #4', () => {
  it('map array', async () => {
    const doc = new Y.Doc();
    const p = proxy<{ arr?: string[] }>({});
    const m = doc.getMap('map');
    const arr = new Y.Array();
    m.set('arr', arr);
    arr.push(['a', 'b']);

    bindProxyAndYMap(p, m);

    expect(m.get('arr').toJSON()).toEqual(['a', 'b']);
    expect(p.arr).toEqual(['a', 'b']);
  });
});
