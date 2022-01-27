const CheckboxComponent = (label, name, value) => {
  return (`<div class="px-2">
    <input 
        class="form-check-input" 
        type="checkbox" 
        ${value ? "checked" : ""}
        name="${name}" 
        onChange="page.handleCheckboxChange(event)"
    >
    <label class="form-check-label" for="flexCheckDefault">
        ${label}
    </label>
    </div>`);
};

export default CheckboxComponent;
