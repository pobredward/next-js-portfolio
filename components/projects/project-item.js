// import Image from 'next/image'
import Image from "next/legacy/image";

export default function ProjectItem({data}) {

  console.log(data)

  const title = data.properties.Name.title[0].plain_text;
  const types = data.properties.Type.multi_select;
  const url = data.properties.LectureLink.url;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  console.log(url);

  return (
    <div className="flex flex-col m-3 bg-slate-700 rounded-xl">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="none"
        quality={100}
      />

      <div>
        <h1 className="p-2 text-2xl font-bold">{title}</h1>
        <a href={url} className="p-2">강의자료 바로가기</a>
        <div className="p-4 flex flex-row">
          {types.map((aTag) => (
            <h3 className="px-1 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700">{aTag.name}</h3>
          ))}
        </div>
      </div>
    </div>
  )
}