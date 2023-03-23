import Image from 'next/image'

export default function ProjectItem({data}) {

  const title = data.properties.Name.title[0].plain_text;
  const type = data.properties.Type.multi_select[0].name;
  const url = data.url;
  const imgSrc = data.cover.external.url;
  console.log(url);

  return (
    <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
      <Image
        src={imgSrc}
        width="50"
        height="50"      
      />
      <h1>{title}</h1>
      <h3>{type}</h3>
      <a href={url}>강의자료 바로가기</a>
    </div>
  )
}