import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button, Table, Form } from 'react-bootstrap';

function PostData(apiUrl, data) {
  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  };

  return new Promise((resolve, reject) => {
    fetch(apiUrl, options)
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [], username: '', email: '' };
  }

  showData = () => {
    const apiUrl = 'http://localhost:3000/user';

    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ user: result });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    // this.showData();
    this.handleEdit(1);
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = 'http://localhost:3000/user';
    const { username, email, user } = this.state;

    let checkExist = user.every((data) => {
      return username !== data.username || email !== data.email;
    });

    console.log(checkExist);
    if (checkExist !== false) {
      console.log('POST');
      PostData(apiUrl, { username, email })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.showData();
  };

  handleDelete = (userId) => {
    const apiUrl = 'http://localhost:3000/user';

    const options = {
      method: 'DELETE',
      body: { userId }
    };
    console.log(userId);

    fetch(`${apiUrl}/${userId}`, options)
      .then((res) => res.json())
      .then((result) => {
        console.log('Delete');
        console.log(result);
      })
      .catch((error) => console.log(error));
    this.showData();
  };

  handleEdit = (userId) => {
    const apiUrl = 'http://localhost:3000/user';
    const options = {
      method: 'PUT',
      body: JSON.stringify({
        username: 'quochung',
        email: 'quochung@gmail.com'
      }),
      headers: {
        'Content-type': 'application/json'
      }
    };

    fetch(`${apiUrl}/${userId}`, options)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    this.showData();
  };

  render() {
    const { user } = this.state;
    let ListUser = user.map((data, index) => {
      return (
        <tr key={'user' + index}>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>
            <Button variant="primary">Edit</Button>
            <Button variant="danger" onClick={() => this.handleDelete(data.id)}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <Form className="form" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{ListUser}</tbody>
        </Table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
