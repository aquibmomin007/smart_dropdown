import React, { useState } from 'react';
import cx from 'classnames';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import styles from './App.module.scss';
import Examples from './components/examples'

const App = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={styles.root}>
      <h2>Examples</h2>
      <div className={styles.mainWrapper}>
        <ul className={styles.exampleListContainer}>
        <BrowserRouter>
          <div className={styles.linksWrapper}>
            {Examples.map(
                (_, i) => (
                  <div className={styles.links} key={i}>
                    <Link
                      onClick={() => setActiveTab(i)}
                      to={`/example-${i+1}`}
                      className={cx(styles.links, { [styles.activeLink]: activeTab === i })}
                    >
                      Example {i+1}
                    </Link>
                  </div>
                )
              )}
          </div>
          <div className="tabs">
            <Switch>
              {Examples.map(
                (Example, i) => <Route key={i} path={`/example-${i+1}`} exact component={Example} />
              )}
            </Switch>
          </div>
          <Redirect from="/" to="/example-1" />
        </BrowserRouter>
        </ul>
      </div>
    </div>
  )
}

export default App;
