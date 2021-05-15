<template>
<form class="main" @submit.prevent="addPost">
  <div class="row mt-5">
    <div class="col">
      <div class="row d-inline">
        <label for="title"><h2>Title:</h2></label>
        <input  type="post-title" name="title" class="float-right" v-model="title">
      </div>
      <div class="row d-inline">
        <label for="post-text"><h2>Post text:</h2></label>
        <textarea  type="post-text" name="post-text" row='8' v-model="text"></textarea>
      </div>
    </div>
    <div class="col">
      <div class="uploadfilecontainer">
        <label for="file"><h2>Upload your image/gif</h2></label>
        <br>
        <input accept="image/gif, image/jpeg, image/png" type="file" name="file" @change="onFileChange">
        <div id='image-box'>
          <img id="preview" />
        </div>
        <button type="submit" class="btn btn-primary d-block align-bottom mt-5">Add Post</button>
      </div>
    </div>
  </div>  
</form>
</template>

<script>
import axios from 'axios';
// import router from '@/router';

export default {
setup() {
  let url = '';
  let file, title, text = '';

  function onFileChange(e) {
    this.file = e.target.files[0]
      if (this.file instanceof Blob) {
          let reader = new FileReader();
          reader.onload = function (e) {
              document.getElementById("preview").src = e.target.result;
          }
          reader.readAsDataURL(this.file);
      } else {
          document.getElementById("preview").src = '';
      }
  }

  function addPost() {
    axios.post('http://localhost:3000/api/post/addPost', {
      title: this.title, text: this.text, media: this.file.name,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('sessionToken')}`
      }
    }).then((response) => {
      console.log(response)
      console.log(this.file)
      // router.push('/')
    }).catch((error) => {
      console.log(error)
    })
  }

  return {
    url,
    title,
    text,
    file,
    onFileChange,
    addPost
  }
}
}
</script>

<style lang='scss'>


input[type=post-title] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  // padding: 15px 32px;
  // text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 26px;
  margin: 0px;
  width: 80%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
textarea[type=post-text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0px;
  width: 80%;
    height: 120px;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
#preview {
  border: black;
  align-content: center;
  padding: 10px;
  max-height: 70%;
  max-width: 70%;
}
</style>