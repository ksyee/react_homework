import getImageUrl from '../utils/getImageUrl';

function ContentCard({ content }) {
  return (
    <li key={content.id} className="text-center">
      <img
        src={getImageUrl(content, 'image')}
        alt={content.name}
        className="border-2 border-zinc-200"
      />
      <p className="mt-4pxr text-20pxr">{content.name}</p>
    </li>
  );
}

export default ContentCard;
