"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import PokemonCard from "@/components/pokemon-card"
import pokemonValues from "@/lib/web_json_updated.json"
import { ModeToggle } from "@/components/mode-toggle"

export default function PokemonApp() {
  const [filteredPokemon, setFilteredPokemon] = useState(Object.keys(pokemonValues))
  const [input, setInput] = useState("")
  const [debouncedInput, setDebouncedInput] = useState("")

  // Debounce the input to avoid excessive re-renders
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input)
    }, 100) // 100ms debounce time

    return () => {
      clearTimeout(handler)
    }
  }, [input])

  // Filter the Pokemon list based on the debounced input
  useEffect(() => {
    if (debouncedInput.length > 2) {
      setFilteredPokemon(
        Object.keys(pokemonValues).filter((name) => name.toLowerCase().includes(debouncedInput.toLowerCase())),
      )
    } else {
      setFilteredPokemon(Object.keys(pokemonValues))
    }
  }, [debouncedInput])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const isError = debouncedInput.length > 2 && filteredPokemon.length === 0

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Pokémon Weaknesses</h1>
            <p className="text-muted-foreground">Search for a Pokémon to see its type weaknesses and resistances</p>
          </div>
          <ModeToggle />
        </div>

        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            className="pl-10"
            placeholder="Search Pokémon (type at least 3 characters)"
            value={input}
            onChange={handleInputChange}
          />
          {isError && (
            <p className="text-sm text-destructive mt-1">Your entry doesn't match any Pokémon in our database.</p>
          )}
        </div>

        <div className="h-[700px] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {debouncedInput.length > 2 &&
              filteredPokemon
                .slice(0, 12)
                .map((name, index) => (
                  <PokemonCard
                    key={index}
                    four={Object.keys(pokemonValues[name]["four"])}
                    two={Object.keys(pokemonValues[name]["two"])}
                    half={Object.keys(pokemonValues[name]["half"])}
                    quarter={Object.keys(pokemonValues[name]["quarter"])}
                    zero={Object.keys(pokemonValues[name]["zero"])}
                    name={name.charAt(0).toUpperCase() + name.slice(1)}
                    img={pokemonValues[name]["sprite"]}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}
