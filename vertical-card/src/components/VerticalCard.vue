<template>
    <div>
        <div class="container"> 
            <div class="course">    
                <div class="preview">   
                    <h6>Course</h6>
                    <h2>Web Development</h2>
                    <a href="">
                        View All Chapters
                    </a>
                </div>
                <div class="info">
                    <div class="progress-wrapper">  
                        <div class="progress">  

                        </div>
                        <span class="progress-text">
                            4/9 chapter challanges
                        </span>

                    </div>
                    <h6>Chapter 4 </h6>
                    <h2>Javascript, Html And Css</h2>
                    <p class="p-trunc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ab quam aperiam, ...
                    </p>
                    <button class="btn">Next Channel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.course {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgb(0,0,0,.2);
    display: flex;
    max-width: 100%;
    overflow: hidden;
    width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.course h6 {
    opacity: 0.6;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.course h2 {
    letter-spacing: 1px;
    margin: 10px 0;
}

.preview {
    background-color: blue;
    color: #fff;
    padding: 30px;
    width: 250px;
    position: relative;
}

.preview a {
    color: #fff;
    font-size: 12px;
    opacity: 0.6;
    margin-top: 30px;
    text-decoration: none;
}

.info {
    padding: 30px;
    width: 100%;
    position: relative;
}

.progress-wrapper {
    position: absolute;
    top: 30px;
    right: 30px;
    text-align: right;
    width: 250px;
}

.progress {
    background-color: #ddd;
    border-radius: 3px;
    height: 5px;
    width: 100%;
}

.progress::after {
    content: '';
    border-radius: 3px;
    background-color: #e40046;
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 36%;
}

.progress-text {
    font-size: 10px;
    opacity: 0.6;
    letter-spacing: 1px;
}

.info p {
    font-size: 12px;
    font-weight: bold;
}

.btn {
    background-color: #e40046;
    border: 1px solid transparent;
    box-shadow: 0 5px 10px rgb(0,0,0,.2);
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    position: absolute;
    bottom: 15px;
    right: 30px;
    cursor: pointer;
    transition: all .4s ease-in-out;
    font-weight: bold;
    border-radius: 20px;
}

.btn:hover {
    background: #fff;
    color: #e40046;
    border: 1px solid #e40046;
    transform: scale(1.05);
}

@media(max-width: 768px) {
    .course{
        flex-direction: column;
        width: 90%;
    }
    .preview{
        width: 100%;
    }

    .preview h2 {
        margin: 10px 0 0;
        
    }

    .preview a {
        margin-top: 10px;
    }

    .info h2 {
        margin-top: 20px;
    }

    .info p {
        margin-bottom: 50px;
    }

    .btn {
        padding: 10px 15px;
        float: right;
        font-size: 14px;
    }
}
</style>