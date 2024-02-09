To DO:

- On Mouse Hover (in Hamburger Menu)

## Task 2 Explaination

- TopNavBar is a component that renders the top navigation bar with a logo, a dropdown for selecting Pokémon, and a user profile icon.
- When TopNavBar renders, it includes the Dropdown component and passes props to it, such as the API URL for fetching Pokémon data, placeholder text, and various styles like width, height, border, and text color.
- Dropdown initializes its state with an empty options list and a selected option (either empty or empty array based on the isMulti flag).
- Upon mounting, Dropdown uses the useEffect hook to call the API endpoint provided in the apiURL prop. When the data is fetched successfully, it formats the results into options that react-select can use (value and label) and updates the options state.
- When a user selects an option, handleChange is triggered, updating the selectedOption state and invoking the onSelect prop callback, which logs the selected option to the console in this case.
- react-select is then rendered, providing a UI for users to select one or multiple Pokémon from a searchable dropdown list. The styles prop customizes the appearance of the dropdown according to
