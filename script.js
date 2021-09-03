function Reset() {
    document.getElementById("form").reset();
}


form.addEventListener('submit', function (event) {
    event.preventDefault();

    var form = document.getElementById('form');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var image_link = document.getElementById('image_link').value;
    var skill = document.querySelectorAll('input[type="checkbox"]:checked').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var userskill = '';
    var markedCheckbox = document.getElementsByName('skill');
    for (var checkbox of markedCheckbox) {
        if (checkbox.checked)
            // console.log(checkbox.value + ' ');
            userskill = userskill + checkbox.value + ' ';
    }
    if (name == "") {
        swal('Name cannot be blank')
    } else if (name.length < 3) {
        swal('name should be minimum 3 character');
    }
    else if (email == "") {
        swal('Email cannot be blank')
    } else if (email.length < 6) {
        swal('email can not be less than 6 character');
    }
    else if (website == "") {
        swal('webiste cannot be blank')
    } else if (website.length < 5) {
        swal('name should be minimum 5 character');
    }
    else if (image_link == "") {
        swal('Image link cannot be blank')
    } else if (image_link < 6) {
        swal('image link should be minimum 6 character');
    }
    else if (userskill == "") {
        swal('select atleast 1 skill')
    } else {
        // console.log(userskill);
        // console.log(name, email, website, image_link, gender, skill);
        var obj = {
            "name": name,
            "email": email,
            "website": website,
            "image_link": image_link,
            "gender": gender,
            "skill": userskill,
            "next": null
        }
        if (localStorage.getItem('Saved Data') == null) {
            const val = localStorage.setItem('Saved Data', JSON.stringify(obj));
        } else {
            const temp = JSON.parse(localStorage.getItem('Saved Data'));
            obj.next = Object.assign({}, temp)
            const val = localStorage.setItem('Saved Data', JSON.stringify(obj));

        }

        // location.reload();

        for (let i = 0; i < localStorage.length; i++) {

            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem('Saved Data'));

            // console.log(value.name);
            var weblink = `<a href=${value.website}>${value.website} </a>`;
            var data = `<strong>${value.name}</strong><br> ${value.gender}<br> ${value.email}<br> ` + weblink + ` <br/>  ${value.skill}<br>`;

            document.getElementById('mainoutput').innerHTML += "<tr><th scope='row'>" + data + "  </th> <td id='imageout'><img src=" + `${value.image_link}` + " ></td> </tr>";

            swal({
                title: "Good job!",
                text: "You have enrolled a student name " + name + "  !",
                icon: "success",
            });
            document.getElementById("form").reset();
        }
    }



})

