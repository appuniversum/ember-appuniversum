export function isElement(node?: Node | null): node is Element {
  if (!node) {
    return false;
  }

  return node.nodeType === node.ELEMENT_NODE;
}

export function isHtmlElement(node?: Node | null): node is HTMLElement {
  if (!isElement(node)) {
    return false;
  }
  return node instanceof HTMLElement;
}
