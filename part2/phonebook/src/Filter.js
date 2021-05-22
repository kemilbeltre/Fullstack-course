const Filter = (props) => {
   const {handleChangeSearchContacts, searchContacts} = props
   return (
    <div>
        <p>filter shown with</p>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChangeSearchContacts}
          value={searchContacts}
        />
      </div>
   );
}

export default Filter;