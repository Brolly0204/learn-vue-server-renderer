import createApp from './app'

export default (context) => new Promise((resolve, reject) => {
  const { app, router, store } = createApp()
  const meta = app.$meta()
  router.push(context.url)
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()
    const asyncComponents = []

    matchedComponents.forEach((component) => {
      if (typeof component.asyncData === 'function') {
        asyncComponents.push(component.asyncData({ store }))
      }
    })

    Promise.all(asyncComponents).then(() => {
      context.state = store.state
      context.meta = meta
      resolve(app)
    })
  }, reject)
})
