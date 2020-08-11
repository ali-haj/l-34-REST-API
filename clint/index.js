let show = "none";
console.log(';asd')

function showEdit() {}

window.onload = async function () {
  const response = await fetch("http://localhost:3000/");
  const data = await response.json();
  data.forEach((post, index) => {
    let card = document.createElement('div');
    card.className = 'card';
    card.style = 'width : 100%'
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    let title = document.createElement('h5');
    title.className = 'card-title'
    title.innerText = post.title
    cardBody.appendChild(title)
    let postP = document.createElement('p');
    postP.className = 'card-text';
    postP.innerText = post.post;
    cardBody.appendChild(postP);
    let deletedPost = document.createElement('button');
    deletedPost.className = 'btn btn-danger';
    deletedPost.innerText = 'DELETE'
    deletedPost.addEventListener('click',()=>{
      console.log(index)
      $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/",
        data: {
          id : index,
        },
        success: function (response) {
          console.log('finsh')
        }
      });
    })
    cardBody.appendChild(deletedPost);
    let edit = document.createElement('button');
    edit.className = 'btn btn-warning'
    edit.innerText = 'EDIT'
    cardBody.appendChild(edit);
    card.appendChild(cardBody)
    let formSec = document.createElement('div');
    formSec.style.display = 'none'
    edit.addEventListener('click', () => {
      if (formSec.style.display === 'none') {
        formSec.style.display = 'block';
      } else {
        formSec.style.display = 'none';
      }
    })
    let form = document.createElement('div');
    let titleForm = document.createElement('div');

    let titleDiv = document.createElement('div');
    titleDiv.innerText = 'Title';
    titleForm.appendChild(titleDiv);

    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.className = 'form-control';
    titleInput.id = 'postTitle';

    let saveTitle = document.createElement('button');
    saveTitle.className = 'btn btn-success mt-4';
    saveTitle.innerText = 'Save';
    saveTitle.addEventListener('click',()=>{
      $.ajax({
        type: "PUT",
        url: "http://localhost:3000/",
        data: {
          id : index,
          prop : 'title',
          value : titleInput.value
        },
        success: function (response) {
          console.log('finsh')
        }
      });
    })

    titleForm.appendChild(titleInput);
    titleForm.appendChild(saveTitle)

    let postForm = document.createElement('div');

    let postLabel = document.createElement('label');
    postLabel.innerText = 'Post';
    postForm.appendChild(postLabel);

    let textArea = document.createElement('textarea');
    textArea.type = 'text';
    textArea.className = 'form-control';
    textArea.id = 'post';
    postForm.appendChild(textArea);

    let savePost = document.createElement('button');
    savePost.className = 'btn btn-success mt-4';
    savePost.innerText = 'Save';
    savePost.addEventListener('click',()=>{
      $.ajax({
        type: "PUT",
        url: "http://localhost:3000/",
        data: {
          id : index,
          prop : 'post',
          value : textArea.value
        },
        success: function (response) {
          console.log('finsh')
        }
      });
    })
    form.appendChild(titleForm);
    postForm.appendChild(savePost);
    form.appendChild(postForm);
    formSec.appendChild(form);
    cardBody.appendChild(formSec);
    document.getElementById('posts').appendChild(card);
  });
};