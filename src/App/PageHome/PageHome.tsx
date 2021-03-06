import * as React from 'react'

import Counter from 'App/components/Counter/Counter'

function PageHome (): JSX.Element {
  return (
    <div className="page">
      <Counter showNumber={false} />
    </div>
  )
}

export default PageHome
