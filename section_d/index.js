// Creating a bucket list application 

const bucket_list = [];

function add_item() {
    const input = document.getElementById('item_input');
    const item = input.value.trim();
    if (item) {
        bucket_list.push(item);
        input.value = '';
        show_list();
    } else {
        alert('Please enter an item.');
    }
}

function show_list() {
    const list = document.getElementById('bucket_list');
    list.innerHTML = '';
    bucket_list.forEach((item, index) => {
        const list_item = document.createElement('li');
        list_item.textContent = item;
        const delete_button = document.createElement('button');
        delete_button.textContent = 'Delete';
        delete_button.onclick = () => remove_item(index);
        list_item.appendChild(delete_button);
        list.appendChild(list_item);
    });
}

function remove_item(index) {
    bucket_list.pop(index, 1);
    show_list();
}