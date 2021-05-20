window.onload = function () {

    const completelist = document.getElementById("vidos");
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET",'http://127.0.0.1:8000/api/',true);

    xhr.send();
    let admindata;
    xhr.onreadystatechange = function() {
        if (xhr.readyState!==4) return;
        if (xhr.status !==200) {
            console.log('.!.')
        }
        else {
            admindata =xhr.response;


            for(let i=0;i<admindata['length'];i++)
            {
                let title=admindata[i]['title'];
                let url=admindata[i]['url'];


                completelist.innerHTML += '<div class="col">\n' +
                    '                    <a href="video.html" class="video_card">\n' +
                    '                        <div class="myplate card shadow-sm">\n' +
                    '                            <video width="100%" height="auto" controls="controls">\n' +
                    '                                <source src="' + url + '">\n' +
                    '                            </video>\n' +
                    '                            <div class="card-body">\n' +
                    '                                <p class="video_card card-text">' + title + '</p>\n' +
                    '                            </div>\n' +
                    '                        </div>\n' +
                    '                    </a>\n' +
                    '                </div>';
                }
        }
        };
};