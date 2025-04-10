import Link from "next/link";

const mockUrls = [
  "https://2yb0ix8u85.ufs.sh/f/lWxu08yP3Q5qLTA7HUkOiIR8HfPTXk9OxlwA5rFg16a2ZCm3",
  "https://2yb0ix8u85.ufs.sh/f/lWxu08yP3Q5qknXukFb0Ue7NHQ6ri32sCPKfAgdBcOLvDm8j",
  "https://2yb0ix8u85.ufs.sh/f/lWxu08yP3Q5qwnl7VVsmHmTBrRWb9GQMFjIhcwKVdaDtg678",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex-wrap: flex gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
