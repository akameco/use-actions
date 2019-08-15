import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators, ActionCreatorsMapObject, Action } from 'redux'

export function useActions<Actions extends ActionCreatorsMapObject<Action>>(
  actions: Actions
) {
  const dispatch = useDispatch()
  return useMemo(() => {
    return bindActionCreators(actions, dispatch)
  }, [actions, dispatch])
}
