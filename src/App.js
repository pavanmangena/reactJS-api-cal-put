import React from 'react';
class App extends React.Component   {
  constructor(props)
  {
    super(props);
    this.state={
       content:[]
    }
  }
  componentDidMount()  {
    fetch('https://jsonplaceholder.typicode.com/posts/1',   {
    method:'PUT',
    body: JSON.stringify({
      id: 123,
      title: 'new title',
      body: 'title body content',
      userId: 12464563
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res=>res.json())
  .then(res=>{
    this.setState({content:res})
  })
}
  render()   {
    return   (
    <div>
        <b>New values that are updated are -  </b>
      	<p>Id : {this.state.content.id}</p>
				<p>Title : {this.state.content.title}</p>
    </div>
    );
  }
}
export default App;
