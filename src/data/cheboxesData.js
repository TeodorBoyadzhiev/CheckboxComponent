let upperCheckboxes = [
    { label: 'Checkbox 1' },
    { label: 'Checkbox 2' },
    { label: 'Checkbox 3' }
];

let bottomCheckboxes = [
    { title: 'Checked Disabled', label: 'text_primary' },
    { title: 'Checked Disabled', label: 'Checkbox 1', checked: true, disabled: true },
    { title: 'Checkbox Disabled', label: 'Checkbox 1', disabled: true },
    { title: 'Checked partial', label: 'Checkbox 1', indeterminate: true },
    { title: 'Checked partial Disabled', label: 'Checkbox 1', indeterminate: true, disabled: true }
];


export {
    upperCheckboxes,
    bottomCheckboxes
}