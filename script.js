document.getElementById("bmiForm").addEventListener('submit',function(e){

    e.preventDefault();

    const gender = document.getElementById('gender').value;

    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseInt(document.getElementById('weight').value);

});