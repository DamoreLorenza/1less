import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row, Container} from 'react-bootstrap'
import getComment from './cc'

class BookList extends Component {
  state = {
    searchQuery: '',
  }

  render() {
    return (
      <>
      
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Container>
        <Row className="g-2 mt-3 flex-md-row">
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col  md={6} key={b.asin}>
                <SingleBook book={b} />
              </Col>
               ))}
              <Col md={6}>
                <h2>Comment Area</h2>
                <getComment/>
              </Col>
           
        </Row>
        </Container>
      </>
    )
  }
}

export default BookList
