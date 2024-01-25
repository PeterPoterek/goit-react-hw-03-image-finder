import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarSubmitButton,
  SearchbarSubmitButtonText,
  SearchbarInput,
} from './SearchbarStyles';

const Searchbar = () => {
  return (
    <SearchbarHeader>
      <SearchbarForm>
        <SearchbarSubmitButton type="submit">
          <SearchbarSubmitButtonText>Search</SearchbarSubmitButtonText>
        </SearchbarSubmitButton>

        <SearchbarInput
          type="text"
          autoComplete="off"
          auto
          placeholder="Search images and photos"
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
};

export default Searchbar;
