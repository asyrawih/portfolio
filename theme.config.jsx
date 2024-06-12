export default {
  logo: <span>Hanan Asyrawi Rivai 👋🏼</span>,
  project: {
    link: 'https://github.com/asyrawih',
    icon: (
     <svg width="24" height="24" viewBox="0 0 256 256">
        <path
          fill="currentColor"
          d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"
        ></path>
      </svg>
    ),
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://asyrawih.id" target="_blank">
          Hanan 
        </a>
        .
      </span>
    )
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null
  },
  toc: {
    float: true
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        )
      }
      if (title === 'Blogs') {
        return <>{title}</>
      }
      return <>{title}</>
    }
  }
}
