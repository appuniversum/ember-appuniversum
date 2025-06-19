import { isHtmlElement } from '../utils/is-element';

export function ensureRoot(node: Node): HTMLElement {
  const root = node.getRootNode();
  if (!isHtmlElement(root)) {
    // should only happen if a node happens to not be attached
    return document.body;
  }
  return root;
}
