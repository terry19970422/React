import { foo as fuck, abc } from './ModuleA'

function ModuleB() {
  return (
    <>
      {fuck()}
      {abc}
    </>
  )
}

export default ModuleB
