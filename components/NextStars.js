import fetch from 'isomorphic-unfetch'

function NextStars({ stargazers_count = 0, useFetch = null }) {
  const [starsCount, setStarsCount] = React.useState(stargazers_count)

  React.useEffect(() => {
    async function fetchStars () {
      if (useFetch) {
        let stargazers_count = 'An error was encountered. #sorryNotSorry'
        try {
          const res = await fetch('https://api.github.com/repos/zeit/next.js')
          const json = await res.json()
          stargazers_count = `FINAL COUNT: ${json.stargazers_count}`
        } catch (error) {
          console.error('An error was encountered:', error)
        }
        setStarsCount(stargazers_count)
      } else setStarsCount(stargazers_count)
    }

    fetchStars()
  }, [stargazers_count, useFetch])
  return <div>Next stars: {starsCount}</div>
}

export default NextStars
