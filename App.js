const heading=React.createElement("h1",{id:"heading"},"hello world from react")
console.log(heading)
const root= ReactDOM.createRoot(document.getElementById('root'))
console.log(root)
  
   //how to create nested element in react

//    <div id="parent">

//    <div id="child">
//     <h1></h1>
//    </div>
//    </div>
// const parent=React.createElement("div",
// {id:"parent"},

// React.createElement("div",
// {id:"child"},
// React.createElement("h1",
// {},
// "hello world from sakshi")
// ))

// console.log(parent)
// root.render(parent)



//suppose i want to create siblings-->convert n array
//    <div id="parent">

//    <div id="child">
//     <h1></h1>
/* <h2>

</h2> */
//    </div>
//    </div>

// const parent=React.createElement("div",
// {id:"parent"},

// React.createElement("div",
// {id:"child"},
// [React.createElement("h1",
// {},
// "hello world from sakshi"),React.createElement("h2",{},"i am h2")]
// ))

// console.log(parent)
// root.render(parent)

{/* <div id="parent">
    <div id="child1">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
    <h1></h1>
        <h2></h2>

    </div>

</div> */}

const parent=React.createElement("div",
{id:"parent"},[React.createElement("div",{id:"child1"},
[
    React.createElement("h1",{},"i am h1 from c1"),
    React.createElement("h2",{},"i am h2 from c1")
]),
React.createElement("div",{id:"child2"},
[
    React.createElement("h1",{},"i am h1 from c2"),
    React.createElement("h2",{},"i am h2 from c2")
])
])

//that's why there is somethingcaleed jsx exists
//jsx will make our coding easy
console.log(parent)
root.render(parent)