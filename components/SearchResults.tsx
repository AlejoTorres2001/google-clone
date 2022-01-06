import item from "../interfaces/item";
import PaginationButtons from "./PaginationButtons";
type Props = {
  results: any;
};
const SearchResults = ({ results }: Props) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime}seconds)
      </p>
      {results.items?.map((item: item, index: number) => {
        return (
          <div key={index} className="max-w-xl mb-8">
            <div className="group">
                <a href={item.link} className="text-sml">
                    {item.formattedUrl}
                </a>
                <a href={item.link}>
                    <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                        {item.title}
                    </h2>
                </a>
            </div>
            <p className="line-clamp-2">{item.snippet}</p>
          </div>
        );
      })}
    <PaginationButtons></PaginationButtons>

    </div>
  );
};

export default SearchResults;
