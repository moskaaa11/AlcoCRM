import classes from './error.module.scss'

const ErrorPage = () => {
  return (
    <div className={classes.Error}>
      <h1 className={classes.Error__title}>Sorry!</h1>
      <p className={classes.Error__text}>Something is going wrong!</p>
    </div>
  )
}

export default ErrorPage