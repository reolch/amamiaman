import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 200px)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div style={{
        fontSize: '6rem',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #2d7f7f, #4fd1c7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>
        404
      </div>
      <h1 style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#1e293b',
        margin: '0 0 1rem',
      }}>
        ページが見つかりません
      </h1>
      <p style={{
        fontSize: '1rem',
        color: '#64748b',
        maxWidth: '400px',
        lineHeight: 1.6,
        margin: '0 0 2rem',
      }}>
        お探しのページは移動または削除された可能性があります。
        URLをご確認の上、もう一度お試しください。
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '14px 32px',
          background: '#2d7f7f',
          color: '#fff',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 4px 15px rgba(45, 127, 127, 0.3)',
          transition: 'background 0.3s ease',
        }}
      >
        トップページへ戻る
      </Link>
    </div>
  )
}
