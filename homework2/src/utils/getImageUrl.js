export default function getImageUrl(item, fileName = 'image') {
  return `https://taing.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
}
