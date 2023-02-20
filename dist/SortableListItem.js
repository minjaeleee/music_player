import React, { useRef } from 'react';
function SortableListItem({
  index,
  draggable,
  children,
  onDragStart,
  onDropItem,
  onClickItem
}) {
  const itemRef = useRef(null);
  const onDragStartItem = () => {
    // 드래그를 시작할 때 반응
    itemRef.current.classList.add('dragstart');
    onDragStart(index);
  };
  const onDragEnd = () => {
    // 드래그를 끝내면 반응
    itemRef.current.classList.remove('dragstart');
  };
  const onDragEnter = () => {
    // 요소가 드롭 존에 들어갈 때 반응
    itemRef.current.classList.add('dragover');
  };
  const onDragLeave = () => {
    // 요소가 드롭 존을 떠날 때 반응
    itemRef.current.classList.remove('dragover');
  };
  const onDragOver = e => {
    // 요소가 드롭 존 위에 있을때, onDrop 함수가 실행될 수 있도록 refresh 막음
    e.preventDefault();
  };
  const onDrop = () => {
    // 요소가 드롭 존에 놓일때 반응
    itemRef.current.classList.remove('dragover');
    onDropItem(index);
  };
  const onClick = () => onClickItem(index);
  return /*#__PURE__*/React.createElement("li", {
    ref: itemRef,
    className: "item",
    draggable: draggable || false,
    onDragStart: onDragStartItem,
    onDragEnd: onDragEnd,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDragOver: onDragOver,
    onDrop: onDrop,
    onClick: onClick
  }, children);
}
export default SortableListItem;