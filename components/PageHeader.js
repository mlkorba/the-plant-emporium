export function PageHeader ({ title, tagline }) {
  return (
    <header className='text-center pt-16'>
      <h1 className='text-5xl text-slate-600'>{title || 'Page Title'}</h1>
      <p>{tagline || 'Page Tagline'}</p>
    </header>
  )
}
