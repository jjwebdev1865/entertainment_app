import React, { ChangeEventHandler } from "react";
import { StyledHeaderContainer } from "./Header.styles";
import { Button, GenreBar, SearchBar } from "../../common";
import { Genre, genreList } from "../../types/models";

interface HeaderProps {
  pageTitle: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleGenre: (e: any) => void;
  genreFilter: Genre | string;
  searchVal: string;
  inputHandler: ChangeEventHandler<HTMLInputElement>;
  handleClear: () => void;
  handleSearch: () => void;
}

export const Header = ({ pageTitle, handleGenre, genreFilter, searchVal, handleClear, inputHandler, handleSearch }: HeaderProps) => {
  return (
    <StyledHeaderContainer id={`${pageTitle}-header`} >
      <h1>{pageTitle}</h1>
      <div id='movie-header-filter-bar' style={{ display: 'flex'}}>
        <GenreBar handleGenre={handleGenre} genreFilter={genreFilter} genreOptions={genreList} />
        <SearchBar searchVal={searchVal} inputHandler={inputHandler} handleClear={handleClear} />
        <Button buttonText='Clear' handleClick={handleClear} />
        <Button buttonText="Search" handleClick={handleSearch} />
      </div>
    </StyledHeaderContainer>
  );
};