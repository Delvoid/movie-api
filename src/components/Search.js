const Search = () => {
  return (
    <div className="relative" x-data="{ isVisible : true }">
      <input
        type="text"
        className="bg-gray-800 text-sm rounded-full focus:outline-none focus:shadow-outline w-64 px-3 pl-8 py-1"
        placeholder="Search (Press '/' to focus)"
        x-ref="search"
      />
      <div className="absolute top-0 flex items-center h-full ml-2">
        <svg className="fill-current text-gray-400 w-4" viewBox="0 0 24 24">
          <path
            className="heroicon-ui"
            d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
          />
        </svg>
      </div>
      {/* TODO:IF LOADING  */}
      {/* <div wire:loading className="spinner top-0 right-0 mr-4 mt-4" style =" position: absolute;"></div> */}
      {/* TODO:: if input value >=2  */}
      {/* <div className="absolute z-50 bg-gray-800 text-sm rounded w-64 mt-2"> */}
      {/* TODO:: results > 0 */}
      {/* TODO:: show results */}
      {/* <ul>
                    @foreach($searchResults as $game)
                        <li className="border-b border-gray-700">
                            <a
                                href="{{ route('games.show', $game['slug']) }}"
                                className="block hover:bg-gray-700 flex items-center transition ease-in-out duration-150 px-3 py-3"
                                @if($loop->last)@keydown.tab="isVisible = false" @endif
                                >
                                @isset($game['cover'])
                                    <img src="{{ Str::replaceFirst('thumb', 'cover_small', $game['cover']['url']) }}" alt="cover" className="w-10">
                                @endisset
                                @empty($game['cover'])
                                    <img src="https://via.placeholder.com/264x352" alt="cover" className="w-10">

                                @endempty

                                <span className="ml-4"> {{ $game['name'] }}</span>
                            </a>
                        </li>
                    @endforeach


                </ul> */}
      {/* TODO:: if no results  */}
      {/* <div className="px-3 py-3">No results for "{{ $search }}"</div> */}

      {/* </div> */}
    </div>
  )
}
export default Search
