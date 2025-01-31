import Image from "next/image";
import Hero from '../components/Hero'
import Searchbar from "@/components/Searchbar";
import CustomFilter from '../components/CustomFilter'
import { fuels, yearsOfProduction } from "../constants";
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import CarCard from "@/components/CarCard";
import ShowMore from '@/components/ShowMore';


export default async function Home({searchParams}: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
  
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Catalogo de Carros</h1>
          <p>Explore carros que você pode gostar!</p>
        </div>

        <div className="home__filters">
          <Searchbar />
        </div>

        <div className='home__filter-container'>
          <CustomFilter title='fuel' options={fuels} />
          <CustomFilter title='year' options={yearsOfProduction}  />
        </div>
      </div>
      
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>

          <ShowMore 
          pageNumber={(searchParams.limit || 10 ) / 10}
          isNext={(searchParams.limit || 10) > allCars.length}
          />
          </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops,sem resultados ...</h2>
              <p>{allCars?.message}</p>
            </div>
      )}
      
    </main>
  );
}
