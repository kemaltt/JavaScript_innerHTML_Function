// innerHTML & Function==========================================

//innerHTML============================

//Lev1_2
//==================================
document.getElementById('info').innerHTML = ' <h1>Hallo Welt</h1>'
document.getElementById('info').innerHTML += '<h2>Wie geht es dir?</h2>'

document.getElementById('container').innerHTML = '<p>start of the element</p>'

document.write("end of the element")

//Lev1_3
//====================================

let gallery = document.getElementById('gallery')
console.log(gallery);
gallery.innerHTML = ` <figure>
<img src="https://images.unsplash.com/photo-1649887167821-d1c3085e2c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Fig1" >
<figcaption>Fig.1</figcaption>
</figure>`
gallery.innerHTML += `<figure>
<img src="https://images.unsplash.com/photo-1649887167821-d1c3085e2c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Fig1" >
<figcaption>Fig.2</figcaption>
</figure>`
gallery.innerHTML += `<figure>
<img src="https://images.unsplash.com/photo-1649887167821-d1c3085e2c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Fig1">
<figcaption>Fig.3</figcaption>
</figure>`

// Function=======================================

//Lev1_1
//===============

// function intro() {
//     let a = 1 + 3
//     console.log('Hello World');
//     console.log('1+3 =', a);
// }
// intro()

//Lev1_2
//==============

// function intro2(paramName) {
//     let varName = 'SuperCoder'
//     console.log('Hi ' + varName + '. Mein Name ist ' + paramName + '.');
// }

// intro2('Kemal')

//Lev1_3
//=================
// function intro3(name, stadt, alter) {

//     console.log('Hallo mein Name ist ' + name + '.Ich bin ' + alter + ' Jahre alt. Ich komme aus ' + stadt + '.');
// }

// intro3('SuperCoder', 'Düsseldorf', 27)

//Lev1_5
//=================

// function math(a, b) {
//     console.log(a * b);
//     console.log(a / b);
// }
// math(10, 2)
// math(30, 20)
// math(100, 100)
// math(5, 0)
// math(45, 173)
// math(1, 100)