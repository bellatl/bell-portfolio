import projectsData from '@/data/projectsData'
import { Card } from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import { getOgImageUrl } from '@/lib/getOgImageUrl'

export const metadata = genPageMetadata({
  title: 'Projects',
  image: getOgImageUrl({
    heading: 'Projects',
    type: 'Page',
    mode: 'dark',
  }),
})

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-border">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          {/* <p className="text-lg leading-7 text-muted-foreground">
            Showcase your projects with a hero image (16 x 9)
          </p> */}
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap justify-center">
            {projectsData.map((d) => (
              <Card
                key={d.imgSrc}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
