import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PokemonType from "./pokemon-type"

interface PokemonCardProps {
  four: string[]
  two: string[]
  half: string[]
  quarter: string[]
  zero: string[]
  name: string
  img: string
}

export default function PokemonCard({ four, two, half, quarter, zero, name, img }: PokemonCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex justify-center bg-muted/40 p-4 dark:bg-muted/10">
          <div className="relative h-32 w-32">
            <img src={img || "/placeholder.svg"} alt={name} className="object-contain" width={128} height={128} />
          </div>
        </div>
        <div className="p-4 space-y-3">
          {four.length > 0 && <TypeSection title="4× Weakness" types={four} />}
          {two.length > 0 && <TypeSection title="2× Weakness" types={two} />}
          {half.length > 0 && <TypeSection title="½× Resistance" types={half} />}
          {quarter.length > 0 && <TypeSection title="¼× Resistance" types={quarter} />}
          {zero.length > 0 && <TypeSection title="Immune" types={zero} />}
        </div>
      </CardContent>
    </Card>
  )
}

function TypeSection({ title, types }: { title: string; types: string[] }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">{title}</h3>
      <div className="flex flex-wrap gap-1">
        {types.map((type, index) => (
          <PokemonType key={index} type={type} />
        ))}
      </div>
    </div>
  )
}
