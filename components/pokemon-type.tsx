import { Badge } from "@/components/ui/badge"

interface PokemonTypeProps {
  type: string
}

export default function PokemonType({ type }: PokemonTypeProps) {
  return (
    <Badge className="font-medium text-white" style={{ backgroundColor: typeColors[type] }}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Badge>
  )
}

const typeColors = {
  grass: "#3f9609",
  fire: "#f67e0d",
  water: "#0a79be",
  normal: "#ccc9aa",
  flying: "#5eb9b4",
  bug: "#bddd6e",
  poison: "#a819d7",
  electric: "#fffa25",
  ground: "#e2d15b",
  fighting: "#e8121a",
  psychic: "#ed0f64",
  rock: "#786b3f",
  ice: "#1a94a3",
  ghost: "#8f54a4",
  dragon: "#8b56fe",
  dark: "#604733",
  steel: "#7b8e8a",
  fairy: "#ffa0c2",
}
