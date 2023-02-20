import React, { useCallback, useState } from 'react';
import './SortableList.css';
import SortableListItem from './SortableListItem';
function SortableList({
  data,
  onDropItem,
  onClickItem,
  renderItem
}) {
  const [startIndex, setStartIndex] = useState(0);
  const [listData, setListData] = useState(data);
  const onDragStart = index => {
    setStartIndex(index);
  };
  const onDrop = useCallback(dropIndex => {
    const dragItem = listData[startIndex];
    const list = [...listData];
    list.splice(startIndex, 1);
    const newListData = startIndex < dropIndex ? [...list.slice(0, dropIndex - 1), dragItem, ...list.slice(dropIndex - 1, list.length)] : [...list.slice(0, dropIndex), dragItem, ...list.slice(dropIndex, list.length)];
    setListData(newListData);
    onDropItem(newListData);
  }, [startIndex, onDropItem, listData]);
  return /*#__PURE__*/React.createElement("ul", {
    className: "sortable_list"
  }, listData?.map((item, index) => /*#__PURE__*/React.createElement(SortableListItem, {
    key: index,
    index: index,
    draggable: true,
    onDropItem: onDrop,
    onDragStart: onDragStart,
    onClickItem: onClickItem
  }, renderItem(item, index))), /*#__PURE__*/React.createElement(SortableListItem, {
    key: listData.length,
    index: listData.length,
    draggable: false,
    onDropItem: onDrop
  }));
}
export default SortableList;