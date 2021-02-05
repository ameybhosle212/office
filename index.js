function submitCall(){
//alert("Hello");

    var userid = document.getElementById('userid').value;
        if(userid.length < 5 || userid.length > 12){
            document.getElementById('useridError').innerHTML = 'Required Documnent should be between 5 and 12';
            // return false;
        }
    // var zip = document.getElementById('zip').value;
    // if(checkzip(zip) == null){
    //     document.getElementById('zipError').innerHTML = 'Required Documnent should be 6';
    // }
    // function checkzip(zip){
    //     var number = /^[0-9]$/;
    //     for (let index = 0; index < s.length; index++) {
    //         s[index].match(sos)
    //     }
    // } 
    var pass = document.getElementById('pass').value;
    var passw =  /^[A-Za-z]\w{7,14}$/;
    if(pass.match(passw) == null){
        document.getElementById('passError').innerHTML = 'Required Documnent should be between 7 and 12';
    }
    var phone = document.getElementById('phone').value;
    if(checkphone(phone) == 0){
        document.getElementById('phoneError').innerHTML = 'Required Documnent should be between 7 and 12';
    }
    if(checkphone(phone) == 2){
        document.getElementById('phoneError').innerHTML = 'Enter Password';
    }
    function checkphone(phone){
        if(phone[0] == '9' || phone[0] == '8' || phone[0] == '7' && phone.length == 10){
            return 1;
        }
        if(phone.length == 0){
            return 2;
        }
        return 0;
    }
    var pan = document.getElementById('pan').value;
    if(!checkpan(pan)){
        document.getElementById('panError').innerHTML = 'Required Documnent starting 4 character should be words and then numeric';
    }
    function checkpan(pan){
        var letters = /^[A-Za-z]+$/;
        console.log(pan);
        if(pan.length == 0 ){
            return false;
        }
        for (let index = 0; index < 4; index++) {
            if(pan[index].match(letters) == null){
                return false;
            }
        }
        for (let index = 4; index < pan.length-1; index++) {
            console.log(pan[index]);
            var number = /^[0-9]$/;
            console.log(pan[index].match(number));
            if(pan[index].match(number) == null){return false}
        }
        if(pan[pan.length-1].match(letters) == null) return false;
        return true;
    }
    var lan = document.getElementById('lan').value
    if(lan == null){
        document.getElementById('lanError').innerHTML = 'Please select ant one'
    }
    console.log(lan);
}

