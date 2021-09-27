
    $.ajax({
            url: 'https://randomuser.me/api/?page=5&results=3&seed=abc',
            data: '',
            dataType: 'json',
            success: function (data) {
                document.getElementById("first_im").src = data.results[0].picture.medium;
                document.getElementById("first_user").textContent = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
                document.getElementById("comm1").textContent = data.results[0].login.sha256;
                document.getElementById("second_im").src = data.results[1].picture.medium;
                document.getElementById("second_user").textContent = data.results[1].name.title + ' ' + data.results[1].name.first + ' ' + data.results[1].name.last;
                document.getElementById("comm2").textContent = data.results[1].login.sha256;
                document.getElementById("third_im").src = data.results[2].picture.medium;
                document.getElementById("third_user").textContent = data.results[2].name.title + ' ' + data.results[2].name.first + ' ' + data.results[2].name.last;
                document.getElementById("comm3").textContent = data.results[2].login.sha256;
                document.getElementById("third_im").src = data.results[3].picture.medium;
                document.getElementById("third_user").textContent = data.results[3].name.title + ' ' + data.results[2].name.first + ' ' + data.results[2].name.last;
                document.getElementById("comm4").textContent = data.results[3].login.sha256;
                document.getElementById("third_im").src = data.results[4].picture.medium;
                document.getElementById("third_user").textContent = data.results[4].name.title + ' ' + data.results[2].name.first + ' ' + data.results[2].name.last;
                document.getElementById("comm5").textContent = data.results[4].login.sha256; 
            }
        })


    $('[href="1"]').on('click', function () {
        event.preventDefault();
        $.ajax({
            url: 'https://randomuser.me/api/?page=5&results=3&seed=abc',
            data: '',
            dataType: 'json',
            success: function (data) {
                pagination(data);
            }
        })
    })

    $('[href="2"]').on('click', function () {
        event.preventDefault();
        $.ajax({
            url: 'https://randomuser.me/api/?page=4&results=3&seed=abc',
            data: '',
            dataType: 'json',
            success: function (data) {
                pagination(data);
            }
        })
    })

    $('[href="3"]').on('click', function () {
        event.preventDefault();
        $.ajax({
            url: 'https://randomuser.me/api/?page=8&results=3&seed=abc',
            data: '',
            dataType: 'json',
            success: function (data) {
                pagination(data);
            }
        })
    })

    $('[href="4"]').on('click', function () {
        event.preventDefault();
        $.ajax({
            url: 'https://randomuser.me/api/?page=9&results=3&seed=abc',
            data: '',
            dataType: 'json',
            success: function (data) {
                pagination(data);
            }
        })
    })

    $('[href="5"]').on('click', function () {
        event.preventDefault();
        $.ajax({
            url: 'https://randomuser.me/api/?page=3&results=3&seed=abc',
            data: '',
            dataType: 'json',
            success: function (data) {
                pagination(data);
            }
        })
    })

    function pagination(data) {
        document.getElementById("first_im").src = data.results[0].picture.medium;
        document.getElementById("first_user").textContent = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
        document.getElementById("comm1").textContent = data.results[0].login.sha256;
        document.getElementById("second_im").src = data.results[1].picture.medium;
        document.getElementById("second_user").textContent = data.results[1].name.title + ' ' + data.results[1].name.first + ' ' + data.results[1].name.last;
        document.getElementById("comm2").textContent = data.results[1].login.sha256;
        document.getElementById("third_im").src = data.results[2].picture.medium;
        document.getElementById("third_user").textContent = data.results[2].name.title + ' ' + data.results[2].name.first + ' ' + data.results[2].name.last;
        document.getElementById("comm3").textContent = data.results[2].login.sha256;
        document.getElementById("third_im").src = data.results[3].picture.medium;
        document.getElementById("third_user").textContent = data.results[3].name.title + ' ' + data.results[2].name.first + ' ' + data.results[2].name.last;
        document.getElementById("comm4").textContent = data.results[3].login.sha256;
        document.getElementById("third_im").src = data.results[4].picture.medium;
        document.getElementById("third_user").textContent = data.results[4].name.title + ' ' + data.results[2].name.first + ' ' + data.results[2].name.last;
        document.getElementById("comm5").textContent = data.results[4].login.sha256;
    }


    $('form').submit(function (event) {
        event.preventDefault();

        const form = $('form');
        var postData = {};

        postData = $('form').serializeArray();

        $.ajax({
            method: 'post',
            url: 'https://test.tdev.agency/',
            data: postData,
            success: (response) => alert('Success'),
            error: e => {
                alert('Error')
            }
        })

    });
    const a = function (response) {
        return alert('')
    }