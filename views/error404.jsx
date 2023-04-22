const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
          <div>
                <img src="https://images.unsplash.com/photo-1532202802379-df93d543bac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Superman's Dog"/>
                <div>
                Photo by <a href="AUTHOR_LINK">Kerwin Elias</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
          </div>
      </Def>
    )
  }
  
module.exports = error404
